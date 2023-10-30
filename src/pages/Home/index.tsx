import Footer from "@/components/Footers/MainFooter";
import Navbar from "@/components/Navbar/MainNavbar";
import Section1 from "@/containers/Section1";
import Section2 from "@/containers/Section2";
import Section3 from "@/containers/Section3";
import Section4 from "@/containers/Section4";
import Section5 from "@/containers/Section5";
import Section6 from "@/containers/Section6";
import Section7 from "@/containers/Section7";
import Section8 from "@/containers/Section8";
import Section9 from "@/containers/Section9";
import Section10 from "@/containers/Section10";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />

      {/* Sections */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
