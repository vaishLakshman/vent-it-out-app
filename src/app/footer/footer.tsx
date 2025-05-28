interface FooterExtra {
  coffee?: boolean;
  ml?: boolean;
}
const Footer = ({ coffee, ml }: FooterExtra) => {
  return (
    <div className="fixed  bottom-2 w-screen text-teal-600  justify-center hover:opacity-100">
      {coffee && (
        <div>
          {ml ? (
            <h1 className="font-manj w-fit mx-auto mb-4 text-xs lg:text-sm ">
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
          className="font-semibold hover:underline underline-offset-2 decoration-1"
        >
          Vaishnav Lakshman
        </a>
      </h1>
    </div>
  );
};

export default Footer;
