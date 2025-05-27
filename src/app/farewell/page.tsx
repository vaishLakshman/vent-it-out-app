"use client";
import Image from "next/image";
import happy from "../../../public/happy.png";
import SimpleButton from "../UI/simpleButton";
import Footer from "../footer/footer";
import { useContext } from "react";
import { LangContext } from "../Contexts/langContext";

export default function Support() {
  const { lang } = useContext(LangContext);
  return (
    <div className="relative h-screen bg-teal-100 flex items-center justify-center text-teal-700">
      <div>
        <div className="w-fit text-xl mx-auto px-5 lg:px-3 lg:mb-10 text-center">
          {lang ? (
            <h1
              lang="ml"
              className="w-fit mx-auto mb-5 font-manj lg:mb-16 text-md font-bold lg:text-5xl"
            >
              നിങ്ങൾക്കു നല്ല ചിന്തകൾ മാത്രം ആശംസിക്കുന്നു
            </h1>
          ) : (
            <h1
              lang="en"
              className="w-fit mx-auto font-lex  mb-5 lg:mb-16 text-md font-bold lg:text-5xl"
            >
              Sending you good vibes
            </h1>
          )}
          <div className="w-fit mx-auto mb-14">
            <Image
              src={happy}
              alt="happy guys"
              height={300}
              width={300}
              className="drop-shadow-4xl"
            />
          </div>
        </div>
        <div
          className={`w-fit  ${
            lang ? "font-manj" : "font-lex"
          }  mx-auto mt-10 lg:text-2xl`}
        >
          <SimpleButton text={`${lang ? "തിരിച്ചു പോകാം" : "Home"}`} url="/" />
        </div>
        {/* <h1 className="font-lex w-fit mx-auto opacity-50 text-xs lg:text-sm hover:opacity-75">
          if you like my work, you can{" "}
          <a href="" className="underline underline-offset-3 font-semibold ">
            buy me a coffee
          </a>
        </h1> */}
      </div>

      <Footer coffee />
    </div>
  );
}
