import Image from "next/image";
import { IoPizzaOutline } from "react-icons/io5";

const Intro = () => {
  const style = { fontSize: "3em" };

  return (
    <section className="px-10 py-10 mx-auto container min-h-screen">
      <div className=" flex flex-col text-center justify-center items-center py-10">
        <div className="h-64 w-96 relative">
          <Image
            src={"/assets/images/ZM_profile.jpg"}
            className="w-full h-auto sm:w-auto sm:max-w-lg mx-auto rounded-lg"
            alt="A portrait image of the developer"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-row items-center py-5 ">
          <h2 className="font-black text-5xl py-5">Hi, I'm Zach</h2>
          <div className="px-5">
            <IoPizzaOutline style={style} className="animate-bounce" />
          </div>
        </div>
        <p className="text-2xl">
          I'm an enthusiastic developer keen to delve deeper into the tech world
          and continue my development journey.
        </p>
      </div>
    </section>
  );
};

export default Intro;
