import { NextRequest, NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

export async function GET(req: NextRequest) {
  const pb = new PocketBase(process.env.POCKETBASE_URL!);

  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');

    if (!date) return NextResponse.json({ error: 'Missing date parameter' }, { status: 400 });

    if (!pb.authStore.isValid) {
      await pb.admins.authWithPassword(
        process.env.POCKETBASE_ADMIN_EMAIL!,
        process.env.POCKETBASE_ADMIN_PASSWORD!
      );
    }

    const startOfDay = `${date} 00:00:00`;
    const endOfDay = `${date} 23:59:59`;

    const result = await pb.collection('bookings').getFullList(200, {
      filter: `date >= "${startOfDay}" && date <= "${endOfDay}"`,
    });

    const bookedTimes = result.flatMap(record => {
      const [h, m] = record.time.split(':').map(Number);
      const duration = record.service === 'Full Detail' ? 3 : 2;
      return Array.from({ length: duration }, (_, i) => `${(h + i).toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}`);
    });

    return NextResponse.json(bookedTimes);
  } catch (err) {
    console.error('PocketBase Availability API Error:', err);
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
  }
}
