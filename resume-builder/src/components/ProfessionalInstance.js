import { Component } from 'react';

export default class ProfessionalInstance extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.uId;
    this.state = {
      company: '',
      position: '',
      startDate: '',
      onGoing: false,
      finishDate: '',
    };
  }

  updateInput = (e) => {
    const attr = e.target.id.slice(`${this.id}-`.length);
    let value = e.target.value;
    if (value === 'on') {
      value = e.target.checked;
    }
    this.setState(Object.fromEntries([[attr, value]]), console.log(this.state));
  };

  render() {
    return (
      <div>
        <form className="input-field">
          <button
            type="button"
            className="delete-button"
            onClick={() => this.props.deleteCourse(this.id)}
          >
            Delete
          </button>
          <input
            onChange={this.updateInput}
            type="text"
            id={`${this.id}-company`}
            placeholder="Empresa"
          />
          <input
            onChange={this.updateInput}
            type="text"
            id={`${this.id}-position`}
            placeholder="Cargo"
          />
          <input
            onChange={this.updateInput}
            type="date"
            id={`${this.id}-startDate`}
            placeholder="Data de Início"
          />
          <input
            onChange={this.updateInput}
            type="checkbox"
            id={`${this.id}-onGoing`}
          />
          <label htmlFor={`${this.id}-onGoing`}>Em progresso?</label>
          <input
            onChange={this.updateInput}
            type="date"
            id={`${this.id}-finishDate`}
            placeholder="Data de Término"
          />
        </form>
      </div>
    );
  }
}
