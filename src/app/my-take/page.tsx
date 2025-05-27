"use client";
import { useContext, useEffect, useState } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";
import trouble from "../../../public/trouble.png";
import Loader from "../Loading/Loader";
import Image from "next/image";
import DOMPurify from "dompurify";

export default function MyTakes() {
  const { lang } = useContext(LangContext);
  const { data } = useContext(DataContext);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleSubmit();
  }, []);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await sleep(4000);
      const res = await fetch("/api/ai-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, lang }),
      });

      const response = await res.json();
      setAiResponse(response.output);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("out", aiResponse);

  return (
    <div className="pt-8 lg:h-screen bg-teal-100 flex items-center justify-center text-teal-700 overflow-auto pb-10 lg:pb-7">
      <div className=" ">
        {loading ? (
          <div className="">
            <Loader />
          </div>
        ) : (
          <div>
            {lang ? (
              <div className="font-manj  mt-5">
                {error ? (
                  <div className="w-fit lg:w-full mx-auto px-5 lg:px-3 h-24 lg:h-fit text-justify">
                    <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
                      എനിക്കിപ്പോ അഭിപ്രായങ്ങൾ പറയാൻ സാധിക്കുന്നില്ല
                    </h1>
                    <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-sm font-light lg:text-4xl">
                      അല്പം കഴിഞ്ഞു ശ്രമിക്കാമോ
                    </h1>
                    <div className="w-fit mx-auto">
                      <Image src={trouble} alt="confused" width={200} />
                    </div>
                  </div>
                ) : (
                  <div className="w-fit mb-10 lg:w-full lg:mb-10 mx-auto px-7 lg:px-3 h-1/3 lg:my-24 lg:h-fit text-justify">
                    <h1 className="w-fit mx-auto mb-5 lg:mb-5 text-md font-bold lg:text-4xl">
                      എന്റെ അഭിപ്രായങ്ങൾ ഇതാ..
                    </h1>

                    {aiResponse && (
                      <div
                        className="lg:w-2/3 mx-auto lg:text-lg tracking-wide"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(aiResponse),
                        }}
                      />
                    )}
                  </div>
                )}

                <div className="w-fit mx-auto my-5 lg:text-2xl">
                  <SimpleButton
                    text="അടുത്ത ചോദ്യം"
                    next
                    animate
                    url="/farewell"
                  />
                </div>
              </div>
            ) : (
              <div className="font-lex mt-5">
                {error ? (
                  <div className="w-fit lg:w-full mx-auto px-5 lg:px-3 h-24 lg:h-fit text-justify">
                    <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-md font-bold lg:text-4xl">
                      Sorry..I can&apos;t seem to get answers.
                    </h1>
                    <h1 className="w-fit mb-2 mx-auto lg:mb-3 text-sm font-light lg:text-4xl">
                      Could you try later?
                    </h1>
                    <div className="w-fit mx-auto">
                      <Image src={trouble} alt="confused" width={200} />
                    </div>
                  </div>
                ) : (
                  <div className="w-fit mb-10 lg:w-full lg:mb-10 mx-auto px-7 lg:px-3 h-1/3 lg:my-24 lg:h-fit text-justify">
                    <h1 className="w-fit mx-auto mb-5 lg:mb-5 text-md font-bold lg:text-4xl">
                      Here&apos;s what I&apos;ll say..
                    </h1>

                    {aiResponse && (
                      <div
                        className="lg:w-2/3 mx-auto lg:text-lg tracking-wide"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(aiResponse),
                        }}
                      />
                    )}
                  </div>
                )}

                <div className="w-fit mx-auto my-5 lg:text-2xl">
                  <SimpleButton
                    text="Closing off"
                    next
                    animate
                    url="/farewell"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
