
import React, {useState} from "react";
import countryList from '../Data/country.json';
import Card from './Card';
import NumPanel from './NumPanel';
import Buttons from './Buttons';
import DropPanel from './DropPanel';
import NamePanel from './NamePanel'
import fNames from "../Data/female_names.json";
import mNames from "../Data/male_names.json";
import lastNames from "../Data/lastnames.json";


const Panels = () =>
{

    let genderList = [
      { "value": "Male", "label": "Male" },
      { "value": "Female", "label": "Female" } ];

    //const { fNamesSize, mNamesSize, lastNamesSize } = this.props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName ] = useState("");
    const [gender, setGender] = useState({value:"Gender..."});
    const [country, setCountry] = useState({value:"Country..."});
    const [selectedGender, setSelectGenderOption] = useState({id:0});
    const [selectedCountry, setSelectCountryOption] = useState({id:0});
    const [age, setAge] = useState("");
    let ageRange = {min:18, max:80};
    const [person, setPerson] = useState({firstName:"",lastName:"", gender:"",country:"",age:""})
    const [idVisible, toggleVisible] = useState(false);

    const [firstNameValidated,updateFirstNameValidated] = useState(false);
    const [lastNameValidated,updateLastNameValidated] = useState(false);
    const [genderValidated,updateGenderValidated] = useState(false);
    const [ageValidated,updateAgeValidated] = useState(false);
    const [locationValidated,updateLocationValidated] = useState(false);

    // let validPerson = [ {'title': 'first','valid': false} , {'title':'last','valid': false}, {'title':'gender','valid': false}, {'title':'country','valid': false}, {'title': 'age','valid': false}];
    // const [valid, setValidation ] = useState(validPerson);
    

    const createPerson = () => {
      let newPerson = {firstName:firstName,lastName:lastName,gender:gender.label,country:country.label,age:age};
      console.log(newPerson);
      setPerson(newPerson);
      if (validateAll() === true){

        toggleVisible( (idVisible? true : true) );
      }
    }

    const updateValue = (e,title) => {

      switch (title) {
        case "firstName":
          updateFirstNameValidated(false);
          var firstNameUpdateValue = e.target.value;
          setFirstName(firstNameUpdateValue);
          if (firstNameUpdateValue !== "" & firstNameUpdateValue.length >= 2) {
            updateFirstNameValidated(true);
          }
          break;
        case "lastName":
          updateLastNameValidated(false);
          var lastNameUpdateValue = e.target.value;
          setLastName(lastNameUpdateValue);
          if (lastNameUpdateValue !== "" & lastNameUpdateValue.length >= 2) {
            updateLastNameValidated(true);
          }
          break;
        case "gender":
          let userSelectedGender = e.target.selectedOptions[0];
          let userSelectedGenderOptionIndex = userSelectedGender.index;
          console.log(userSelectedGenderOptionIndex);
          setSelectGenderOption(userSelectedGenderOptionIndex === selectedGender.id ? selectedGender.id : userSelectedGenderOptionIndex);
          updateGenderValidated(true);
          setGender({value:userSelectedGender.value,label:userSelectedGender.text});
          break;

        case "country":
          //updateLocationValidated(false);
          let userSelectedCountry = e.target.selectedOptions[0];
          let userSelectedCountryOptionIndex = userSelectedCountry.index;
          console.log(userSelectedCountryOptionIndex);
          setSelectCountryOption(userSelectedCountryOptionIndex === selectedCountry.id ? selectedCountry.id : userSelectedCountryOptionIndex);
          updateLocationValidated(true);
          setCountry({value:userSelectedCountry.value, label:userSelectedCountry.text});
          break;

        case "age":
          updateAgeValidated(false);
          setAge( e.target.value);
          updateAgeValidated(true);
          break;
        default:
          console.log('[updateValue] Reached end of Swtich cases "Err" ' + title);
      }
      
      //console.log(this.state.value);
      //e.target.placeholder = this.state.value;
    }

    const validateAll = () => {
      let isValidated = false;
      // Ignore First & Last Name validation
      // Need to validate : Gender selection, Age, and Country
      if ( firstNameValidated & lastNameValidated & genderValidated & ageValidated & locationValidated ){
        isValidated = true;
      }

      return isValidated;
    }


    const getFemaleName = () => {
      let randomNum = Math.round(Math.random()*fNames.length);
      let randomName = fNames[randomNum];
      console.log("Generated randomNum "+randomNum+" picked => "+randomName);
      return randomName;
    }
    
    const getMaleName = () => {
      let randomNum = Math.round(Math.random()*mNames.length);
      let randomName = mNames[randomNum];
      console.log("Generated randomNum "+randomNum+" picked => "+randomName);
      return randomName;
    }
    
    const formatName = (string) =>
    {
      return string.replace(/\S*/g, function (word) {
          return word.charAt(0) + word.slice(1).toLowerCase();
      });
    }
    
    
    const getRandomAll = () => {
      const elements = ["gender", "firstName", "lastName", "country", "age" ];      
      console.log(elements)
      for (const element of elements)
      {      
        getRandom(element);
      }
      toggleVisible(false);
    }
    
    const clearAll = () => {
      console.log("User request to clear Persona!");
      setFirstName("");
      updateFirstNameValidated(false);
      setLastName("");
      updateLastNameValidated(false);
      setGender({value:"Gender..."});
      updateGenderValidated(false);
      setCountry({value:"Country..."});
      updateLocationValidated(false)
      setAge("");
      updateAgeValidated(false);
      toggleVisible(false);
    }
    
    const getRandom = (title) => {
      switch (title) {
        case "firstName":
          setFirstName(getRandomFirstName());
          updateFirstNameValidated(true);
          break;
        case "lastName":
          let surName = formatName(getRandomLastName());
          setLastName(surName);
          updateLastNameValidated(true);
          break;
        case "gender":
          setGender(getRandomGender());
          updateGenderValidated(true);
          break;
        case "country":
          setCountry(getRandomCountry());
          updateLocationValidated(true);
          break;
        case "age":
          setAge(getRandomAge());
          updateAgeValidated(true);
          break;
        default:
          console.log('Reached end of Swtich cases "Err" ' + title);
      }
    }
    
    const getRandomFirstName = () => {
      var randomName = "";
      console.log("Reqest for random First Name!");
      if (gender !== "") {
        console.log("Gender: "+gender+" was defined");
        randomName = (gender === 'Male' ? getMaleName() : getFemaleName());
      }
      else {
        console.log("No Gender set, randomizing");
        let autoRandomGender = getRandomGender();
        setGender(autoRandomGender);
        randomName = (autoRandomGender === 'Male' ? getMaleName() : getFemaleName());
      }
      
      console.log("Picked: "+randomName);
      return randomName;
    }
    
    const getRandomLastName = () => {
      console.log("Reqest for random Last Name!");
      let randomNum = Math.round(Math.random()*lastNames.length);
      let randomName = lastNames[randomNum];
      console.log("Generated randomNum "+randomNum+" picked => "+randomName);
      return randomName;
    
    }
    
    const getRandomGender = () => {
      console.log("Reqest for random Gender!");
      var randomNum = Math.round(Math.random());
      console.log("Random num# "+randomNum);
      var randomGender = genderList[randomNum].label;
      var randomGenderID = genderList[randomNum].value;
      console.log( (randomNum === randomGenderID ? 'Picked: Male' : 'Picked: Female') );
      // let randomGender = (randomNum === 0 ? 'Male' : 'Female');
      return {value: randomGenderID, label:randomGender};
    }
    
    const getRandomCountry = () => {
      console.log("Reqest for random Country!");
      var randomNum = Math.round(Math.random()*countryList.length);
      var randomCountry = countryList[randomNum].label;
      var randomCountryID = countryList[randomNum].value;
      console.log("id:"+randomCountryID+" name:"+randomCountry+" chosen!");
      return {value:randomCountryID, label:randomCountry};
    }
    
    const getRandomAge = () => {
      console.log("Reqest for random Age!");
      let randomAge = Math.round(Math.random()*MAXRANGE)+MINRANGE;
      console.log("Generated random Age "+randomAge);
      return randomAge;
    }
  
    
    return (
        <div className="Panels panel">
          <NamePanel title="firstName" text="First Name..." value={firstName} updateValue={updateValue} getRandom={getRandom} />
          <NamePanel title="lastName"  text="last Name..." value={lastName} updateValue={updateValue} getRandom={getRandom} />
          <DropPanel title="gender" type="text" text="Gender..." selectOptions={genderList} selectedOption={selectedGender} value={gender.value} updateValue={updateValue} getRandom={getRandom} options={genderList} />
          <DropPanel title="country" type="text" text="Country..." selectOptions={countryList} selectedOption={selectedCountry} value={country.value} updateValue={updateValue} getRandom={getRandom} options={countryList} />
          <NumPanel title="age" type="number" text="Age..." value={age} ageRange={ageRange} updateValue={updateValue} getRandom={getRandom} />
          <Buttons getRandomAll={getRandomAll} clearAll={clearAll} createPerson={createPerson} />
          { (idVisible===true? <Card title="New Persona" person={person}/> : "") }
        </div>
    );

  
}






let MINRANGE = 18;
let MAXRANGE = 62;

//this.initPanels();

export default Panels;