import React from "react";
import Link from "next/link";
import BookingForm from "@/components/Shared/Fragments/BookingForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BookingForm tour="Bali Zoo-Denpasar Tour" />
    </div>
  );
};

export default page;
