import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ReactLenis from "lenis/react";

const PreEventHomepage = () => {
  return (
    <div className="bg-[url('/images/bg-full.png')] bg-cover bg-top bg-no-repeat min-h-screen ">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Navbar />
        <section className="h-screen flex justify-center items-center font-bold">
          <Banner text="qwertyuiolkjhgcdfghjkjhgftyu" />
        </section>
        <section className="h-screen flex justify-center items-center text-6xl font-bold flex-col">
          <h1 className="">Lorem, ipsum.</h1>
          <h1 className="font-host font-bold">Lorem, ipsum.</h1>
          <h1 className="font-oddval">Lorem, ipsum.</h1>
        </section>
      </ReactLenis>
    </div>
  );
};

export default PreEventHomepage;
