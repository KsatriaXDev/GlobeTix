import React from "react";

type Props = {};

const AuthText = (props: Props) => {
  return (
    <div className="hidden lg:inline-flex flex-col gap-10">
      <p className="text-3xl font-bold">Globe<span className="text-blue-500">Tix</span></p>
      <p className="w-2/3 text-lg font-semibold">
        Follow your dream to travel the world with us. GlobeTix are here to help you every step of the way.
      </p>
    </div>
  );
};

export default AuthText;
