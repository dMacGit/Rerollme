import "./sass/App.sass";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Panels from "./Components/Panels";

const App = () => {
  
  let currentTheme = localStorage.getItem('theme');
  let userTheme = 'light';

  if(currentTheme === null) {
    localStorage.setItem('theme',"light");
    console.log("No theme saved: defaulting to light");
    userTheme = 'light';
  }
  else {
    userTheme = currentTheme;
    console.log("Saved theme found: defaulting to "+userTheme);
  }

  return (
    <div className="App">
      
      <Header initTitle={"Reroll Me"} initTheme={userTheme}/>
      <Nav />
      <Panels />
    </div>
  );
};

export default App;
