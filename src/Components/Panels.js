
import React from "react";
import countryList from '../Data/country.json';
import Card from './Card';
import NumPanel from './NumPanel';
import Buttons from './Buttons';
import DropPanel from './DropPanel';
import NamePanel from './NamePanel'
import faker from "faker"


class Panels extends React.Component
{
  constructor(props)
  {
    super(props);  
    this.state = {
      genderList: [{ "value": "Female", "label": "Female" },{ "value": "Male", "label": "Male" }],      
      firstName: "",
      lastName: "",
      gender: { value: "Gender..." },
      country: {value:"Country..."},
      selectedGender: {id:0},
      selectedCountry: {id:0},
      age: "",
      ageRange: {min:18,max:80},
      person: {firstName:"",lastName:"",gender:"",country:"",age:""},
      idVisible: false,
      firstNameValidated: false,
      lastNameValidated: false,
      genderValidated: false,
      ageValidated: false,
      locationValidated: false
    }
  }

    createPerson = () => {
      let newPerson = {firstName:this.state.firstName,lastName:this.state.lastName,gender:this.state.gender.label,country:this.state.country.label,age:this.state.age};
      console.log(newPerson);
      this.setState({person:newPerson});
      if (this.validateAll() === true){

        this.setState({idVisible:this.state.idVisible? true : true});
      }
    }

    updateValue = (e,title) => {

      switch (title) {
        case "firstName":
          this.setState({firstNameValidated:false});
          var firstNameUpdateValue = e.target.value;
          this.setState({firstName:firstNameUpdateValue});
          if (firstNameUpdateValue !== "" & firstNameUpdateValue.length >= 2) {
            this.setState({firstNameValidated:true});
          }
          break;
        case "lastName":
          this.setState({lastNameValidated:false});
          var lastNameUpdateValue = e.target.value;
          this.setState({lastName:lastNameUpdateValue});
          if (lastNameUpdateValue !== "" & lastNameUpdateValue.length >= 2) {
            this.setState({lastNameValidated:true});
          }
          break;
        case "gender":
          let userSelectedGender = e.target.selectedOptions[0];
          let userSelectedGenderOptionIndex = userSelectedGender.index;
          console.log(userSelectedGenderOptionIndex);
          this.setState({selectedGender:userSelectedGenderOptionIndex === this.state.selectedGender.id ? this.state.selectedGender.id : userSelectedGenderOptionIndex});
          this.setState({genderValidated:true});
          this.setState({gender:{value:userSelectedGender.value,label:userSelectedGender.text}});
          break;

        case "country":          
          let userSelectedCountry = e.target.selectedOptions[0];
          let userSelectedCountryOptionIndex = userSelectedCountry.index;
          console.log(userSelectedCountryOptionIndex);
          this.setState({selectedCountry:userSelectedCountryOptionIndex === this.state.selectedCountry.id ? this.state.selectedCountry.id : userSelectedCountryOptionIndex});
          this.setState({locationValidated:true});
          this.setState({country:{value:userSelectedCountry.value, label:userSelectedCountry.text}});
          break;

        case "age":
          this.setState({ageValidated:false});
          this.setState({age:e.target.value});
          this.setState({ageValidated:true});
          break;
        default:
          console.log('[updateValue] Reached end of Swtich cases "Err" ' + title);
      }      
    }

    validateAll = () => {
      let isValidated = false;
      // Ignore First & Last Name validation
      // Need to validate : Gender selection, Age, and Country
      if ( this.state.firstNameValidated & this.state.lastNameValidated & this.state.genderValidated & this.state.ageValidated & this.state.locationValidated ){
        isValidated = true;
      }
      return isValidated;
    }


    getFemaleName = () => {
      let newFemaleName = faker.name.firstName(1);
      console.log("Faker Generated random Female Name. picked => "+newFemaleName);
      return newFemaleName;
    }
    
    getMaleName = () => {
      let newMaleName = faker.name.firstName(0);
      console.log("Faker Generated random Male Name. picked => "+newMaleName);
      return newMaleName;
    }
    
    formatName = (string) =>
    {
      return string.replace(/\S*/g, function (word) {
          return word.charAt(0) + word.slice(1).toLowerCase();
      });
    }
    
    
    getRandomAll = () => {
      const elements = ["gender", "country", "age", "lastName" ];      
      console.log(elements)
      for (const element of elements)
      {
        if (element === "gender") {
          this.setState({ gender:this.getRandomGender() }, () => {  
            this.setState({firstName:this.getRandomFirstName()});
            console.log("Gender Element did update, First Name Randomized!"); 
          });                    
          this.setState({firstNameValidated:true});
          this.setState({genderValidated:true});
          
        }
        else {
          this.getRandom(element);
        }
        
      }
      this.setState({idVisible:false});
    }
    
    clearAll = () => {
      console.log("User request to clear Persona!");
      this.setState({firstName:""});
      this.setState({firstNameValidated:false});
      this.setState({lastName:""});
      this.setState({lastNameValidated:false});
      this.setState({gender:{value:"Gender..."}});
      this.setState({genderValidated:false});
      this.setState({country:{value:"Country..."}});
      this.setState({locationValidated:false});
      this.setState({age:""});
      this.setState({ageValidated:false});
      this.setState({idVisible:false});
    }
    
    getRandom = (title) => {
      switch (title) {
        case "firstName":
          this.setState({firstName:this.getRandomFirstName()});
          this.setState({firstNameValidated:true});
          break;
        case "lastName":
          let surName = this.formatName(this.getRandomLastName());
          this.setState({lastName:surName});
          this.setState({lastNameValidated:true});
          break;
        case "gender":
          this.setState({gender:this.getRandomGender()});
          this.setState({genderValidated:true});
          break;
        case "country":
          this.setState({country:this.getRandomCountry()});
          this.setState({locationValidated:true});
          break;
        case "age":
          this.setState({age:this.getRandomAge()});
          this.setState({ageValidated:true});
          break;
        default:
          console.log('Reached end of Swtich cases "Err" ' + title);
      }
    }
    
    getRandomFirstName = () => {
      var randomName = "";
      let genderValue = this.state.gender.value;
      console.log("Reqest for random First Name!");
      if (genderValue !== "Gender..." && genderValue !== "" ) {
        console.log("Gender: "+genderValue+" was defined");
        randomName = (genderValue === 'Male' ? this.getMaleName() : this.getFemaleName());
      }
      else {
        console.log("No Gender set, randomizing");
        let autoRandomGender = this.getRandomGender();
        this.setState({gender:autoRandomGender});
        randomName = (autoRandomGender === 'Male' ? this.getMaleName() : this.getFemaleName());
      }
      
      console.log("Picked: "+randomName);
      return randomName;
    }
    
    getRandomLastName = () => {
      console.log("Reqest for random Last Name!");      
      let randomLastName = faker.name.lastName();
      console.log("Generated random lastName. picked => "+randomLastName);
      return randomLastName;
    
    }
    
    getRandomGender = () => {
      console.log("Reqest for random Gender!");
      var randomNum = Math.round(Math.random());
      console.log("Random num# "+randomNum);
      var randomGender = this.state.genderList[randomNum].label;
      var randomGenderID = this.state.genderList[randomNum].value;
      console.log("randomGenderID",randomGenderID);
      console.log( (randomNum === 1 ? 'Picked: Male' : 'Picked: Female') );
      // let randomGender = (randomNum === 0 ? 'Male' : 'Female');
      return {value: randomGenderID, label:randomGender};
    }
    
    getRandomCountry = () => {
      console.log("Reqest for random Country!");
      var randomNum = Math.round(Math.random()*countryList.length);
      var randomCountry = countryList[randomNum].label;
      var randomCountryID = countryList[randomNum].value;
      console.log("CountryCode:"+randomCountryID+" name:"+randomCountry+" chosen!");
      // let randomCountryID = faker.address.countryCode;
      // let randomCountry = faker.address.country;
      
      return {value:randomCountryID, label:randomCountry};
    }
    
    getRandomAge = () => {
      console.log("Reqest for random Age!");
      let randomAge = Math.round(Math.random()*this.state.ageRange.max)+this.state.ageRange.min;
      console.log("Generated random Age "+randomAge);
      return randomAge;
    }
  
    render()
    {
      return (
          <div className="Panels panel">
            <NamePanel title="firstName" text="First Name..." value={this.state.firstName} updateValue={this.updateValue} getRandom={this.getRandom} />
            <NamePanel title="lastName"  text="last Name..." value={this.state.lastName} updateValue={this.updateValue} getRandom={this.getRandom} />
            <DropPanel title="gender" type="text" text="Gender..." selectOptions={this.state.genderList} selectedOption={this.state.selectedGender} value={this.state.gender.value} updateValue={this.updateValue} getRandom={this.getRandom} options={this.state.genderList} />
            <DropPanel title="country" type="text" text="Country..." selectOptions={countryList} selectedOption={this.state.selectedCountry} value={this.state.country.value} updateValue={this.updateValue} getRandom={this.getRandom} options={countryList} />
            <NumPanel title="age" type="number" text="Age..." value={this.state.age} ageRange={this.state.ageRange} updateValue={this.updateValue} getRandom={this.getRandom} />
            <Buttons getRandomAll={this.getRandomAll} clearAll={this.clearAll} createPerson={this.createPerson} />
            { (this.state.idVisible===true? <Card title="New Persona" person={this.state.person}/> : "") }
          </div>
      );
    }
}








//this.initPanels();

export default Panels;