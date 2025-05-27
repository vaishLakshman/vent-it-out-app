"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";

//Question - 2
export default function TheDifficulty() {
  const { lang } = useContext(LangContext);
  const { data, setData } = useContext(DataContext);
  

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center text-teal-700">
      {lang ? (
        <div className="font-manj">
          <div className="w-fit lg:w-3/5 mx-auto px-5 lg:px-3 h-24 lg:h-36 text-center">
            <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              അടുത്തിടെ നിങ്ങളെ ബുദ്ധിമുട്ടിച്ചതോ മടുപ്പിക്കുന്നതോ ആയ
              എന്തെങ്കിലും സംഭവിച്ചോ?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              നിങ്ങളെ തളർത്തുന്ന ഏതെങ്കിലുമൊരു കാര്യമോ രീതിയോ.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="നിങ്ങളുടെ വികാരങ്ങൾ ഇവിടെ പങ്കുവെക്കുക."
              value={data.answer_2}
              onChange={(e) => setData({ ...data, answer_2: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="അടുത്ത ചോദ്യം" next animate url="/reason" />
          </div>
        </div>
      ) : (
        <div className="font-lex ">
          <div className="w-fit lg:w-3/5 mx-auto px-5 lg:px-3 h-24 lg:h-36 text-center">
            <h1 className="w-fit mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              Is there something that&apos;s been especially hard or frustrating for
              you lately?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              Any specific struggle or pattern that&apos;s making you feel low
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="Share your feelings here"
              value={data.answer_2}
              onChange={(e) => setData({ ...data, answer_2: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Next" next animate url="/reason" />
          </div>
        </div>
      )}
    </div>
  );
}
