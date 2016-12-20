import React from 'react';
import * as d3 from "d3";

export default class Chart extends React.Component {
  componentDidMount() {
    var chartContainerObj = d3.select('#chart');
  }
  render () {
    return (
      <div className="container valign-wrapper">
        <div className="container valign" id="chart" />
      </div>
    );
  }
}
