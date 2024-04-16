import Image from 'next/image';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="h-screen w-full absolute flex items-center justify-center">
      <Image
        src={'/metrocasa-icon.svg'}
        alt="Metrocasa"
        width={70}
        height={70}
        className="animate-pulse w-auto h-auto"
      />
    </div>
  );
};

export default Loading;
