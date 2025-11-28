import React from 'react';

interface ContactInfoItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: React.ReactNode;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, title, content }) => {
  const ACCENT_BG = 'bg-[#a3e635]';
  const ICON_COLOR = 'text-black';

  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className={`p-3 rounded-full ${ACCENT_BG} flex items-center justify-center`}>
        <Icon className={`h-6 w-6 ${ICON_COLOR}`} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};
