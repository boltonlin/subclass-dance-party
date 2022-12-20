describe('BouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, 0);
    timeBetweenSteps = bouncyDancer.timeBetweenSteps;
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that updates its css', function() {
    sinon.spy(bouncyDancer.$node, 'css');
    bouncyDancer.step();
    expect(bouncyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {

    it('should call step in their designated rhythm', function() {
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });

    it('should move', function() {
      sinon.spy(bouncyDancer, '_updateCoord');
      bouncyDancer.step();
      expect(bouncyDancer._updateCoord.called).to.be.true;
    });

    it('should change direction if it would go out of bounds', function() {
      bouncyDancer.directionY = false;
      bouncyDancer.directionX = true;
      bouncyDancer.boundsY = 250;
      bouncyDancer.setPosition(245, 0);
      sinon.spy(bouncyDancer, '_changeDirection');
      expect(bouncyDancer.directionY).to.be.false;
      bouncyDancer.step();
      expect(bouncyDancer._changeDirection.called).to.be.true;
      expect(bouncyDancer.directionY).to.be.true;
    });

  });
});
