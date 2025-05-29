"use client";
import { useContext, useState } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { UserContext } from "../Contexts/userContext";

export default function GetToKnow() {
  const { lang } = useContext(LangContext);
  const { user, setUser } = useContext(UserContext);
  const [inputAge, setInputAge] = useState("");

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value);
    setInputAge(e.target.value);

    if (!isNaN(age)) setUser({ ...user, Age: age });
  };

  // Beautifying
  const toCamelCase = (text: string) => {
    const cased_text = text.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
    return cased_text;
  };

  return (
    <div className="h-lvh bg-teal-100 flex items-center justify-center font-lex text-teal-700">
      <div>
        <div className="form-one-container lg:px-3 lg:mb-8 mb-12">
          {lang ? (
            <div>
              <h1 className="w-fit mx-auto font-manj h-20 lg:h-28 text-xl font-bold lg:text-4xl text-center">
                നിങ്ങളെ കൊറേശ്ശെ അറിയട്ടെ
              </h1>
              <div className="font-manj h-40 lg:h-52 lg:text-2xl">
                <div className="flex gap-2 mb-5 items-center">
                  <label className="w-22 lg:w-2/3  text-right">പേര് :</label>
                  <input
                    className="bg-white px-2 py-2 text-teal-900"
                    type="text"
                    placeholder="രമേശ്"
                    value={user.Name}
                    onChange={(e) => setUser({ ...user, Name: e.target.value })}
                  />
                </div>
                <div className="flex gap-2 mb-8 items-center">
                  <label className="w-22 lg:w-2/3  text-right 0">
                    വയസ്സ് :
                  </label>
                  <input
                    lang="ml"
                    className="bg-white px-2 py-2 text-teal-900"
                    type="number"
                    placeholder="20"
                    value={inputAge}
                    onChange={handleAgeChange}
                  />
                </div>
                {/* TBR */}

                {/* <div className="w-fit mx-auto px-3 py-2 ">
                  <ToggleSwitch
                    left_label="English"
                    right_label="മലയാളം"
                    full_opacity
                  />
                </div> */}
              </div>
            </div>
          ) : (
            <div className="">
              <h1 className="w-fit mx-auto h-20 lg:h-28 text-xl font-bold lg:text-4xl">
                Let me barely know you
              </h1>
              <div className=" h-40 lg:h-52 lg:text-2xl">
                <div className="flex gap-2 mb-5 items-center">
                  <label className="w-2/3 text-right">Your Name :</label>
                  <input
                    className="bg-white px-2 py-2 text-teal-900"
                    type="text"
                    placeholder="Suresh"
                    value={user.Name}
                    onChange={(e) =>
                      setUser({ ...user, Name: toCamelCase(e.target.value) })
                    }
                  />
                </div>
                <div className="flex gap-2 mb-5 lg:mb-8 items-center">
                  <label className="w-2/3 text-right">How old are you :</label>
                  <input
                    className="bg-white px-2 py-2 text-teal-900"
                    type="number"
                    placeholder="20"
                    value={inputAge}
                    onChange={handleAgeChange}
                  />
                </div>

                {/* TBR */}

                {/* <div className="w-fit mx-auto px-3 py-2">
                  <ToggleSwitch
                    left_label="English"
                    right_label="മലയാളം"
                    full_opacity
                  />
                </div> */}
              </div>
            </div>
          )}
        </div>
        <div
          className={`w-fit mx-auto my-5 lg:text-2xl ${
            lang ? "font-manj" : "font-lex"
          }`}
        >
          <SimpleButton
            text={lang ? "തുടങ്ങാം" : "Let's Begin"}
            next
            animate
            url="/q1"
          />
        </div>
      </div>
    </div>
  );
}
