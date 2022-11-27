import { useState } from 'react';

export default function Instance(props) {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [onGoing, setOnGoing] = useState(false);
  const [finishDate, setFinishDate]= useState(null);


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
            onChange={() => {setName(e.value); console.log(name)}}
            type="text"
            id={`${this.id}-name`}
            placeholder="Curso"
          />
          <input
            onChange={this.updateInput}
            type="text"
            id={`${this.id}-institution`}
            placeholder="Instituição"
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
}
