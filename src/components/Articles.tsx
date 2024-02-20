import Image from "next/image";

const Articles = () => {
  return (
    <section
      id="articles"
      className="px-10 py-10 mx-auto container min-h-screen"
    >
      <div className="text-center justify-center items-center ">
        <h2 className="font-black text-3xl">My articles</h2>
        <p className="text-xl py-3">A selection of articles I have written</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center justify-center items-center mx-4  py-10 my-10">
        <div className="flex flex-col items-center">
          <div className="h-64 w-96 relative">
            <Image
              src={"/assets/images/Japan_image_unsplash.jpg"}
              layout="fill"
              objectFit="cover"
              alt="An image of a mountain in Japan"
              className="w-full h-auto sm:w-auto sm:max-w-lg mx-auto my-4"
            />
          </div>
          <h2 className="font-black text-2xl my-5">
            Why does Japan lag behind on startups?
          </h2>
          <p className="px-3 mx-3 my-3">
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
        <div className="flex flex-col items-center">
          <div className="h-64 w-96 relative">
            <Image
              src={"/assets/images/Typing_Unsplash.jpg"}
              layout="fill"
              objectFit="cover"
              alt="An image of code on a laptop screen"
              className="w-full sm:w-auto sm:max-w-lg mx-auto my-4"
            />
          </div>
          <h2 className="font-black text-2xl my-5">
            With AI on the rise, is it time to join a union?
          </h2>
          <p className="px-3 mx-3 my-3">
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
        <div className="flex flex-col items-center">
          <div className="h-64 w-96 relative">
            <Image
              src={"/assets/images/imgix_data_centre.jpg"}
              layout="fill"
              objectFit="cover"
              alt="An image of data centre servers"
              className="w-full sm:w-auto sm:max-w-lg mx-auto my-4"
            />
          </div>
          <h2 className="font-black text-2xl my-5">
            Why Frankfurt is clamping down on data center sprawl
          </h2>
          <p className="px-3 mx-3 my-3">
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
