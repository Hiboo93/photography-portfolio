import React from "react";
import { Link } from "react-router-dom";

import ButtonRelume from "../../common/design-system/Button/ButtonRelume.jsx"

import WomanImg from "../../../assets/img/about/woman.png";

function About() {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/*  image  */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="woman" />
          </div>
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              <b>Dolorum et tempora saepe quod amet.</b> Sed sint suscipit
              repellendus
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              rem voluptates accusantium exercitationem, nobis tenetur ipsam
              possimus voluptatibus .
            </p>
            <br />
            <ButtonRelume>
              <Link to={"/portfolio"}>VIEW MY WORK</Link>
            </ButtonRelume>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
