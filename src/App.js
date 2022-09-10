import "./styles/settings/colors.css";
import "./styles/settings/fonts.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import Logo from "./components/logo/logo";
import Menu from "./components/menu/menu";
import Button from "./components/button/button";

function App() {
  return (
    <>
      <Logo />
      <Menu />
      <Button label="contact"/>
    </>
  );
}

export default App;
