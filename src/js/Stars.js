import React from "react";

function Starfield() {
  this.fps = 30;
  this.canvas = null;
  this.width = 0;
  this.height = 0;
  this.minVelocity = 15;
  this.maxVelocity = 50;
  this.stars = 300;
  this.intervalid = 0;
}

Starfield.prototype.initialise = function(div) {
  var self = this;

  //  Store the div
  this.containerDiv = div;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  window.addEventListener("resize", function resize(event) {
    self.width = window.innerWidth;
    self.height = window.innerHeight;
    self.canvas.width = self.width;
    self.canvas.height = self.height;
    self.draw();
  });

  //  Create the canvas
  var canvas = document.createElement("canvas");
  div.appendChild(canvas);
  this.canvas = canvas;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
};

Starfield.prototype.start = function() {
  //  Create the stars
  var stars = [];
  for (var i = 0; i < this.stars; i++) {
    stars[i] = new Star(
      Math.random() * this.width,
      Math.random() * this.height,
      Math.random() * 2 + 1,
      Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity
    );
  }
  this.stars = stars;
  var self = this;
  //	Start the timer.
  this.intervalId = setInterval(function() {
    self.update();
    self.draw();
  }, 1000 / this.fps);
};

function Star(x, y, size, velocity) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.velocity = velocity;
  const color_list = ["#ffffff" /*, "#fb83fa", "#31bcb8", "#f6f740"*/];
  this.color = color_list[Math.floor(Math.random() * color_list.length)];
}

Starfield.prototype.update = function() {
  var dt = 1 / this.fps;
  for (var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i];
    star.y += dt * star.velocity;
    //  If the star has moved from the bottom of the screen, spawn it at the top.
    if (star.y > this.height) {
      this.stars[i] = new Star(
        Math.random() * this.width,
        0,
        Math.random() * 2 + 1,
        Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity
      );
    }
  }
};

Starfield.prototype.draw = function() {
  //  Get the drawing context
  var ctx = this.canvas.getContext("2d");

  // Draw the background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, this.width, this.height);

  //  Draw stars
  ctx.fillStyle = "#ffffff";
  for (var i = 0; i < this.stars.length; i++) {
    var star = this.stars[i];
    ctx.fillStyle = star.color;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  }
};

function Stars() {
  var container = document.getElementById("root");
  var starfield = new Starfield();
  starfield.initialise(container);
  starfield.start();

  return <></>;
}

export default Stars;
