"use client";

import { useRouter } from "next/navigation";

export interface ButtonType {
  text: string;
  url?: string;
  next?: boolean;
  animate?: boolean;
}

const SimpleButton = ({ text, url = "", next, animate }: ButtonType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };
  return (
    <button
      // href={url}
      onClick={handleClick}
      className={`relative inline-flex items-center bg-teal-200 lg:bg-teal-100 px-12 py-3 overflow-hidden cursor-pointer text-inherit  text-teal-500  rounded-full hover:text-teal-600  group hover:drop-shadow-3xl `}
    >
      <span
        className={`relative mx-auto text-inherit  ${
          animate ? "group-hover:mx-5 duration-300 ease" : ""
        }`}
      >
        {text}
      </span>
      {next && (
        <svg
          className="hidden lg:block w-5 h-5 ml-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default SimpleButton;
