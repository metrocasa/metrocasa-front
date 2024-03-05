import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Filter = () => {
  return (
    <div className="py-9 bg-main-red/5 text-white">
      <div className="container flex justify-center gap-4 mx-auto px-4 sm:px-6 lg:px-16">
        <Input type="text" className="max-w-80" />
        <Input type="text" className="max-w-80" />
        <Button variant={'primary'}>Pesquisar</Button>
      </div>
    </div>
  );
};

export default Filter;
