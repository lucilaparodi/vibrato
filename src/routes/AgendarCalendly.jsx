import React from "react";
import Button from "../components/Button";
import { InlineWidget } from "react-calendly";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const AgendarCalendly = () => {
  return (
    <div className="relative m-auto gradient-background2">
      <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
        <Header />
        <div className="mt-16 md:mt-0 mb-[-60px]">
          <InlineWidget
            styles={{
              width: "100%",
              height: "100vh",
            }}
            url="https://calendly.com/vibratomusicauy?background_color=ewhite&text_color=0d2834&primary_color=004056"
            style="min-width:320px;height:700px;"
            text="Agendar"
            color="#004056"
            textColor="white"
            branding={true}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AgendarCalendly;
