describe('SpinnyDancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new SpinnyDancer(10, 20, timeBetweenSteps);
    timeBetweenSteps = dancer.timeBetweenSteps;
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that updates its css', function() {
    sinon.spy(dancer.$node, 'css');
    dancer.step();
    expect(dancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer, 'step');
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
});
