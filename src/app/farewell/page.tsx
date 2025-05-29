"use client";
import Image from "next/image";
import happy from "../../../public/happy.png";
import SimpleButton from "../UI/simpleButton";
import Footer from "../footer/footer";
import { useContext, useEffect } from "react";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";
import { UserContext } from "../Contexts/userContext";

export default function Support() {
  const { lang } = useContext(LangContext);
  const { setData } = useContext(DataContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setData({
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
    });

    setUser({
      Name: "",
      Age: 0,
    });
  }, []);

  return (
    <div className=" h-lvh bg-teal-100 flex items-center justify-center text-teal-700">
      <div>
        <div className=" text-xl mx-auto px-5 lg:px-3 lg:mb-10 text-center">
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
              className=""
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
      </div>

      <Footer ml={lang} />
    </div>
  );
}
