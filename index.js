function lowerCaseDrivers(drivers) {
  const newList = drivers.map(function(name) {return name.toLowerCase();})
  return newList
}

function nameToAttributes(drivers){
  firstName = []
  lastName = []

  const newDrivers = drivers.map(function (name) {
    return Object.assign({}, name, {firstName: 'name' });
  });

  newDrivers;
}

function attributesToPhrase(drivers) {
  const attributes = drivers.map(function (account) {
    return `${account.name} is from ${account.hometown}`;
  });
  attributes;
}
