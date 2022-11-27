import { Component } from 'react';
import AcademicInstance from './AcademicInstance';
import uniqid from 'uniqid';

const starterId = uniqid();

export default class AcademicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        <AcademicInstance
          key={starterId}
          uId={starterId}
          deleteCourse={this.deleteCourse}
        />,
      ],
    };
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  addCourse = () => {
    const newId = uniqid();
    this.setState({
      courses: this.state.courses.concat(
        <AcademicInstance
          key={newId}
          uId={newId}
          deleteCourse={this.deleteCourse}
        />
      ),
    });
  };

  deleteCourse = (id) => {
    this.setState({
      courses: this.state.courses.filter((elem) => elem.key !== id),
    });
  };

  render() {
    return (
      <div>
        <header className="category-header">
          <h2>Formações Acadêmicas</h2>
          <button onClick={this.addCourse}>+</button>
        </header>
        <hr />
        {this.state.courses}
      </div>
    );
  }
}
