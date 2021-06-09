import { Helmet } from "react-helmet";
import NavigationBar from "./components/desktop/NavigationBar";
import FooterNavigation from "./components/mobile/FooterNavigation";
import MobileNavigationBar from "./components/mobile/MobileNavigationBar";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dozens Kenya</title>
      </Helmet>
      <div className="mobile__navbar">
        <MobileNavigationBar />
      </div>
      <div className="desktop__navbar">
      <NavigationBar />
      </div>
      <div className="mobile__footer">
      <FooterNavigation />

      </div>
    </div>
  );
}

export default App;
