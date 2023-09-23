import React from "react";

type Props = {
  title: string;
};

const DestinationTitle = ({title}: Props) => {
  return (
    <div className="flex justify-center items-center font-serif h-20ext-center text-gray-900 text-5xl uppercase pb-8">
      <h2>{title}</h2>
    </div>
  );
};

export default DestinationTitle;
