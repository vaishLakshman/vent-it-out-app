"use client";
import { useContext, useEffect, useState } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";
import trouble from "../../../public/trouble.png";
import Loader from "../Loading/Loader";
import Image from "next/image";
import DOMPurify from "dompurify";
import { UserContext } from "../Contexts/userContext";

export default function MyTakes() {
  const { lang } = useContext(LangContext);
  const { data } = useContext(DataContext);
  const { user } = useContext(UserContext);

  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      !data.answer_1.length &&
      !data.answer_2.length &&
      !data.answer_3.length &&
      !data.answer_4.length &&
      !data.answer_5.length
    ) {
      setError("No Data Entered");
    } else {
      handleSubmit();
    }
  }, []);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await sleep(2000);
      const res = await fetch("/api/ai-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, lang, user }),
      });

      const response = await res.json();
      setAiResponse(response.output);
      // eslint-disable-next-line
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-8 h-screen bg-teal-100 flex items-center justify-center text-teal-700 overflow-auto pb-10 lg:pb-7">
      <div className="h-full pb-15">
        {loading ? (
          <div className="h-full">
            <Loader />
          </div>
        ) : (
          <div>
            {lang ? (
              <div className="font-manj mt-5">
                {error ? (
                  <div className="w-fit lg:w-full mx-auto px-5 lg:px-3 lg:h-fit text-justify">
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
                  <div className="w-fit mb-10 relative lg:w-full lg:mb-10 mx-auto px-7 lg:px-3 h-1/3 lg:my-24 lg:h-fit ">
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
                    text="അടുത്തത്തിലേക് "
                    next
                    animate
                    url="/farewell"
                  />
                </div>
              </div>
            ) : (
              <div className="font-lex">
                {error ? (
                  <div className="w-fit lg:w-full mt-52 mx-auto px-5 lg:mb-16 lg:px-3 text-justify">
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
                  <div className="w-fit mb-10 mt-7 lg:w-full lg:mb-10 mx-auto px-7 lg:px-3 h-1/3 lg:my-24 lg:h-fit text-justify">
                    <h1 className="w-fit mx-auto mb-5 lg:mb-5 text-md font-bold lg:text-4xl">
                      Here&apos;s what I&apos;ll say..
                    </h1>

                    {aiResponse && (
                      <div
                        className="lg:w-2/3 mx-auto lg:text-lg tracking-wide "
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(aiResponse),
                        }}
                      />
                    )}
                  </div>
                )}

                <div className="w-fit mx-auto my-5 lg:text-2xl pb-12">
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
