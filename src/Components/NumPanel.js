
// import "./Panel.css";


import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

//min="1" max="10" step="2"

const NumPanel = ({ title, ageRange, text, value, getRandom, updateValue}) => {
    return (
      <div className="Block">
        <div className="Block-Input">
            <p className="panel-input" >
            <input
                className={title}
                type={"number"}
                placeholder={text}
                value={value}
                min={ageRange.min}
                max={ageRange.max}
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
  
  NumPanel.propTypes = {
    title: PropTypes.string.isRequired,
    getRandom: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired,
    /*value: PropTypes.string.isRequired,*/
    ageRange: PropTypes.object.isRequired,
  };
  
  export default NumPanel;
  