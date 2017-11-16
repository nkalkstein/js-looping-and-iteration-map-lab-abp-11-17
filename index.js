function lowerCaseDrivers(drivers) {
  const newList = drivers.map(function(name) {return name.toLowerCase();})
  return newList
}

function nameToAttributes(list){
  return list.map(function(driver) {
    const firstDriver = driver.split(' ')[0];
    const lastDriver = driver.split(' ')[1];

  return { firstName: firstDriver, lastName: lastDriver }
  });


function attributesToPhrase(drivers) {
  const attributes = drivers.map(function (account) {
    return `${account.name} is from ${account.hometown}`;
  });
  return attributes;
}
