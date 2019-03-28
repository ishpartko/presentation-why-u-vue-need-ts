interface Car {
    rightHand: boolean,
    model: string,
    year: number
}

function createCar(
  rightHand: boolean,
  model: string,
  year: number): Car {
  const car = {
      rightHand,
      model,
      year
  }
  return car;
}

createCar(true, 'DonetskJS car');
createCar('True', 'DonetskJS car', 2019);
createCar(true, 'DonetskJS car', new Date());

