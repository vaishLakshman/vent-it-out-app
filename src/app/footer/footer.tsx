interface FooterExtra {
  coffee?: boolean;
  ml?: boolean;
}
const Footer = ({ coffee, ml }: FooterExtra) => {
  return (
    <div className="fixed  bottom-2 w-screen text-teal-600 text-center  justify-center hover:opacity-100">
      {coffee && (
        <div>
          {ml ? (
            <h1 className="font-manj w-2/3 mx-auto mb-2 text-xs lg:text-sm ">
              എന്റെ ഈ ആപ്പ് ഇഷ്ടപ്പെട്ടെങ്കിൽ, നിങ്ങൾക് എനിക്കൊരു{" "}
              <a
                href="https://buymeacoffee.com/vaishnavlakshman"
                target="_blank"
                className="underline underline-offset-3 font-semibold "
              >
                ചായ മേടിച്ചു തരാം
              </a>
            </h1>
          ) : (
            <h1 className="font-lex w-fit mx-auto mb-4 text-xs lg:text-sm ">
              if you like my work, you can{" "}
              <a
                href="https://buymeacoffee.com/vaishnavlakshman"
                target="_blank"
                className="underline underline-offset-3 font-semibold "
              >
                buy me a coffee
              </a>
            </h1>
          )}
        </div>
      )}
      <h1 className="font-lex text-xs lg:text-sm  opacity-60  group w-fit mx-auto">
        © 2025{" "}
        <a
          href="https://bento.me/vaish-lakshman"
          target="_blank"
          className="font-semibold underline underline-offset-2 decoration-1"
        >
          Vaishnav Lakshman
          
        </a>
      </h1>
      {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#009689"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
            </g>
          </svg> */}
    </div>
  );
};

export default Footer;
