// import "./Panel.css";

import PropTypes from "prop-types";

const Card = ({ person }) => {
  return (
    /*<div className="Block">
      <div className="Block-Input">*/
        <div className="panel-card">
          <div className="card-pName">
            
            <div className="card-line">
              <h3 className="card-pLabel">First Name</h3>
              <h3 className="card-uItem">{person.firstName === ""? "Frist" : person.firstName}</h3>

            </div>
            <div className="card-line">
              <h3 className="card-pLabel">Last Name</h3>
              <h3 className="card-uItem">{person.lastName === ""? "Last" : person.lastName}</h3>
            </div>
          </div>
          <div className="card-line">
            <h3 className="card-pLabel">Age </h3>
            <h3 className="card-uItem">{person.age}</h3>
          </div>
          <div className="card-line">
            <h3 className="card-pLabel">Gender </h3>
            <h3 className="card-uItem">{person.gender}</h3>
          </div>
          
          <div className="card-line">
            <h3 className="card-pLabel">Location </h3>
          </div>
          <div className="card-line-country">
            <h3 className="card-countryItem">{person.country}</h3>
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
