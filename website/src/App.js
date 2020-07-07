import React, { Component } from "react";
import axios from "axios";
import AudioDataGraph from "./AudioDataGraph";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axiosData: [],
      data: [],
    };
  }

  compareHours = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  componentDidMount = () => {
    axios.get("https://nevin.cc/audioAPI/audiodata").then((res) => {
      const { data } = res;
      data.map((audioPoint) => {
        this.setState({
          axiosData: [
            ...this.state.axiosData,
            { name: audioPoint.hour, uv: audioPoint.audioData, key: uuidv4() },
          ],
        });
      });
      this.setState({ data: this.state.axiosData.sort(this.compareHours) });
      console.log(this.state.axiosData);
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="text-center text text-primary">
          Audio Level Data Collector
        </h1>
        <h3 className="text-center text text-secondary">By Nevin</h3>
        <AudioDataGraph data={this.state.data} />
        <div className="footer">
          <h6>
            Need all of the audio data ever collected? Send a GET request to{" "}
            <a href="https://nevin.cc/audioAPI/audiodata/allData">
              https://nevin.cc/audioAPI/audiodata/allData
            </a>
          </h6>
        </div>
      </div>
    );
  }
}

export default App;
