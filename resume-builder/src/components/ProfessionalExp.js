import { Component } from 'react';
import uniqid from 'uniqid';
import ProfessionalInstance from './ProfessionalInstance';

const starterId = uniqid();

export default class ProfessionalExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.deleteJob = this.deleteJob.bind(this);
  }

  componentDidMount() {
    this.setState({
      jobs: this.state.jobs.concat(
        <ProfessionalInstance
          key={starterId}
          uId={starterId}
          deleteJob={this.deleteJob}
        />
      ),
    });
  }

  addJob = () => {
    const newId = uniqid();
    this.setState({
      jobs: this.state.jobs.concat(
        <ProfessionalInstance
          key={newId}
          uId={newId}
          deleteCourse={this.deleteJob}
        />
      ),
    });
  };

  deleteJob = (id) => {
    this.setState({
      jobs: this.state.jobs.filter((elem) => elem.key !== id),
    });
  };

  render() {
    return (
      <div>
        <header className="category-header">
          <h2>Experiências Profissionais</h2>
          <button onClick={this.addJob}>+</button>
        </header>
        <hr />
        {this.state.jobs}
      </div>
    );
  }
}
