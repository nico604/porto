import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 1;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: "yellow", left: x, top: y }} >
        <h1>-_- u</h1>
      </div>
    );
  }
}

export { Box };