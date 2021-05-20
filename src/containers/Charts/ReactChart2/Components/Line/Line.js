import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { data } from './LineConfig';

export default class LineChart extends Component {
  state = {
    lineData:{}
  };

  async componentDidMount(){
    const newData = await data();
    this.setState({lineData: newData});
  };

  render() {
    return <Line data={this.state.lineData} />;
  };
}
