import { NextRequest, NextResponse } from 'next/server';
import PocketBase from 'pocketbase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const pb = new PocketBase(process.env.POCKETBASE_URL!);

  try {
    if (!pb.authStore.isValid) {
      await pb.admins.authWithPassword(
        process.env.POCKETBASE_ADMIN_EMAIL!,
        process.env.POCKETBASE_ADMIN_PASSWORD!
      );
    }

    const data = await req.json();
    const { date, time, name, email, phone, vehicle, service, location, message } = data;

    if (!date || !time || !name || !email || !vehicle || !service || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recordData = { date, time, name, email, phone: phone || '', vehicle, service, location, message: message || '' };
    const record = await pb.collection('bookings').create(recordData);

    await resend.emails.send({
      from: 'Glanzfluss <noreply@glanzfluss.de>',
      cc: 'kontakt@glanzfluss.de',
      to: email,
      subject: 'Buchungsbestätigung – Glanzfluss',
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f8f8; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; color: #a3e635;">Glanzfluss</h1>
            <p style="margin: 5px 0 0; font-size: 14px; color: #555;">Professioneller mobiler Autopflegeservice</p>
          </div>

          <div style="background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; color: #222;">Hallo ${name},</h2>
            <p>vielen Dank für deine Buchung bei <strong>Glanzfluss</strong>! Wir haben deine Anfrage erfolgreich erhalten.</p>

            <h3 style="margin-bottom: 10px; color: #333;">Deine Buchungsdetails</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 8px; font-weight: bold;">Datum:</td>
                <td style="padding: 8px;">${new Date(date).toLocaleDateString('de-DE', { weekday:'long', day:'2-digit', month:'long', year:'numeric' })}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 8px; font-weight: bold;">Uhrzeit:</td>
                <td style="padding: 8px;">${time} Uhr</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 8px; font-weight: bold;">Leistung:</td>
                <td style="padding: 8px;">${service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 8px; font-weight: bold;">Fahrzeug:</td>
                <td style="padding: 8px;">${vehicle}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 8px; font-weight: bold;">Ort:</td>
                <td style="padding: 8px;">${location}</td>
              </tr>
              ${message ? `<tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 8px; font-weight: bold;">Nachricht:</td><td style="padding: 8px;">${message}</td></tr>` : ''}
            </table>

            <p>Wir freuen uns auf deinen Termin und darauf, dein Fahrzeug zum Glänzen zu bringen! 🚗💦</p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://glanzfluss.de" style="display: inline-block; padding: 12px 25px; background-color: #a3e635; color: #000; font-weight: bold; text-decoration: none; border-radius: 6px; transition: all 0.3s;">Mehr über Glanzfluss</a>
            </div>

            <p style="font-size: 14px; color: #555; text-align: center;">Wenn du Fragen hast, erreichst du uns jederzeit unter <a href="mailto:kontakt@glanzfluss.de" style="color:#a3e635;">kontakt@glanzfluss.de</a> oder telefonisch unter <a href="tel:+4915258714502" style="color:#a3e635;">+49 1525 8714502</a>.</p>
          </div>

          <p style="text-align:center; font-size:12px; color:#999; margin-top:20px;">© ${new Date().getFullYear()} Glanzfluss – Alle Rechte vorbehalten.</p>
        </div>
      `
    });



    return NextResponse.json({ success: true, record });
  } catch (err) {
    console.error('Booking API Error:', err);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
