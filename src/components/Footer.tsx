import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/" className="font-black text-tertiary-dark">
            Zach Marzouk
          </Link>
        </div>
        <div>
          <p>ICONS 8 LINKEDIN GITHUB MAIN PAGE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
