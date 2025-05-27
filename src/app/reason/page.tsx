"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";

//Question - 3
export default function TheReason() {
  const { lang } = useContext(LangContext);
  const { data, setData } = useContext(DataContext);

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center  text-teal-700">
      {lang ? (
        <div className="font-manj">
          <div className="w-full mb-3 lg:w-3/5 mx-auto px-5 lg:px-3 h-28 lg:h-42 text-center">
            <h1 className="w-fit mb-3 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              കാര്യങ്ങൾ കൂടുതൽ വ്യത്യസ്തമോ ബുദ്ധിമുട്ടുള്ളതായോ ആയി
              തോന്നിപ്പിക്കുന്ന എന്തെങ്കിലും മാറ്റം അടുത്തിടെ ഉണ്ടായിട്ടുണ്ടോ?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              സാധ്യമായ കാരണങ്ങളെക്കുറിച്ച് ചിന്തിക്കുക - ജീവിത സംഭവങ്ങൾ,
              ബന്ധങ്ങൾ, ജോലി മുതലായവ.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="നിങ്ങളുടെ വികാരങ്ങൾ ഇവിടെ പങ്കുവെക്കുക."
              value={data.answer_3}
              onChange={(e) => setData({ ...data, answer_3: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="അടുത്തത്" next animate url="/hard-part"/>
          </div>
        </div>
      ) : (
        <div className="font-lex">
          <div className="w-fit lg:w-3/5 mx-auto px-5 lg:px-3 h-24 lg:h-36 text-center">
            <h1 className="w-fit mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              Has anything changed recently that's made things feel heavier or
              different?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              Reflect on possible causes - life events, relationships, work etc.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="Share your feelings here"
              value={data.answer_3}
              onChange={(e) => setData({ ...data, answer_3: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Next" next animate url="/hard-part" />
          </div>
        </div>
      )}
    </div>
  );
}
