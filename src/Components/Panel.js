// import "./Panel.css";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const Panel = ({ title, type, text, value, getRandom, updateValue}) => {
  return (
    <div className="Block">
      <div className="Block-Input">
        <p className="panel-input">
          <input
            className={title}
            type={type}
            placeholder={text}
            value={value}
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
        </p>
        
      </div>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  getRandom: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default Panel;
