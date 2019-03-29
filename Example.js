

/** 
  @function Determines some car
  @param {boolean} rightHand - It has right hand drive
  @param {string} model - Model of new Car
  @param {number} year - year of car
*/
function createCar(rightHand, model, year) {
  const car = {
    rightHand,
    model,
    year
  }
  return car;
}

createCar();

