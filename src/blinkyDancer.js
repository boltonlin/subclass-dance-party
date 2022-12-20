/**
 * BlinkyDancer inherits from Dancer and defines its 'step' as toggling
 *
 * INHERITED METHODS
 * .setPosition(top, left) - sets position of the html element
 *
 * METHODS
 * .step() - (override) calls the inherited version of step() to set
 * a timer, then toggles (show/hides) itself
 *
 * @param {*} top
 * @param {*} left
 * @param {*} timeBetweenSteps  - time in ms scheduling the new step
 * @returns a BlinkyDancer
 */

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step.bind(this);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.toggle();
};