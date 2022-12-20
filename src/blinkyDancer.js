/**
 * makeBlinkyDancer inherits from makeDancer and ...
 *
 * INHERITED METHODS
 * from dancer.js - .setPosition()
 *
 * METHODS
 * .step() - (override) calls the inherited version of step() and
 * toggles (show/hides) itself
 *
 * @param {*} top
 * @param {*} left
 * @param {*} timeBetweenSteps  - time in ms scheduling the new step
 * @returns a blinkyDancer
 */

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still
  // want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call
  // to this new version of step
  console.log(this);
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};