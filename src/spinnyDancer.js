/**
 * SpinnyDancer inherits from Dancer and defines its 'step' as bouncing
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
 * @returns a SpinnyDancer
 */

var SpinnyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');
  this.speed = Math.random() * (3000 - 500) + 500;
  this.$node.css('animation-duration', `${this.speed}ms`);

};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  this.oldStep.call(this);
};