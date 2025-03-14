import "./App.css";
import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import desktopBackgroundMobile from "./assets/images/background-pattern-mobile.svg";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <>
      <div className="bg-lightPink h-screen relative">
        <div className="w-full h-64">
          <picture className="w-full h-full">
            <source
              srcSet={desktopBackgroundMobile}
              media="(max-width: 768px)"
            />
            <img
              src={desktopBackground}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="absolute top-36 inset-x-0 flex items-center justify-center w-full">
          <Faq />
        </div>
      </div>
    </>
  );
}

export default App;
