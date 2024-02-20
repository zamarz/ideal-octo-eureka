import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/" className="font-black text-tertiary-dark">
            Zach Marzouk
          </Link>
          <div className="space-y-2">
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="flex items-center space-x-2">
              <AiFillGithub />
              <Link href={"https://github.com/zamarz"}>GitHub</Link>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillLinkedin />
              <Link href={"https://www.linkedin.com/in/zachmarzouk/"}>
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold mb-4">Contact Me</h4>
            <div className="flex items-center space-x-2">
              <AiOutlineMail />
              <Link href={"mailto:zmarzouk23@gmail.com"}>Send an email</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zach Marzouk</p>
          <p>
            Icons by <a href="https://icons8.com/">Icons8</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
