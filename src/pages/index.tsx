import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Footer2 from "@/Components/Footer2";
import Main from "@/Components/Main";
import Header from "@/Components/Header";
import Corousel from "@/Components/Corousel"



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
      <Header />
      <Main />
      <Corousel/>
      <Footer />
      <Footer2 />
    </>
  );
}
