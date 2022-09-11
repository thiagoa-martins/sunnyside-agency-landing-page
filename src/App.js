import "./styles/settings/colors.css";
import "./styles/settings/fonts.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import Header from "./objects/header/header";
import CardServices from "./components/cardServices/cardServices";

function App() {
  return (
    <>
      <Header />
      <CardServices>
        <h2>Transform your brand</h2>

        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </CardServices>
    </>
  );
}

export default App;
