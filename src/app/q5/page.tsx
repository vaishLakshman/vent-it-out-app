"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";
import questions_Eng from "../Questions/Questionnaire_English";
import questions_Mal from "../Questions/Questionnaire_Malayalam";

//Question - 5
export default function TheRelief() {
  const { lang } = useContext(LangContext);
  const { data, setData } = useContext(DataContext);

  return (
    <div className="h-lvh bg-teal-100 flex items-center justify-center  text-teal-700">
      <div>
        {lang ? (
          <div className="font-manj mx-4 lg:mx-36">
            <div className="w-fit px-3 h-34 lg:h-40 text-center">
              <h1 className="mx-auto mb-2 lg:mb-5 text-md font-bold lg:text-4xl">
                {questions_Mal[4].question}
              </h1>
              <h3 className="font-light px-2 text-xs lg:text-xl lg:mx-auto">
                {questions_Mal[4].hint}
              </h3>
            </div>
            <div className="question-one-container px-3 h-fit lg:text-2xl">
              <textarea
                className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
                rows={10}
                placeholder="നിങ്ങളുടെ വികാരങ്ങൾ ഇവിടെ പങ്കുവെക്കുക."
                value={data.answer_5}
                onChange={(e) => setData({ ...data, answer_5: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="font-lex mx-4 lg:mx-36">
            <div className="w-fit px-3 h-24 lg:h-40 text-center">
              <h1 className="mx-auto mb-2 lg:mb-5 text-md font-bold lg:text-4xl">
                {questions_Eng[4].question}
              </h1>
              <h3 className="font-light px-2 text-xs lg:text-xl lg:mx-auto">
                {questions_Eng[4].hint}
              </h3>
            </div>
            <div className="question-one-container px-3 h-fit lg:text-2xl">
              <textarea
                className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
                rows={10}
                placeholder="Share your feelings here"
                value={data.answer_5}
                onChange={(e) => setData({ ...data, answer_5: e.target.value })}
              />
            </div>
          </div>
        )}

        <div
          className={`w-fit mx-auto my-5 lg:text-2xl ${
            lang ? "font-manj" : "font-lex"
          }`}
        >
          <SimpleButton
            text={lang ? "തീർക്കാം" : "Done"}
            next
            animate
            url="/support"
          />
        </div>
      </div>
    </div>
  );
}
