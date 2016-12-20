import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Chart from './ChartC.js';
import * as d3 from "d3";

class Main extends React.Component {
  render () {
    return (
      <div className="container valign-wrapper">
        <Chart />
        Working fine :)
      </div>
    );
  }
}


ReactDOM.render(
  <Header />, document.getElementById('header')
);
ReactDOM.render(
    <Footer />, document.getElementById('footer')
);
ReactDOM.render(
    <Main />, document.getElementById('main')
);
