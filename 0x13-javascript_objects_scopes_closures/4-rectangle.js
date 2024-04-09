#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let space = '';
    for (let i = 0; i < this.width; i++) {
      space += 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(space);
    }
  }

  rotate () {
    const N = this.height;
    this.height = this.width;
    this.width = N;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
