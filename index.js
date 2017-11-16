function lowerCaseDrivers(drivers) {
  const newList = drivers.map(function(name) {return name.toLowerCase();})
  return newList
}

function nameToAttributes(drivers){
  const newDrivers = drivers.map(function (name) {
    return Object.assign({}, name, { equipment: 'Laptop' });
  });
   
  newDrivers;
}