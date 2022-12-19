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
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on
    // each step, it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start
  // setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within
  // the body
  dancer.setPosition(top, left);

  return dancer;
};