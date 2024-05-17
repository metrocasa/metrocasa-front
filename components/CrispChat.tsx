'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`7e32d520-7253-4041-ba05-7cff015e7707`);
  });

  return null;
};

export default CrispChat;
