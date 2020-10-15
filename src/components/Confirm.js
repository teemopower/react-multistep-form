import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep('post');
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, birthday, sports, art, literature, music }
    } = this.props;
    return (
      <div className="details-container">
        <div className="details-content-group">
          <h2 className="details-title">
            Confirm Student Details
          </h2>
          <div className="stu-input-group">
            <h2 className="label">Full Name</h2>
            <div className="confirm-details">{name}</div>
          </div>
          <div className="stu-input-group">
            <h2 className="label">Email</h2>
            <div className="confirm-details">{email}</div>
          </div>
          <div className="stu-input-group">
            <h2 className="label">Birthday</h2>
            <div className="confirm-details">{birthday}</div>
          </div>
          <div className="stu-input-group">
            <h2 className="label">Class Schedule</h2>
              {sports !== '' ? <div className="confirm-course-details">
                <div><strong>Sports</strong></div>
                <div>{sports}</div> 
              </div>
              : null }
              {art !== '' ? <div className="confirm-course-details">
                <div><strong>Art</strong></div>
                <div>{art}</div> 
              </div>
              : null }
              {literature !== '' ? <div className="confirm-course-details">
                <div><strong>Literature</strong></div>
                <div>{literature}</div> 
              </div>
              : null }
              {music !== '' ? <div className="confirm-course-details">
                <div><strong>Music</strong></div>
                <div>{music}</div> 
              </div>
              : null }
          </div>
          <button className="course-back-btn" onClick={this.back}>Back</button>
          <button className="course-ctn-btn" onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default Confirm;
