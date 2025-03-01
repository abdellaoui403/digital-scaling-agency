import { portfolios } from "../constants/index.jsx";
import PortfolioItem from "../components/PortfolioItem.jsx";

const Portfolio = () => {
  const halfLength = Math.floor(portfolios.length / 2);

  return (
    <div>
    <section className="relative z-2 py-24 md:py-28 lg:py-20" id="Portfolio">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">USE CASE 🠖</p>
          <h3 className="h3 max-md:h5 text-p4">MM EDIL SOLUTIONS</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {portfolios.slice(0, 1).map((portfolio) => (
              <PortfolioItem
              title='Problem'
                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {portfolios.slice(1, 2).map((portfolio) => (
              <PortfolioItem
              title='Solution'

                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
    <section className="relative z-2 py-24 md:py-8 lg:py-20">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
        <p className="caption mb-5 max-md:mb-2.5">USE CASE 🠖</p>
        <a href="https://zum-olivenbaum.de/" target="_blank"><h3 className="h3 max-md:h5 text-p4">Olivenbaum</h3></a>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {portfolios.slice(0, 1).map((portfolio) => (
              <PortfolioItem
              title='Problem'
 
                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {portfolios.slice(1, 2).map((portfolio) => (
              <PortfolioItem
              title='Solution'

                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
    <section className="relative z-2 py-24 md:py-8 lg:py-20">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
        <p className="caption mb-5 max-md:mb-2.5">USE CASE 🠖</p>
        <h3 className="h3 max-md:h5 text-p4">Copywriter-<br/>.ma</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {portfolios.slice(0, 1).map((portfolio) => (
              <PortfolioItem
              title='Problem'

                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {portfolios.slice(1, 2).map((portfolio) => (
              <PortfolioItem
              title='Solution'

                key={portfolio.id}
                item={portfolio}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default Portfolio;