import Image from "next/image";

const TechStack = () => {
  return (
    <section className="px-10 py-10 mx-auto container min-h-screen">
      <div className="text-center justify-center items-center py-10">
        <div>
          <h2 className="font-black text-3xl">My Tech Stack</h2>
          <p className="text-xl">Here are some of the technologies I use...</p>
        </div>
        <div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-react.svg"
              }
              alt="The React Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">React</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-firebase.svg"
              }
              alt="The Firebase Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">Firebase</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-git.svg"
              }
              alt="The Git Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">Git</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-html.svg"
              }
              alt="The HTML Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">HTML</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-css.svg"
              }
              alt="The HTML Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">CSS</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-javascript.svg"
              }
              alt="The JavaScript Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">JavaScript</h2>
          </div>
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/zamarz/cuddly-guide/1893c175ea2d96329bc014d95bd8f534493592dc/assets/icons/icons8-postgresql.svg"
              }
              alt="The PostgreSQL Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">PostgreSQL</h2>
          </div>
          <div>
            <Image
              src={"/public/assets/icons/icons8-typescript-96.png"}
              alt="The TypeScript Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">TypeScript</h2>
          </div>
          <div>
            <Image
              src={"/public/assets/icons/icons8-typescript-96.png"}
              alt="The Tailwind Logo"
              width={200}
              height={200}
            />
            <h2 className="text-xl">Tailwind</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
