import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";

export class Main extends React.Component {
  state = {
    time: 0,
    counting: false,
    photoUrl: [
      "https://avatars1.githubusercontent.com/u/24710103?s=400&u=7f0d9ddf007bb1072ea08f96f841a2b97e4b4fca&v=4",
      "https://avatars3githubusercontent.com/u/39088518?v=4"
    ],
<<<<<<< HEAD
    position: [50, 50],
    homeImg: "../images/homeIcon"
=======
    position: [0, 0]
>>>>>>> master
  };
  //>>>>>>>>>>>>>>functions for Clock

  timer = () => {
    this.setState(prevState => {
      return { time: prevState.time + 1 };
    });
  };
  toggle = () => {
    this.setState(prevState => {
      if (prevState.counting) {
        this.setState({ time: 0, counting: false, position: [0, 0] });
        return clearInterval(this.timer);
      } else {
        this.setState({ counting: true });
        return setInterval(this.timer, 500);
      }
    });
  };
  //>>>>>>>>>>>>>>functions for race
  racePosition = event => {
    //1 key Player 1
    if (this.state.position[0] > 750 || this.state.position[1] > 750) {
      return;
    }
    if (this.state.counting) {
      if (this.state.position[0] > 750 || this.state.position[1] > 750) {
        return;
      }


      if (event.charCode === 49) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0] + 5, prevState.position[1]]
          };
        });
      }

      //0 key Player 2
      else if (event.charCode === 48) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0], prevState.position[1] + 5]
          };
        });
      }
    }
    console.log(this.state.position);
    // setTimeout(function() {
    //   console.log("timeout");
    // }, 1000);
  };

  render() {
    return (
      <div id="main" onKeyPress={this.racePosition}>
        <Clock
          time={this.state.time}
          toggle={this.toggle}
          counting={this.state.counting}
        />
        <Input position={this.state.position[0]} />
        <Race
          className="player-1"
          photoUrl={this.state.photoUrl[0]}
          position={this.state.position[0]}
          raceId="race1"
        />
        <Race
          className="player-2"
          photoUrl={this.state.photoUrl[1]}
          position={this.state.position[1]}
          raceId="race2"
        />
        <Input position={this.state.position[1]} />
      </div>
    );
  }
}
