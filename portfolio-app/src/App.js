import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import Skill from "./components/Skills/MySkill"
import Work from "./components/Works/Work";
import Contacts from "./components/Contect/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skill/>
       <Work/>
       <Contacts/>
       <Footer/>
    </div>
  );
}

export default App;
