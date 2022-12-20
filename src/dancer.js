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

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};