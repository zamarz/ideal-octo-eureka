import Image from "next/image";

const Articles = () => {
  return (
    <section>
      <div className="text-center justify-center items-center py-10">
        <h2 className="font-black text-2xl">My articles</h2>
        <p>A selection of my articles</p>
      </div>
      <div className="text-center justify-center items-center py-10">
        <div>
          <Image
            src={
              "https://raw.githubusercontent.com/zamarz/ideal-octo-eureka/main/public/assets/images/Japan_image_unsplash.jpg"
            }
            width={200}
            height={200}
            alt="An image of a mountain in Japan"
            className="w-full sm:w-auto sm:max-w-lg mx-auto"
          />
          <h2 className="font-black text-xl">
            Why does Japan lag behind on startups?
          </h2>
          <p>
            {" "}
            The country has a reputation as a tech leader, but its startup
            ecosystem has yet to achieve its potential{" "}
          </p>
          <button className="button">
            <a
              href="https://www.itpro.com/business-strategy/startups/361311/why-does-japan-lag-behind-on-startups"
              target="_blank"
            >
              Read Now
            </a>
          </button>
        </div>
        <div>
          <Image
            src={
              "https://raw.githubusercontent.com/zamarz/ideal-octo-eureka/main/public/assets/images/Typing_Unsplash.jpg"
            }
            width={200}
            height={200}
            alt="An image of code on a laptop screen"
            className="w-full sm:w-auto sm:max-w-lg mx-auto"
          />
          <h2 className="font-black text-xl">
            With AI on the rise, is it time to join a union?
          </h2>
          <p>
            {" "}
            Workplace challenges posed by new technology could be answered by
            very traditional solutions{" "}
          </p>
          <button className="button">
            <a
              href="https://www.itpro.com/technology/artificial-intelligence-ai/359765/with-ai-on-the-rise-is-it-time-to-join-a-union"
              target="_blank"
            >
              Read Now
            </a>
          </button>
        </div>
        <div>
          <Image
            src={
              "https://raw.githubusercontent.com/zamarz/ideal-octo-eureka/main/public/assets/images/imgix_data_centre.jpg"
            }
            width={200}
            height={200}
            alt="An image of a mountain in Japan"
            className="w-full sm:w-auto sm:max-w-lg mx-auto"
          />
          <h2 className="font-black text-xl">
            Why Frankfurt is clamping down on data center sprawl
          </h2>
          <p>
            {" "}
            Frankfurt’s package of data center regulations could be a model for
            cities across the world{" "}
          </p>
          <button className="button">
            <a
              href="https://www.itpro.com/infrastructure/data-centres/why-frankfurt-is-clamping-down-on-data-center-sprawl"
              target="_blank"
            >
              Read Now
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
