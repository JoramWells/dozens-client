import NavigationBar from "./components/desktop/NavigationBar";
import FooterNavigation from "./components/mobile/footer/FooterNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileNavigationBar from "./components/mobile/nav/MobileNavigationBar";
import HomeRoutes from "./components/mobile/HomeRoutes";
import MobileRegisterComponent from "./components/mobile/login/MobileRegisterComponent";
import MobileLoginComponent from "./components/mobile/login/MobileLoginComponent";

function App() {
  return (
    <div>

      <div className="desktop__navbar">
        <NavigationBar />
      </div>
      <Router>
      <div className="mobile__navbar">
        <MobileNavigationBar/>
      </div>
        <Switch>
          <Route path="/" exact component={HomeRoutes} />
          <Route path="/login" exact component={MobileLoginComponent} />
          <Route path="/register" exact component={MobileRegisterComponent} />

        </Switch>
      </Router>

      <div className="mobile__footer">
        <FooterNavigation />
      </div>
    </div>
  );
}

export default App;
