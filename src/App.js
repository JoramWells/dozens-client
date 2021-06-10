import NavigationBar from "./components/desktop/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeRoutes from "./components/mobile/HomeRoutes";
import MobileRegisterComponent from "./components/mobile/login/MobileRegisterComponent";
import MobileLoginComponent from "./components/mobile/login/MobileLoginComponent";
import MobileAddProduct from "./components/mobile/product/MobileAddProduct";

function App() {
  return (
    <div>

      <div className="desktop__navbar">
        <NavigationBar />
      </div>
      <Router>

        <Switch>
          <Route path="/" exact component={HomeRoutes} />
          <Route path="/login" exact component={MobileLoginComponent} />
          <Route path="/register" exact component={MobileRegisterComponent} />
          <Route path="/add_product" exact component={MobileAddProduct} />


        </Switch>
      </Router>

      <div className="mobile__footer">
      </div>
    </div>
  );
}

export default App;
