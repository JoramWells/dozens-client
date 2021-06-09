import NavigationBar from "./components/desktop/NavigationBar";
import FooterNavigation from "./components/mobile/FooterNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileHomePage from "./components/mobile/MobileHomePage";
import MobileNavigationBar from "./components/mobile/MobileNavigationBar";

function App() {
  return (
    <div>
      <div className="mobile__navbar">
        <MobileNavigationBar />
      </div>
      <div className="desktop__navbar">
        <NavigationBar />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={MobileHomePage} />
        </Switch>
      </Router>

      <div className="mobile__footer">
        <FooterNavigation />
      </div>
    </div>
  );
}

export default App;
