import { Helmet } from "react-helmet";
import NavigationBar from "./components/desktop/NavigationBar";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dozens Kenya</title>
      </Helmet>
      <NavigationBar />
    </div>
  );
}

export default App;
