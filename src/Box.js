

import React, { Component } from "react";
import { array, object, string } from 'prop-types';


export default class Box extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;
    return (
      <div style={{ position: "absolute",
                     width: width,
                      height: height,
                       backgroundColor: this.props.color || "pink",
                        left: x,
                         top: y }} >
        <h1>-_- u</h1>
      </div>
    );
  }
}

Box.propTypes = {
    size: array,
    body: object, 
    color: string
  }



