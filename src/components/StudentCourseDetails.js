import React, { Component } from 'react';

const data = {
  sports: ['July 23 to August 23', 'August 26 to September 26'],
  art: ['May 10 to June 10', 'July 11 to August 11'],
  literature: ['July 11 to October 11'],
  music: ['June 9 to July 9','August 9 to September 9']
}

export class StudentCourseDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleCourse, handleSelect } = this.props;
    return (
      <div className="details-container">
        <div className="details-content-group">
          <h2 className="details-title">
            Course Details
          </h2>
          <div className="stu-input-group">
            <h2 className="label">Area of Study <span>(hold ctrl to select multiple)</span></h2>
            <select name="selectedOptions" multiple={true} onChange={handleSelect('area')}  >
              <option value="sports">Sports</option>
              <option value="art">Art</option>
              <option value="literature">Literature</option>
              <option value="music">Music</option>
            </select>
          </div>
          <div className="stu-input-group course-input-group">
            <h2 className="label">Class Schedule</h2>
            { values.selectOptions.map((x, i) => {
              if(x === 'sports'){
                return (
                  <div key={i}>
                    <h2 className="schedule-title">Sports</h2>
                    { data.sports.map((y, i) => <div className="schedule-btn-group" key={i}>
                      <button className="schedule-btn" onClick={handleCourse('sports', y)}>{y}</button>
                      </div> )
                    }
                  </div>
                )
              }
              if(x === 'art'){
                return (
                  <div key={i}>
                    <h2 className="schedule-title">Art</h2>
                    { data.art.map((y, i) => <div className="schedule-btn-group" key={i}>
                      <button className="schedule-btn" onClick={handleCourse('art', y)}>{y}</button>
                      </div> )
                    }
                  </div>
                )
              }
              if(x === 'literature'){
                return (
                  <div key={i}>
                    <h2 className="schedule-title">Literature</h2>
                    { data.literature.map((y, i) => <div className="schedule-btn-group" key={i}>
                      <button className="schedule-btn" onClick={handleCourse('literature', y)}>{y}</button>
                      </div> )
                    }
                  </div>
                )
              }
              if(x === 'music'){
                return (
                  <div key={i}>
                    <h2 className="schedule-title">Music</h2>
                    { data.music.map((y, i) => <div className="schedule-btn-group" key={i}>
                      <button className="schedule-btn" onClick={handleCourse('music', y)}>{y}</button>
                      </div> )
                    }
                  </div>
                )
              }
              return null;
            })}
          </div>
          <button className="course-back-btn" onClick={this.back}>Back</button>
          <button className="course-ctn-btn" onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default StudentCourseDetails;
