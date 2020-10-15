import React, { Component } from 'react';
import StudentDetailsForm from './StudentDetailsForm';
import StudentCourseDetails from './StudentCourseDetails';
import Confirm from './Confirm';
import Success from './Success';

export class StudentForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    birthday: '',
    selectOptions: [],
    validName: false,
    validBirthday: false,
    validEmail: false,
    showAlert: false,
    sports: '',
    art: '',
    literature: '',
    music: ''
  };
  
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  nextStep = (flag) => {
    if(this.state.name.length > 0){
      this.setState({
        validName: true
      });
    }
    if(this.state.birthday !== ''){
      this.setState({
        validBirthday: true
      });
    }
    if(this.validateEmail(this.state.email)){
      this.setState({
        validEmail: true
      });
    }

    setTimeout(() => { 
      const { step, validName, validBirthday, validEmail } = this.state;
      if(!validName || !validEmail || !validBirthday){
        this.setState({
          showAlert: true
        })
      }
      if(validName && validBirthday && validEmail){
        this.setState({
          step: step + 1,
          showAlert: false
        });
      }}, 10);

      if(flag === 'post'){
        let json = {
          name: this.state.name,
          email: this.state.email,
          birthday: this.state.birthday,
          sports: this.state.sports,
          art: this.state.art,
          literature: this.state.literature,
          music: this.state.music
        }
        // POST request
        console.log(json);
      }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1, 
    });
  };
  
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSelect = input => (e) => {
    var options = e.target.options;
    var selectOptions = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
          selectOptions.push(options[i].value);
      }
    }

    this.setState({selectOptions});
  }

  handleCourse = (area, time) => () => {
    this.setState({ [area]: time });
  }

  render() {
    const { step } = this.state;
    const { name, email, birthday, selectOptions, schedule, showAlert, sports, art, literature, music } = this.state;
    const values = { name, email, birthday, selectOptions, schedule, showAlert, sports, art, literature, music };

    switch (step) {
      case 1:
        return (
          <StudentDetailsForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleSelect={this.handleSelect}
            values={values}
          />
        );
      case 2:
        return (
          <StudentCourseDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleCourse={this.handleCourse}
            handleSelect={this.handleSelect}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <Success 
            prevStep={this.prevStep}
          />
        ); 
        
      default:
        (console.log('Error'))
    }
  }
}

export default StudentForm;
