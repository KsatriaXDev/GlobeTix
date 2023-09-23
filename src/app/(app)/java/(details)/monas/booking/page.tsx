import React from "react";
import BookingForm from "@/components/Shared/Fragments/BookingForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BookingForm tour="Monas-Jakarta Tour" />
    </div>
  );
};

export default page;
