"use client";
import Link from "next/link";
import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import axios from "axios";


type Props = {
  tour: string;
  link: string;
};

const BookingForm = ({tour, link}: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");

  const handleForm = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        address,
        email,
        phone,
        date,
        destination,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleForm} className="flex flex-col justify-center items-center gap-8 h-screen">
      <h3 className="text-xl font-semibold py-5">Book Your Dream Tour Now!</h3>
      {/* Name */}
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="name">Fullname</label>
        <input className="rounded-md" type="text" placeholder="Fullname" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {/* Address */}
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="address">Address</label>
        <input className="rounded-md" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="email">Email</label>
        <input className="rounded-md" type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {/* Phone Number */}
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="phone">Phone Number</label>
        <PhoneInput country={"us"} value={phone} onChange={(value) => setPhone(value)} />
      </div>
      {/* Date */}
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="date">Departure Date</label>
        <input className="rounded-md" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      {/* Selection */}
      <div className="flex flex-col gap-2 ">
        <label htmlFor="select">Tour Destination</label>
        <select className="w-80" value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value={tour}>{tour}</option>
        </select>
      </div>
      <div className="flex gap-10 py-5">
        <button
          type="submit"
          className="px-7 py-3 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full inline-flex items-center"
        >
          <Link href="https://buy.stripe.com/test_6oEcNcatm8SYe9W4gh">
            <span>Pay Now</span>
          </Link>
        </button>
        <button className="px-7 py-3 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full inline-flex items-center">
          <Link href="/bali/bali-zoo"> Go Back </Link>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;