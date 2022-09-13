import "./styles/settings/colors.css";
import "./styles/settings/fonts.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import Header from "./objects/header/header";
import Services from "./objects/services/services";
import Projects from "./objects/projects/projects";
import Testimonials from "./objects/testimonials/testimonials";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
}

export default App;
