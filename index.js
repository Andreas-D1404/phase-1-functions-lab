function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
      console.log(`Distance from Scuber HQ (blocks) : ${someValue - 42}`);
      return someValue - 42;
    } else {
      console.log(`Distance from Scuber HQ (blocks) : ${42 - someValue}`);
      return 42 - someValue;
    }
  };

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    console.log(`Distance from Scuber HQ (feet): ${blocks * 264}`);
    return blocks * 264;
  };

  function distanceTravelledInFeet(start, destination) {
    if (start>= destination) {
      console.log(`Distance traveled (feet): ${(start - destination) * 264}`);
      return (start - destination) * 264;
    } else {
      console.log(`Distance traveled (feet): ${(destination - start) * 264}`);
      return (destination - start) * 264;
    }
  };

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400) {
      console.log(0);
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      console.log((distance - 400) * 0.02);
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      console.log(25);
      return 25;
    } else if (distance >= 2500) {
      console.log('cannot travel that far');
      return 'cannot travel that far';
    }
  };


console.log(distanceFromHqInBlocks(45));
console.log(distanceFromHqInFeet(45));
console.log(distanceTravelledInFeet(34, 38));
console.log(calculatesFarePrice(34, 38));



