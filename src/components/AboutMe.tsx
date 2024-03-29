import { BsBook } from "react-icons/bs";

const AboutMe = () => {
  const style = { fontSize: "3em" };
  return (
    <section
      id="about-me"
      className="px-10 py-10 mx-auto container min-h-screen"
    >
      <div className="py-10 mx-10 px-10">
        <div className="flex items-center">
          <h2 className="font-black text-3xl lg:text-5xl">About Me</h2>
          <BsBook style={style} className="ml-4" />
        </div>
        <div className="py-7  text-xl lg:text-2xl">
          <p>
            After covering the world of B2B tech as a writer, I decided to take
            the plunge and dive even deeper into the industry by becoming a
            software developer.
          </p>
          <br></br>
          <p>
            This is something that has always fascinated me and I find it very
            satisfying to connect the pieces of the puzzle and understand how
            everything works, not only in the back-end but the front-end too.
          </p>
          <br></br>
          <p>
            I'm always looking to learn new things and jump at the opportunity
            to try my hand at unfamiliar technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
