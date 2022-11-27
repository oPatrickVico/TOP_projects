import React, { Component } from 'react';
import AcademicInfo from './components/AcademicInfo';
import GeneralInfo from './components/GeneralInfo';
import ProfessionalExp from './components/ProfessionalExp';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <GeneralInfo />
        <AcademicInfo />
        <ProfessionalExp />
      </div>
    );
  }
}
