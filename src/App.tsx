import "./App.css";
import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import desktopBackgroundMobile from "./assets/images/background-pattern-mobile.svg";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <>
      <div className="bg-lightPink h-screen relative">
        <picture>
          <source srcSet={desktopBackgroundMobile} media="(max-width: 768px)" />
          <img
            src={desktopBackground}
            alt="Background"
            className="w-full object-cover"
          />
        </picture>
        <div className="absolute top-40 inset-x-0 flex items-center justify-center">
          <Faq />
        </div>
      </div>
    </>
  );
}

export default App;
