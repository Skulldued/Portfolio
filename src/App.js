import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Tech from "./pages/Tech Stack/Tech";
import WorkExp from "./pages/Work_Exp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
import Responsive from "./components/ResponsiveNav/Responsive";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Responsive />
        <Layout />
        <div className="container text-center pt-3 ">
          <About />
          <Tech />
          <Projects />
          <Education />
          <WorkExp />
          <Contact />
        </div>

        <ScrollToTop smooth className="scroll-icon" />
        <div className="footer text-center">
          <p className="text-uppercase">copyRight &copy; 2023 portfolio</p>
        </div>
      </div>
    </>
  );
}

export default App;
