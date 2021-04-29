// import "./Panel.css";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const NamePanel = ({ title, text, value, getRandom, updateValue}) => {
  return (
    <div className="Panel-Block">
      <div className="panel-input">
        
          <input
            className={title}
            type="text"
            placeholder={text}
            value={value}
            minLength="2"
            maxLength="25"
            onChange={(e) => updateValue(e,title)}
          ></input>
          <button
          
          className="btn btn-primary"
          type="submit"
          onClick={() => getRandom(title)}
          value="Random"
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
        
        
      </div>
    </div>
  );
};

NamePanel.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  getRandom: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default NamePanel;
