import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <>
      <div className="fixed top-[100px] left-10 flex w-full max-w-[200px] justify-between pt-6 md:max-w-[300px]">
        {/* //TODO: Change Color of Icons with fill */}
        <a href="https://github.com/r-tom90" target="blank">
          <FaGithub className="h-auto w-5 cursor-pointer fill-gray-100 duration-1000 hover:fill-[#424242] dark:fill-stone-300 md:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-tom-81b0956b/"
          target="blank"
        >
          <FaLinkedin className="h-auto w-5 cursor-pointer fill-gray-100 duration-1000 hover:fill-[#0077B5] dark:fill-stone-300 md:scale-125" />
        </a>
        <a href="https://twitter.com/CryptoFallen" target="blank">
          <FaTwitter className="h-auto w-5 cursor-pointer fill-gray-100 duration-1000 hover:fill-[#1DA1F2] dark:fill-stone-300 md:scale-125" />
        </a>
        <a href="https://medium.com/@richardtom_79153" target="blank">
          <FaMedium className="h-auto w-5 cursor-pointer fill-gray-100 duration-1000  hover:bg-black hover:fill-white dark:fill-stone-300 md:scale-125" />
        </a>
      </div>
    </>
  );
};

export default SocialLink;
