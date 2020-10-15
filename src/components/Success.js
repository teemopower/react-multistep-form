import React, { Component } from 'react';

export class Success extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="details-container">
        <div className="details-content-group">
          <h2 className="details-title   confirm-msg">
            Thank You! Successfully Submitted Student Information!
          </h2>
          <button className="confirm-back-btn" onClick={this.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default Success;
