import React, { Component } from 'react';

export class FormStudentDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return ( 
      <div className="details-container">
        <div className="details-content-group">
          <h2 className="details-title">
            Student Information
          </h2>
          <div className="stu-input-group">
            <h2 className="label">Full Name</h2>
            <input
              type="text"
              className="stu-name-input"
              onChange={handleChange('name')}
              value={values.name}
            />
          </div>
          <div className="stu-input-group">
            <h2 className="label">Email</h2>
            <input
              type="email"
              className="stu-name-input"
              onChange={handleChange('email')}
              value={values.email}
            />
          </div>
          <div className="stu-input-group">
            <h2 className="label">Birthday</h2>
            <input
              type="date"
              className="stu-name-input"
              onChange={handleChange('birthday')}
              value={values.birthday}
            />
          </div>
          <div className="validation-error">
            {values.showAlert ? <div>*Enter valid field values</div> : null}
          </div>
          <button className="stu-ctn-btn" onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default FormStudentDetails;
