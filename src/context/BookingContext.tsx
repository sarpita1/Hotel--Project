"use client";
import React, { createContext, useContext, useState } from "react";

type BookingContextType = {
  city: string;
  setCity: (city: string) => void;
  checkIn: string;
  setCheckIn: (checkIn: string) => void;
  checkOut: string;
  setCheckOut: (checkOut: string) => void;
  guests: number;
  setGuests: (guests: number) => void;
  rooms:number;
  setRooms: (rooms: number) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState<any>('');
  const [rooms, setRooms] = useState<any>('');
  

  return (
    <BookingContext.Provider
      value={{ city, setCity, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests ,rooms,setRooms}}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};