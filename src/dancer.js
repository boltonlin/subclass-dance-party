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
  this.height = undefined;
  this.width = undefined;
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
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  if (this.$node.hasClass('lineDancer off')) {
    this.$node.removeClass('off');
  }
  if (!!this.animation) {
    var savedAnimation = this.animation;
    var savedSpeed = this.animationSpeed;
    var toRestore = true;
    this.$node.css('animation-name', 'none');
  }
  console.log(this.$node.css('animation'));
  this.$node.addClass('lineDancer');
  this.$node.css('animation-name', 'lineUp');
  console.log(this.$node.css('animation'));
  this.$node.css('animation-duration', (this.timeBetweenSteps) + 'ms');
  setTimeout(() => {
    this.setPosition(this.top, 0);
    this.$node.addClass('off');
    if (toRestore) {
      this.$node.css('animation', savedAnimation);
      this.$node.css('animation-duration', savedSpeed);
    }
  }, this.timeBetweenSteps);
};