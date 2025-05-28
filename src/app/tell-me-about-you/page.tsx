"use client";
import { useContext, useState } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { UserContext } from "../Contexts/userContext";

export default function GetToKnow() {
  const { lang } = useContext(LangContext);
  const { user, setUser } = useContext(UserContext);
  const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value);
    setInputAge(e.target.value);

    if (!isNaN(age)) setUser({ ...user, Age: age });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setInputName(e.target.value);

    if (!inputName.length) setUser({ ...user, Name: name });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center font-lex text-teal-700 ">
      {lang ? (
        <div className="px-3 font-manj">
          <h1 className="w-fit mx-auto h-20 lg:h-28 text-xl font-bold lg:text-4xl">
            നിങ്ങളെ കൊറേശ്ശെ അറിയട്ടെ
          </h1>
          <div className="form-one-container h-40 lg:h-52 lg:text-2xl">
            <div className="flex gap-2 mb-5 items-center">
              <label className="w-22 lg:w-2/3 text-right">പേര് :</label>
              <input
                className="bg-teal-50 px-2 py-2 text-teal-900"
                type="text"
                placeholder="രമേശ്"
                value={inputName}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex gap-2 mb-5 items-center">
              <label className="w-22 lg:w-2/3 text-right 0">വയസ്സ് :</label>
              <input
                className="bg-white px-2 py-2 text-teal-900"
                type="number"
                placeholder="20"
                value={inputAge}
                onChange={handleAgeChange}
              />
            </div>
            {/* TBR */}
            {/* <div className="flex gap-2 items-center">
              <label className="w-32 lg:w-54  text-right ">ചോദ്യങ്ങൾ :</label>
              <div className="w-full">
                <ToggleSwitch
                  left_label="English"
                  right_label="മലയാളം"
                  full_opacity
                />
              </div>
            </div> */}
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="തുടങ്ങാം" url="/q1" />
          </div>
        </div>
      ) : (
        <div className="lg:px-3">
          <h1 className="w-fit mx-auto h-20 lg:h-28 text-xl font-bold lg:text-4xl">
            Let me barely know you
          </h1>
          <div className="form-one-container h-40 lg:h-52 lg:text-2xl">
            <div className="flex gap-2 mb-5 items-center">
              <label className="w-2/3 text-right">Your Name :</label>
              <input
                className="bg-teal-50 px-2 py-2 text-teal-900 w-full"
                type="text"
                placeholder="Suresh"
                value={inputName}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex gap-2 mb-5 items-center">
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
            {/* <div className="flex gap-2 items-center">
              <label className="w-2/3 text-right">Questions :</label>
              <div className="w-full">
                <ToggleSwitch
                  left_label="English"
                  right_label="മലയാളം"
                  full_opacity
                />
              </div>
            </div> */}
          </div>
          <div className="w-fit mx-auto my-5 lg:text-2xl">
            <SimpleButton text="Let's Begin" url="/q1" />
          </div>
        </div>
      )}
    </div>
  );
}
