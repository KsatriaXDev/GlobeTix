"use client"

import React, { useContext } from "react";
import { Table } from 'flowbite-react';
import { OrderContext } from "@/context/OrderContext";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const {orderList}= useContext(OrderContext)
  return (
    <div className="flex flex-col gap-5 mt-40 px-20 h-screen">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold tracking-widest uppercase">Orders</h3>
        <button className=" py-3 text-base font-medium text-white border border-transparent rounded-full bg-blue-700 hover:bg-blue-800 md:py-2 md:text-sm md:px-8 hover:shadow">
          <Link href="/">Go to Homepage</Link>
        </button>
      </div>
      
      <Table>
        <Table.Head>
          <Table.HeadCell>
            #
          </Table.HeadCell>
          <Table.HeadCell>
            Order
          </Table.HeadCell>
          <Table.HeadCell>
            Price
          </Table.HeadCell>
          <Table.HeadCell>
            Date
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {orderList.map((data:any)=>(
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.order}</Table.Cell>
              <Table.Cell>{data.price}</Table.Cell>
              <Table.Cell>{data.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default page;
