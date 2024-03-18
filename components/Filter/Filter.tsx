import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Filter = () => {
  return (
    <div className="py-9 bg-white text-white max-w-[700px] rounded-md shadow-md mx-auto">
      <div className="container flex justify-center gap-4 mx-auto px-4 sm:px-6 lg:px-16">
        <Input type="text" className="max-w-80 border-black" />
        <Input type="text" className="max-w-80 border-black" />
        <Button variant={"primary"}>Pesquisar</Button>
      </div>
    </div>
  );
};

export default Filter;
