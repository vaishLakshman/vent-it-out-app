"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";

//Question - 5
export default function TheRelief() {
  const { lang } = useContext(LangContext);
  const { data, setData } = useContext(DataContext);

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center  text-teal-700">
      {lang ? (
        <div className="font-manj">
          <div className="w-fit lg:w-4/5 mx-auto px-5 lg:px-3 h-34 lg:h-40 text-center">
            <h1 className="w-fit mx-auto mb-3 lg:mb-3 text-md font-bold lg:text-4xl">
              കാര്യങ്ങൾ ഇപ്പോൾ അൽപ്പമെങ്കിലും സഹായപ്രദമോ സൗകര്യപ്രധമോ ആവാൻ എന്ത്
              സഹായിക്കുമെന്ന് നിങ്ങൾ കരുതുന്നു?
            </h1>
            <h3 className="font-light  mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              മാറ്റത്തിനായുള്ള നിങ്ങളുടെ ആവശ്യങ്ങളോ പ്രതീക്ഷകളോ പ്രകടിപ്പിക്കുക.
              എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം ഉണ്ടാവണമെന്നില്ല.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="നിങ്ങളുടെ വികാരങ്ങൾ ഇവിടെ പങ്കുവെക്കുക."
              value={data.answer_5}
              onChange={(e) => setData({ ...data, answer_5: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="തീർക്കാം" next={false} url="/support" />
          </div>
        </div>
      ) : (
        <div className="font-lex">
          <div className="w-fit lg:w-4/5 mx-auto px-5 lg:px-3 h-32 lg:h-40 text-center">
            <h1 className="w-fit mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
              What do you think might help even a little, or make things feel a
              bit more manageable right now?
            </h1>
            <h3 className="font-light mx-auto w-fit px-2 text-xs lg:text-xl lg:mx-auto">
              Express your needs or hopes for change. It&apos;s okay to not have all
              the answers.
            </h3>
          </div>
          <div className=" px-5 lg:w-2/3 mx-auto question-one-container h-54 lg:h-72 lg:h-36 lg:text-2xl">
            <textarea
              className="bg-teal-50 w-full mx-auto p-2 text-teal-900 rounded-xl"
              rows={8}
              placeholder="Share your feelings here"
              value={data.answer_5}
              onChange={(e) => setData({ ...data, answer_5: e.target.value })}
            />
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Done" next={false} url="/support" />
          </div>
        </div>
      )}
    </div>
  );
}
