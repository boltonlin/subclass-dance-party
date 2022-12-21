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
  timeBetweenSteps = Math.random() * (1000 - 200) + 200;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer blinky">');
  this.$node.attr('src', 'assets/blinky0.png')
  this.setPosition(top, left);
  this.height = 100;
  this.width = 100;
  this.displayCount = 0;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.toggle();
  if (this.$node.css('display') !== 'none') {
    this.displayCount++;
  }
  if (this.displayCount % 2 === 0) {
    this.$node.attr('src', 'assets/blinky0.png');
  } else {
    this.$node.attr('src', 'assets/blinky1.png');
  }
};