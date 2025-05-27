"use client";
import React, { useContext } from "react";
import { LangContext } from "../Contexts/langContext";

export interface ToggleSwitchType {
  left_label?: string;
  right_label?: string;
  full_opacity?: boolean;
}

const ToggleSwitch = ({
  left_label = "Aa",
  right_label = "മ",
  full_opacity,
}: ToggleSwitchType) => {
  const context = useContext(LangContext);
  const { lang, setLang } = context;

  const handleCheckboxChange = () => {
    setLang(!lang);
  };

  return (
    <>
      <label
        className={`themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center ${
          !full_opacity && "opacity-50"
        } hover:opacity-100`}
      >
        <input
          type="checkbox"
          lang="ml"
          checked={lang}
          onChange={handleCheckboxChange}
          className="sr-only text-teal-600"
        />

        <span className="label flex items-center text-md lg:text-xl font-medium ">
          {left_label}
        </span>
        <span
          className={`slider mx-1 lg:mx-4 flex h-6 lg:h-8 w-[40px] lg:w-[60px] items-center rounded-full p-1 duration-200 font-lex ${
            lang ? "bg-teal-700" : "bg-teal-400"
          }`}
        >
          <span
            className={`dot h-4 lg:h-6 w-4 lg:w-6 rounded-full bg-white duration-200  ${
              lang ? "translate-x-[16px] lg:translate-x-[28px]" : ""
            }`}
          ></span>
        </span>

        <span className="label flex items-center pt-1 text-lg lg:text-2xl  font-manj text-bold">
          {right_label}
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
