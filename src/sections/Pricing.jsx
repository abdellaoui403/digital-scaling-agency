import { Element } from "react-scroll";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    // Dynamically load Calendly script when the component mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full h-[180vh] flex pt-[10rem] flex-col" id="calendly">
      <Element name="pricing" className="w-full h-full">
        <div className="container w-full h-full flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center text-center py-20">
            <div className="caption small-2 uppercase text-p3">
              Reach Us
            </div>
            <h3 className="h3 max-lg:h4 max-md:h5 text-p4">
            Prenez rendez-vous maintenant            </h3>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* Calendly Embed Section - Takes Full Space */}
          
          <div className="flex-1 w-full flex items-center justify-center">
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/abdellaoui403/30min"
              style={{ minWidth: "320px", minHeight: "120vh", width: "100%", height: "100%" }}
            ></div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
