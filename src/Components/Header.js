import PropTypes from 'prop-types'
import { React, useState} from 'react'
import '../sass/components/Header.sass'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'https://use.fontawesome.com/releases/v5.13.0/css/all.css'

const Header = ({initTitle,initTheme}) => {

  const [check, setChecked] = useState(initTheme === "dark" ? true : false);


  if (check) {
    console.log("Loading user theme as dark!");
  } else {
    console.log("Loading user theme as light!");
  }

  const toggleTheme = (e) => {
    var checked = e.target.checked;
    console.log("User pressed toggle");
    console.log(e.target.checked);

    if (checked) {
      setChecked(true);
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      console.log("Setting theme to Dark: " + checked);
    } else {
      setChecked(false);
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      console.log("Setting theme to Dark: " + checked);
    }
  }

  return (
    <div className="header-bar">
      <div className="topbar-wrapper">
        <div className="topbar">
          <div className="socials-wrapper">
            <div className="socials">
              <a href="https://github.com/dMacGit/rerollme/" title="dMacGit/rerollme" target="_blank" rel="noreferrer" className="fab fa-github"> </a>
            </div>
          </div>
          <div className="theme-toggle-wrapper">
            <div className="theme-toggle" defaultChecked={check} >
                <input type="checkbox" id="checkbox"  onChange={(e) => toggleTheme(e)} />
                <div className="slider round"></div>
            </div>
          </div>
        </div>
      </div>
      <h1>{initTitle}</h1>
    </div>
  );
}

Header.defaultProps = {
    initTitle: 'Reroll Me',
}

Header.propTypes = {
  initTitle: PropTypes.string.isRequired,
}

export default Header;