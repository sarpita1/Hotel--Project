import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BookingProvider } from "@/context/BookingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}