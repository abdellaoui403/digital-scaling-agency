import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="About us"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16 z-10"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
            <div className=" relative z-2 ">
          <div>
          <div className="caption small-2 uppercase text-p3">
About Me            </div>

            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md  text-p4">
Hatim El Abdellaoui            </h3>
<div className="caption1 small-3 uppercase ">
software engineer            </div>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>

        </div>

              <p className="body-1 mb-10 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin vel augue, interdum quam et, faucibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin vel augue, interdum quam et, faucibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin vel augue, interdum quam et, faucibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin vel augue, interdum quam et, faucibus ex.
              </p>

            
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <div
                    alt="screen"
                    className="rounded-xl w-[655px] h-[455px]"
                  />
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </Element>
    </section>
  );
};
export default Download;