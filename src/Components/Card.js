import "./Panel.css";

import PropTypes from "prop-types";

const Card = ({ person }) => {
  return (
    /*<div className="Block">
      <div className="Block-Input">*/
        <div className="panel-card">
          <div className="card-pName">
            {/* <h3 className="card-pLabel">Name:</h3> */}
            <div className="card-uNameWrapper">
              <h3 className="card-uItem">{person.firstName === ""? "Frist" : person.firstName}</h3>
              <h3 className="card-uItem">{person.lastName === ""? "Last" : person.lastName}</h3>
            </div>
          </div>
          <div className="card-uAgeGenderWrapper">
            {/* <h3 className="card-block-Label">Age:</h3> */}
            <h3 className="card-uItem">{person.age}</h3>
          {/* </div> */}
          {/* <div className="card-block"> */}
            {/* <h3 className="card-block-Label">Gender:</h3> */}
            <h3 className="card-uItem">{person.gender}</h3>
          </div>
          
          <div className="card-ItemWrapper">
            {/* <h3 className="card-block-Label">Location:</h3> */}
            <h3 className="card-uItem-Center">{person.country}</h3>
          </div>
        </div>
      /*</div>
    </div>*/
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  /*updateVisible: PropTypes.func.isRequired,*/
};

export default Card;
