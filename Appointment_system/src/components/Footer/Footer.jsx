const Footer = () => {
  return (
    <footer className="bg-gray-400 ">
      <div className="container">
        <div className=" flex w-full flex-col md:flex-row flex-wrap justify-between items-center gap-[30px] lg:gap-[10px] py-6 text-white ">
          <div className="flex flex-col items-center">
            <ul>
              <li className="pb-1">Doctor</li>
              <li className="py-1">Services</li>
              <li className="py-1">Contact Us</li>
              <li className="py-1">book.appointment@yahoo.com</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center max-md:hidden">
            <ul>
              <li className="pb-1">FaceBook</li>
              <li className="py-1">Twitter</li>
              <li className="py-1">LinkendIn</li>
              <li className="py-1">Instagram </li>
            </ul>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Copyright 2024 Created By{" "}
              <a
                href="https://manuelnieto.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-all duration-200 ease-in-out"
              >
                NietoDeveloper
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
