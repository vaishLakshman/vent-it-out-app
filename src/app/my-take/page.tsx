"use client";
import { useContext, useEffect, useState } from "react";
import SimpleButton from "../UI/simpleButton";
import { LangContext } from "../Contexts/langContext";
import { DataContext } from "../Contexts/dataContext";
import Loader from "../Loading/Loader";
import DOMPurify from "dompurify";
import { UserContext } from "../Contexts/userContext";
import Error from "./error";

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
      // setError("No Data Entered");
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
    <div className="pt-8 h-lvh bg-teal-100 flex items-center justify-center text-teal-700 overflow-auto">
      <div className="h-full">
        {loading ? (
          <div className="h-full">
            <Loader />
          </div>
        ) : (
          <div className="pb-10">
            {lang ? (
              <div className="font-manj">
                {error ? (
                  <Error lang={lang} />
                ) : (
                  <div className="my-8 lg:mb-10 mx-7 lg:px-3 lg:my-24 text-justify">
                    <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-md font-bold lg:text-4xl">
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
              </div>
            ) : (
              <div className="font-lex">
                {error ? (
                  <Error lang={lang} />
                ) : (
                  <div className="my-8 lg:mb-10 mx-7 lg:px-3 lg:my-24 text-justify">
                    <h1 className="w-fit mx-auto mb-5 lg:mb-10 text-lg font-bold lg:text-4xl">
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
              </div>
            )}
            <div
              className={`w-fit mx-auto my-5 lg:text-2xl ${
                lang ? "font-manj" : "font-lex"
              }`}
            >
              <SimpleButton
                text={lang ? "അടുത്തത്തിലേക്" : "Closing off"}
                next
                animate
                url="/farewell"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
