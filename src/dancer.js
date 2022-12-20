/**
 * makeDancer is a function that returns a dancer object.
 *
 * METHODS
 * .step() schedules the next step according to timeBetweenSteps
 * .setPosition() adds the top and left property variables to its
 * HTML span tag
 *
 * @param {*} top
 * @param {*} left
 * @param {*} timeBetweenSteps - time in ms scheduling the new step
 * @returns a dancer object
 */

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // this.step();

  // // now that we have defined the dancer object, we can start
  // // setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within
  // // the body
  // this.setPosition(top, left);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.prototype.step.bind(this)();
  this.prototype.setPosition.bind(this)(top, left);

};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on
  // each step, it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};