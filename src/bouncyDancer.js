/**
 * BouncyDancer inherits from Dancer and defines its 'step' as bouncing
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
 * @returns a BouncyDancer
 */

var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = Math.random() * (30 - 10) + 10;
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, this.timeBetweenSteps);
  this.boundsY = $('body').height() - 20;
  this.boundsX = $('body').width() - 20;
  this.directionY = Math.random() < 0.5 ? true : false;
  this.directionX = Math.random() < 0.5 ? true : false;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.oldStep.call(this);
  var newX = this._updateCoord.call(this, this.$node.position().left, this.boundsX, this.directionX, 'x');
  var newY = this._updateCoord.call(this, this.$node.position().top, this.boundsY, this.directionY, 'y');
  this.$node.css('top', newY);
  this.$node.css('left', newX);
};

BouncyDancer.prototype._updateCoord = function(coord, bound, direction, axis) {
  if (direction) {
    if (coord + 10 <= bound) {
      return coord + 10;
    } else {
      this._changeDirection.call(this, axis)
      return coord - 10;
    }
  } else if (!direction) {
    if (coord - 10 >= 20) {
      return coord - 10;
    } else {
      this._changeDirection.call(this, axis);
      return coord + 10;
    }
  }
}

BouncyDancer.prototype._changeDirection = function (axis) {
  if (axis === 'x') {
    this.directionX = !this.directionX;
  } else if (axis === 'y') {
    this.directionY = !this.directionY;
  }
}