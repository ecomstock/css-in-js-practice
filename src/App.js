import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'material-ui/Grid';
import CardPractice from "./CardPractice";
import CardPracticeTwo from "./CardPracticeTwo";
import CardPracticeThree from "./CardPracticeThree";
import CardPracticeFour from "./CardPracticeFour";


class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item s>
            <CardPractice />
          </Grid>
          <Grid item s>
            <CardPracticeTwo />
          </Grid>
          <Grid item s>
            <CardPracticeThree />
          </Grid>
          <Grid item s>
            <CardPracticeFour />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
