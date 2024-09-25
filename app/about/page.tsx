import React from "react";
import Image from "next/image";
import profilePicture from "@/assets/images/chibidev.png";
import AboutCard from "../components/AboutCard";
import about from '@/data/about.json'
import diplomas from "@/data/diplomas.json"
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-12">
        <h1 className="mt-12 font-bold text-5xl">About me</h1>
        <h2 className="text-2xl">Introduction</h2>
      <section className="flex justify-center flex-col items-center gap-4 text-[#CDCDCD] lg:flex-row">
        <Image
          src={profilePicture}
          height={350}
          alt="Representation of a developer"
          className="lg:hidden"
        />
        <section className="w-9/12 lg:w-3/5 lg:px-12">
          <div className="w-full md:flex md:justify-center md:items-center md:gap-2.5">
            {about.map((content,index) => {
              return(
                  <AboutCard svg={content.svg} title={content.title} status={content.status} url={content.url} key={index}/>
                )
              })}
            </div>
          <div className="flex justify-center items-center flex-col gap-5 ">
            <p className="mb-4 text-base text-center italic leading-snug text-[#848484] md:border-2 md:border-[#242424] md:p-5 md:rounded-md">
              Hello, I'm Maxime I'm passionate by the world of internet since I'm
              a kid I always knew. I wanted to work in this world but life never
              goes how we wanted. I've learned the web developement by my own
              first, then I've followed two educations for getting degrees. Since
              I'm trying to improve my skills and trying to increase it for being
              a better developer. I always want to learn more and more things
              because the world of the developement is really wide.
            </p>
            <Link href='/docs/resume.pdf' download>
              <button className="flex justify-center items-center bg-[#CDCDCD] py-5 px-6 text-[#000000] font-bold rounded-lg w-60">
                Get my resume
              </button>
            </Link>
          </div>
        </section>
      </section>
        <section className="w-9/12 flex flex-col lg:w-3/5 lg:px-12 gap-4">
          <h2 className="py-5 text-center font-bold text-2xl">My diplomas</h2>
          <div className="w-full md:flex md:justify-center md:items-center md:gap-2.5">
          {diplomas.map((content,index) => {
            return(
              <AboutCard svg={content.svg} title={content.title} status={content.years} url={content.url} key={index} />
            )
          })}
          </div>
        </section>
    </section>
  );
};

export default About;
