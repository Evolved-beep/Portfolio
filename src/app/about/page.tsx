import React from "react";
import Button from "./component/button";
import Link from "next/link";

const About = () => {
    return(
        <section className="md:w-7/12 md:mx-auto flex flex-col items-center md:items-start mt-8 py-2v ">
            <h1 className="text-white font-extrabold mb-4 text-base lg:text-xl">About me</h1>
            <p className="text-white text-sm mb-6 py-4 lg:text-lg w-10/12">
                {`After 2 years of studying, I'm ready to jump into the web developement industry. 
                I'm also praticing combat sport it taught me the hard work and the work discipline and to never back down in front a problem.
                During my life I've been confront into a lot of difficulties such as Crohn's disease and sport injury (ACL), this shaped my mind. 
                Each time I'm working I put everything I've got into my work whatever how many hours I should work.
                One of my biggest quality it's my dedication, I always want more for being the best. 
                If you want to know more about me, I would be very happy to discuss it with you`}
            </p>
            <div>
                <Link href="mailto:maxime.magnier@outlook.com">
                    <Button content="Contact me !"/>
                </Link>
                <Link href="https://github.com/Evolved-beep">
                    <Button content="Visit my Github !" />
                </Link>
            </div>
        </section>
    )

}

export default About