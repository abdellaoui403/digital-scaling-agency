import clsx from "clsx";

const PortfolioItem = ({ item, containerClassName,title }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    ><h4 class="body-2 mb-0.5 text-p1 tracking-wide ">{title} :</h4>
      <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>

      
    </div>
  );
};
export default PortfolioItem;
