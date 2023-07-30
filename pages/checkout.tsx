import React from 'react';
import Navbar from "./components/organisems/Navbar";




const OrderSection: React.FC = () => {
  return (
    

    <section className="order" id="order">
      <Navbar />
      <h3 className="sub-heading">order now</h3>
      <h1 className="heading">free and fast</h1>

      <form>
        <div className="inputBox">
          <div className="input">
            <span>your name</span>
            <input type="text" placeholder="enter your name" id="name" />
          </div>
          <div className="input">
            <span>your number</span>
            <input type="number" placeholder="enter your number" id="number" />
          </div>
        </div>
        <div className="inputBox">
          <div className="input">
            <span>your order</span>
            <input type="text" placeholder="enter tickets title" id="orders" />
          </div>
          <div className="input">
            <span>additional order</span>
            <input type="text" placeholder="extra order" id="extraOrders" />
          </div>
        </div>
        <div className="inputBox">
          <div className="input">
            <span>numbers of ticket</span>
            <input type="number" placeholder="how many orders" id="tickets" />
          </div>
          <div className="input">
            <span>date and time</span>
            <input type="datetime-local" id="time" />
          </div>
        </div>
        <div className="inputBox">
          <div className="input">
            <span>your address</span>
            <textarea name="" placeholder="enter your address" id="address" cols={30} rows={10}></textarea>
          </div>
          <div className="input">
            <span>your message</span>
            <textarea name="" placeholder="enter your message" id="message" cols={30} rows={10}></textarea>
          </div>
        </div>

        <button type="submit" id="btn123">
          Pay Now
        </button>
      </form>

      <h3 className="sub-heading">
        <a href="index.html">back</a>
      </h3>
    </section>
  );
};

export default OrderSection;
