import HeroContent from "./components/HeroContent";
import HeroDescription from "./components/HeroDescription";

export default function Home() {
 return(
    <div className="flex items-center m-auto justify-center flex-col w-10/12 mb-16 md:m-6 md:rounded-md md:w-full lg:flex-row-reverse">
    <HeroContent />
    <HeroDescription />
    </div>

 )
}
