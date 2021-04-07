import "./DropPanel.css";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const DropPanel = (
  {
  title,
  type,
  text,
  value,
  getRandom,
  updateValue,
  selectOptions,
}

) => {

  console.log(selectOptions);
  var key = 0;

  return (
    <div className="Block">
      <div className="Block-Input Wrapper">
        <select
          type={type}
          className={"country-root country-control country-arrow"}
          options={selectOptions}
          value={ value }
          onChange={(e) => updateValue(e, title)}
        >
        <option key={key} className="country-menu country-option country-hover is-open" hidden value={text}>{text}</option>
        { selectOptions.map((item) => <option className="country-control" key={(key++)} value={item.value}>{item.label}</option>) }
        </select>

        <button

          className="rndButton"
          type="button"
          onClick={() => getRandom(title)}
          value="Random"
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
};

DropPanel.propTypes = {
  title: PropTypes.string.isRequired,
  getRandom: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  selectOptions: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DropPanel;
