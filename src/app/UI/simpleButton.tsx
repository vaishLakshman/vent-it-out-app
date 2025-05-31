"use client";

import { useRouter } from "next/navigation";

export interface ButtonType {
  text: string;
  url?: string;
  next?: boolean;
  animate?: boolean;
  disable?: boolean;
}

const SimpleButton = ({
  text,
  url = "",
  next,
  animate,
  disable,
}: ButtonType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };
  return (
    <button
      // href={url}
      onClick={handleClick}
      disabled={disable}
      className={`relative inline-flex items-center ${
        disable
          ? "bg-gray-200 cursor-not-allowed text-gray-400"
          : "bg-teal-200/60 lg:bg-teal-100 cursor-pointer text-teal-500 hover:text-teal-600  group hover:drop-shadow-3xl"
      } px-11 py-3 overflow-hidden  font-inherit  rounded-full`}
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
