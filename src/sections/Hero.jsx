import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";
import TextGenerateEffect from "../components/ui/text-generate-effect.jsx";


const Hero = () => {
  return (
  

    <section className="relative pt-40 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
<div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      
      <div className="absolute top-0 left-0 w-full h-screen dark:bg-transparent bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]"
     style={{
       maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 90%,rgba(0,0,0,0) 100%)",
       WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 90%,rgba(0,0,0,0) 100%)",
     }}
>
</div>



      
            <Element name="hero">
        <div className="container flex justify-center content-center text-center ">
          <div className="relative z-2  max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Hatim El Abdellaoui | Digital Scaling Agency
            </div>
            <TextGenerateEffect className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            words="Découvrez des stratégies exclusives pour renforcer votre présence en ligne." />
            <p className=" mb-10 body-1 max-md:mb-10">
            Attirez davantage de clients grâce à des solutions innovantes et des techniques éprouvées.</p>
            <LinkScroll to="calendly" offset={-100} spy smooth>
  <Button icon="/images/zap.svg">Prenez rendez-vous maintenant</Button>
</LinkScroll>

          </div>

          
        </div>
      </Element>
    </section>
  );
};

export default Hero;