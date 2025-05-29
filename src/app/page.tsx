import Footer from "./footer/footer";
import Startup from "./startup/startup";

export default function Home() {
  return (
    <div className="h-lvh bg-teal-100 flex items-center justify-center">
      <Startup />
      <Footer />
    </div>
  );
}
