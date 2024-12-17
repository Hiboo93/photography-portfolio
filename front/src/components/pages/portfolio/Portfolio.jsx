import React from "react";

import { motion } from "motion/react";
import { transition1 } from "../../transition";

import { Link } from "react-router-dom";
import ButtonRelume from "../../common/design-system/Button/ButtonRelume.jsx";

import Image1 from "../../../assets/img/portfolio/1.png";
import Image2 from "../../../assets/img/portfolio/2.png";
import Image3 from "../../../assets/img/portfolio/3.png";
import Image4 from "../../../assets/img/portfolio/4.png";

function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className=" lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
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
            <ButtonRelume>
              <Link to={"/contact"}>HIRE ME</Link>
            </ButtonRelume>
          </motion.div>
          {/* image grid */}
          <div className="my-8 grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt="woman"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt="woman"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt="woman"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt="woman"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
