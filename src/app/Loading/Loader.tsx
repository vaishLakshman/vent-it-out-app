import Image from "next/image";
import loading from "../../../public/loading.gif";
import { useContext } from "react";
import { LangContext } from "../Contexts/langContext";

export default function Loader() {
  const { lang } = useContext(LangContext);
  return (
    <div className="h-full w-full lg:h-full lg:w-full bg-white/30 backdrop-blur-md z-100 flex items-center justify-center text-teal-700">
      <div className="loader-container w-4/5 px-3 py-5 bg-teal-100 shadow-2xl rounded-3xl w-72 h-63 lg:w-81 lg:h-72  mx-auto">
        {lang ? (
          <h1 className="w-fit  lg:mt-5 font-manj mx-auto text-center text-md font-bold lg:text3xl">
            നിങ്ങളുടെ ഉത്തരങ്ങൾ വിശകലനം ചെയ്തുകൊണ്ടിരിക്കുന്നു
          </h1>
        ) : (
          <h1 className="w-fit lg:mt-5 font-lex text-center mx-auto  text-md font-bold lg:text3xl">
            Your Inputs are being analysed...
          </h1>
        )}
        <div className="w-fit mx-auto">
          <Image src={loading} alt="loading animation" width={200} />
        </div>
      </div>
    </div>
  );
}
