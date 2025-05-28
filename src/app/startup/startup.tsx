"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import ToggleSwitch from "../UI/toggleSwitch";

export default function Startup() {
  const { lang } = useContext(LangContext);
  return (
    <div className="startup-container px-5">
      {/* TBR */}
      <div className="absolute top-0 right-0 mt-1 mr-3 text-teal-600">
        <ToggleSwitch />
      </div>

      {lang ? (
        <div className="font-manj text-2xl lg:text-4xl pl-2 mx-auto leading-10 lg:leading-14  text-teal-800 mb-10 lg:mb-14">
          <h1>ഹായ് ..</h1>
          <h1>സന്തോഷക്കുറവ് ഉണ്ടോ??</h1>
          <h1>പക്ഷെ ആരോടും സംസാരിക്കാനും താല്പര്യം ഇല്ലേ?</h1>
          <h1>ഞാൻ സഹായിക്കാം ..</h1>
          <h1>ആരും അറിയുമെന്ന ഭയം കൂടാതെ, മനസ്സിൽ ഉള്ളതെല്ലാം പറഞ്ഞോളൂ :)</h1>
        </div>
      ) : (
        <div className="font-lex text-2xl lg:text-4xl lg:w-2/3 mx-auto leading-10 lg:leading-14  text-teal-800 mb-10 lg:mb-14">
          <h1>Hi..</h1>
          <h1>Feeling a lil blue?</h1>
          <h1>Don&apos;t want to talk?</h1>
          <h1>Let me help you..</h1>
          <h1>
            Vent out everything in your heart to me, without the fear of letting
            anybody know :)
          </h1>
        </div>
      )}
      <div
        className={`w-fit mx-auto ${
          lang ? "font-manj" : "font-lex"
        }  text-lg lg:text-2xl `}
      >
        <SimpleButton
          text={lang ? "തുടങ്ങാം" : "Get Started"}
          url="/tell-me-about-you"
          next={true}
          animate
        />
      </div>
    </div>
  );
}
