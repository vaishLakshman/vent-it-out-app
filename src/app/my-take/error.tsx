"use client";
import Image from "next/image";
import trouble from "../../../public/trouble.png";

interface ErrorType {
  lang?: boolean;
}

export default function Error({ lang }: ErrorType) {
  return (
    <div>
      {lang ? (
        <div className="w-fit lg:w-full mt-52 mx-auto px-5 lg:mb-16 lg:px-3 text-center">
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
      )}
    </div>
  );
}
