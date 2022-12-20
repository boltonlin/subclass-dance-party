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
  timeBetweenSteps = Math.random() * (3000 - 500) + 500;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer">');
  this.$node.attr('src', 'assets/spinny.webp')
  this.$node.css('width', '100px');
  this.setPosition(top, left);
  this.$node.css('animation', 'spin ' + this.timeBetweenSteps + 'ms linear 0s infinite');
  this.$node.css('animation-play-state', 'paused');
  this.spinCount = 0;
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  this.oldStep.call(this);
  if (this.$node.css('animation-play-state') === 'paused') {
    this.$node.css('animation-play-state', 'running');
  } else {
    this.spinCount++;
  }
};