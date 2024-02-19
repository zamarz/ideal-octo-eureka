import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="text-center justify-center items-center py-10">
        <Image
          src="https://github.com/zamarz/ideal-octo-eureka/blob/main/public/assets/images/ZM_profile.jpg"
          className="w-full sm:w-auto sm:max-w-lg mx-auto "
          alt="A portrait image of the developer"
          width={400}
          height={400}
        />
        <h2 className="font-black text-2xl">Hi, I'm Zach</h2>
        <p>
          I'm an enthusiastic developer keen to delve deeper into the tech world
          and continue my development journey.{" "}
        </p>
      </div>
    </section>
  );
};

export default Intro;
