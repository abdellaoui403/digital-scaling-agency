"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className={`${idx > 6 ? 'text-[#2ef1ff]' : 'dark:text-white text-white'} opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};
export default TextGenerateEffect;