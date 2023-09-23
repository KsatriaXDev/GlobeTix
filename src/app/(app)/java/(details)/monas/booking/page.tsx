import React from "react";
import BookingForm from "@/components/Shared/Fragments/BookingForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BookingForm tour="Monas-Jakarta Tour" link="https://buy.stripe.com/test_5kAaF4fNGb168PC8ww"/>
    </div>
  );
};

export default page;
