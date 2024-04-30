import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import { Bio, skills, experiences, education,Connect,projects } from "./data/db";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Connect";
import Project from "./Components/Project/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <About Bio={Bio} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Project projects={projects} />
        <Education education={education} />
        <Contact Connect = {Connect} />
       
        {/*<Routes>
        <Route path='/*' element={<Missing/>}></Route>
  </Routes>*/}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
