import Image from 'next/image';
import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="h-screen w-full absolute flex items-center justify-center">
      <Image
        src={'/metrocasa-icon.svg'}
        alt="Metrocasa"
        width={50}
        height={50}
        className="animate-pulse"
      />
    </div>
  );
};
