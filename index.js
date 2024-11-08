function distanceFromHqInBlocks(valueForBlocks) {
  const scuberHq = 42;
  const numberOfBlocksFromScuberHq =
    valueForBlocks > scuberHq
      ? valueForBlocks - scuberHq
      : scuberHq - valueForBlocks;
  return numberOfBlocksFromScuberHq;
}

function distanceFromHqInFeet(num) {
  const calculatedDistanceFromHqInFeet = 264 * distanceFromHqInBlocks(num);
  return calculatedDistanceFromHqInFeet;
}

function distanceTravelledInFeet(start, dest) {
  let calculatedDistanceTravelledFromHqInFeet =
    start > dest ? start - dest : dest - start;
  return calculatedDistanceTravelledFromHqInFeet * 264;
}

function calculatesFarePrice(start, dest) {
  let distance = distanceTravelledInFeet(start, dest);
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 400 && distance <= 2000:
      return (distance - 400) * 0.02;
    case distance > 2000 && distance < 2500:
      return 25;
    case distance >= 2500:
      return "cannot travel that far";
  }
}
