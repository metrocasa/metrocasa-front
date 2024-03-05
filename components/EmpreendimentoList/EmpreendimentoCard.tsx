import React from 'react';

const EmpreendimentoCard = ({ data }: { data: any }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const POPULATE_PARAM = process.env.POPULATE_PARAM;
  return (
    <div key={data.id}>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 absolute"></div>
      <img
        src={`http://localhost:1337${data.attributes.fachada.data.attributes.url}`}
        alt={data.attributes.hash}
        className="w-96 h-[520px] object-cover relative"
      />

      <div>
        <h2>{data.attributes.title}</h2>
        <p>{data.attributes.subtitle}</p>
      </div>
    </div>
  );
};

export default EmpreendimentoCard;
