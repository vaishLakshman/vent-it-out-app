"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";

//Question - 4
export default function TheHardPart() {
  const { lang } = useContext(LangContext);
  const { data, setData } = useContext(DataContext);

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center  text-teal-700">
      {lang ? (
        <div className="font-manj">
          <div className="w-fit lg:w-4/5 mx-auto px-5 lg:px-3 h-26 lg:h-40 text-center">
            <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              നിങ്ങൾ ഇപ്പോൾ കടന്നുപോകുന്നതിൽ ഏറ്റവും ബുദ്ധിമുട്ടുള്ള ഘട്ടം
              എന്താണ്?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              നിങ്ങളുടെ ഇപ്പോഴത്തെ മാനസീകാവസ്ഥയുടെ കാരണത്തെ അറിയാം
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="നിങ്ങളുടെ വികാരങ്ങൾ ഇവിടെ പങ്കുവെക്കുക."
              value={data.answer_4}
              onChange={(e) => setData({ ...data, answer_4: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="അടുത്തത്" next animate url="/relief" />
          </div>
        </div>
      ) : (
        <div className="font-lex">
          <div className="w-fit lg:w-4/5 mx-auto px-5 lg:px-3 h-24 lg:h-40 text-center">
            <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              What's the hardest part about what you're going through right now?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              Let's get to the core of your current emotional experience.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="Share your feelings here"
              value={data.answer_4}
              onChange={(e) => setData({ ...data, answer_4: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Next" next animate url="/relief" />
          </div>
        </div>
      )}
    </div>
  );
}
