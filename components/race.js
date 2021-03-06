import React from "react";
import homeImg from "../images/homeIcon.png";

export class Race extends React.Component {
  state = {
    positionVert: Math.floor(Math.random() + 20)
  };
  bounce = () => {
    this.setState(prevState => {
      let counter = prevState.positionVert;
      let inc = +4;
      setInterval(() => {
        if (counter == 20) {
          inc = -4;
        } else if (counter == -20) {
          inc = +4;
        }
        counter += inc;
        // console.log(counter)1;
        this.state.positionVert = counter;
      }, 40);
    });
  };
  render() {
    const { photoUrl, position } = this.props;
    return (
      <div
        id="race"
        onLoad={this.bounce}
        style={{
          position: "absolute"
        }}
      >
        <img
          id="avatar"
          src={photoUrl}
          style={{ left: `${position}px`, top: `${this.state.positionVert}px` }}
        />
        <img src={homeImg} />
      </div>
    );
  }
}
