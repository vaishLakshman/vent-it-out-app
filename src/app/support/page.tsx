"use client";
import Image from "next/image";
import hug from "../../../public/hug.png";
import SimpleButton from "../UI/simpleButton";
import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import { LangContext } from "../Contexts/langContext";

export default function Support() {
  const { lang } = useContext(LangContext);
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-teal-100 flex items-center justify-center  text-teal-700">
      {lang ? (
        <div className="w-fit text-xl font-manj lg:w-4/5 mx-auto px-5 lg:px-3 lg:mb-10  lg:h-fit text-center">
          <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
            പ്രിയപ്പെട്ട {user.Name ? user.Name : "Friend"},
          </h1>
          <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
            നിങ്ങൾ എന്ത് ബുദ്ധിമുട്ടിലാണെങ്കിലും, നിങ്ങൾ ഒരിക്കലും ഒറ്റയ്ക്കല്ല
            എന്നോർക്കുക.
          </h1>
          <div className="w-fit mx-auto mb-14">
            <Image
              src={hug}
              alt="hugging"
              height={150}
              width={150}
              className="drop-shadow-4xl"
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton
              text="അടുത്തതിലേക്ക്"
              next
              animate
              url="/make-a-choice"
            />
          </div>
        </div>
      ) : (
        <div className="w-fit text-xl font-lex lg:w-4/5 mx-auto px-5 lg:px-3 lg:mb-10  lg:h-fit text-center">
          <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
            Dear {user.Name ? user.Name : "Friend"},
          </h1>
          <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-5xl">
            Whatever your'e going through, I just want you to know you're not
            alone in this.
          </h1>
          <div className="w-fit mx-auto mb-14">
            <Image
              src={hug}
              alt="hugging"
              height={150}
              width={150}
              className="drop-shadow-4xl"
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Next" next animate url="/make-a-choice" />
          </div>
        </div>
      )}
    </div>
  );
}
