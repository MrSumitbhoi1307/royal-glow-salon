import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [booking, setBooking] = useState({

    service: "",
    price: "",
    duration: "",

    stylist: "",

    date: "",
    time: "",

    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",

  });

  return (

    <BookingContext.Provider
      value={{
        booking,
        setBooking,
      }}
    >

      {children}

    </BookingContext.Provider>

  );

};