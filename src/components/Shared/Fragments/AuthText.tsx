import React from "react";

type Props = {};

const AuthText = (props: Props) => {
  return (
    <div className="hidden lg:inline-flex flex-col gap-10">
      <p className="text-3xl font-bold">Globe<span className="text-blue-500">Tix</span></p>
      <h1 className="text-xl w-2/3 font-bold leading-normal tracking-tight text-gray-900 sm:text-2xl dark:text-white dark:bg-gray-900">
        Discover. Travel. Repeat: Your Trusted Partner for Seamless Ticketing to the Indonesia Most Enchanting Destinations and Experiences.
        </h1>
    </div>
  );
};

export default AuthText;
