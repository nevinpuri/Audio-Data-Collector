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
    axios.get("http://localhost:5000/audioAPI/audiodata").then((res) => {
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
        <h1>hello</h1>
        <AudioDataGraph data={this.state.data} />
      </div>
    );
  }
}

export default App;
