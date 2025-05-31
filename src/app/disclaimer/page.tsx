"use client";
import { useContext } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";

export default function MakeAChoice() {
  const { lang } = useContext(LangContext);

  return (
    <div className="relative h-lvh bg-teal-100 flex items-center justify-center  text-teal-700">
      <div>
        {lang ? (
          <div className="w-fit font-manj lg:w-3/5 mx-auto px-5 lg:px-3 lg:mb-10 lg:h-fit text-center">
            <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-lg  lg:text-5xl">
              ഹൃദയം തുറന്നപ്പോൾ കുറച്ചൊക്കെ ആശ്വാസം കിട്ടിയെന്നു കരുതുന്നു.
            </h1>
            <h3 className="w-fit mx-auto mb-3  font-light lg:mb-5 text-lg font-bold lg:text-2xl">
              നിങ്ങളുടെ പ്രതികരണങ്ങൾ പങ്കുവെക്കുന്നതിൽ നിങ്ങൾക്ക്
              എതിർപ്പില്ലായെങ്കിൽ, ഈയൊരു അവസ്ഥയെ എങ്ങനെ മറികടക്കാം
              എന്നതിനെക്കുറിച്ച് ചില കാഴ്ചപ്പാടുകളും നിർദ്ദേശങ്ങളും നൽകി ഞാൻ
              നിങ്ങളെ സഹായിക്കാം.
            </h3>
            <h3 className="w-fit mx-auto mb-8 font-light lg:mb-10 text-lg font-bold lg:text-2xl">
              ഇല്ല എങ്കിലും കുഴപ്പമില്ല - ഈയൊരു തുറന്നുപറച്ചിൽ നിങ്ങൾക്കു
              ആശ്വാസം നൽകിയെന്ന് മനസിലാക്കി നിങ്ങളുടെ പ്രതികരണങ്ങൾ മായ്ച്ചു
              കളയാം :)
            </h3>
            <h3 className="w-fit mx-auto px-5 text-[10px] font-light lg:mb-3 text-md italic font-normal lg:text-sm">
              *നിങ്ങളുടെ വിവരങ്ങൾ ഞാൻ സേവ് ചെയ്യില്ല. നിങ്ങൾ ഹോം പേജിലേക് തിരികെ
              പോകുമ്പോൾ അത് മായ്ക്കപ്പെടും.
            </h3>
          </div>
        ) : (
          <div className="w-fit text-xl font-lex lg:w-3/5 mx-auto px-5 lg:px-3 mb-10 h-fit text-center">
            <h3 className="w-fit mx-auto mb-3 lg:mb-5 text-lg lg:text-3xl">
              Vent your thoughts without worry - your data is never stored
            </h3>
            <h3 className="w-fit mx-auto mb-3 lg:mb-5 text-lg lg:text-3xl">
              Your responses stay only till the end, where you can either get
              some suggestions or toss them and move on with a lighter heart.
              💬✨
            </h3>
          </div>
        )}

        <div
          className={`w-fit mx-auto lg:text-2xl  ${
            lang ? `font-manj` : `font-lex`
          }`}
        >
          <SimpleButton
            text={lang ? `തുടങ്ങാം` : `Let's Begin`}
            next
            animate
            url="/q1"
          />
        </div>
      </div>
    </div>
  );
}
