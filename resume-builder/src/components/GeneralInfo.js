import { Component } from 'react';

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      email: '',
      phone: '',
    };
  }

  handleChange = (e) => {
    const attr = e.target.id.slice('general-'.length);
    const value = e.target.value;
    this.setState(Object.fromEntries([[attr, value]]), console.log(this.state));
  };

  render() {
    return (
      <div>
        <header className="category-header">
          <h2>Informações Gerais</h2>
        </header>
        <hr />
        <form className="input-field" onSubmit={this.saveData}>
          <input
            onChange={this.handleChange}
            type="text"
            id="general-name"
            placeholder="Nome"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="general-address"
            placeholder="Endereço"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="general-email"
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="general-phone"
            placeholder="Telefone"
          />
        </form>
      </div>
    );
  }
}
