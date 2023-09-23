import React from "react";
import Link from "next/link";
import BookingForm from "@/components/Shared/Fragments/BookingForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BookingForm tour="Bali Zoo-Denpasar Tour" link="https://buy.stripe.com/test_6oEcNcatm8SYe9W4gh" />
    </div>
  );
};

export default page;
