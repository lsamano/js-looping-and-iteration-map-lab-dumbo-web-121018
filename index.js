// Code your solution in this file.
let lowerCaseDrivers = (drivers) => {
  return drivers.map( driver => driver.toLowerCase());
}

let fullNameToObject = (driver) => {
  const nameArray = driver.split(" ");
  let nameObject = {firstName: `${nameArray[0]}`, lastName: `${nameArray[1]}`}
  return nameObject;
}

let nameToAttributes = (drivers) => {
  return drivers.map(driver => fullNameToObject(driver));
}

let attributesToPhrase = (drivers) => {
  return drivers.map(driver => `${driver["name"]} is from ${driver["hometown"]}`);
  // return drivers.map(driver => driver);
}
