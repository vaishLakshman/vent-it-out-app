"use client";
import Image from "next/image";
import hug from "../../../public/hug.png";
import SimpleButton from "../UI/simpleButton";
import { useContext } from "react";
import { LangContext } from "../Contexts/langContext";

export default function Support() {
  const { lang } = useContext(LangContext);

  return (
    <div className="min-h-lvh bg-teal-100 flex items-center justify-center  text-teal-700">
      <div className="w-fit text-xl font-manj lg:w-4/5 mx-auto px-5 lg:px-3 lg:mb-10  lg:h-fit text-center">
        {lang ? (
          <div className="font-manj">
            <h1 className=" mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
              പ്രിയപ്പെട്ട സുഹൃത്തേ
            </h1>
            <h1 className=" mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
              നിങ്ങൾ എന്ത് ബുദ്ധിമുട്ടിലാണെങ്കിലും, നിങ്ങൾ ഒരിക്കലും
              ഒറ്റയ്ക്കല്ല എന്നോർക്കുക.
            </h1>
          </div>
        ) : (
          <div className="font-lex">
            <h1 className=" mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
              Dear Friend,
            </h1>
            <h1 className=" mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
              Whatever your&apos;e going through, I just want you to know
              you&apos;re not alone in this.
            </h1>
          </div>
        )}

        <div className="w-fit mx-auto mb-14">
          <Image
            src={hug}
            alt="hugging"
            height={150}
            width={150}
            className="drop-shadow-4xl"
          />
        </div>
        <div
          className={`w-fit mx-auto my-5 lg:text-2xl  ${
            lang ? `font-manj` : `font-lex`
          }`}
        >
          <SimpleButton
            text={lang ? `അടുത്തതിലേക്ക്` : `Next`}
            next
            animate
            url="/make-a-choice"
          />
        </div>
      </div>
    </div>
  );
}
