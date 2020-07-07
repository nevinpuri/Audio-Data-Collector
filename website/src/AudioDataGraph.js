import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./style.css";

class AudioDataGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { noiseLevelString: "" };
  }

  componentDidMount = () => {
    setTimeout(() => {
      let audioData = this.props.data[this.props.data.length - 1];
      console.log(this.props.data[this.props.data.length - 1]);
      if (audioData.name < 100)
        this.setState({
          noiseLevelString: { level: "Low", textColor: "text-success" },
        });
      if (audioData.name >= 100 || audioData < 250)
        this.setState({
          noiseLevelString: { level: "Medium", textColor: "text-warning" },
        });
      if (audioData.name >= 250)
        this.setState({
          noiseLevelString: { level: "High", textColor: "text-danger" },
        });
      console.log(this.state.noiseLevelString);
    }, 300);
  };

  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" aspect={5}>
          <LineChart
            width={800}
            height={300}
            data={this.props.data}
            margin={{ top: 5, bottom: 5, left: 10, right: 10 }}
            className="line-chart"
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
        <div className="m-2 audio-data-text-container">
          <h1>Current Audio Level</h1>
          <h1 className={this.state.noiseLevelString.textColor}>
            {this.state.noiseLevelString.level}
          </h1>
        </div>
      </div>
    );
  }
}

export default AudioDataGraph;
