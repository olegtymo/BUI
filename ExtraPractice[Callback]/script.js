// ######################################################################  TASK1  #########################################################################
const someFunction = (value, success, failure) => {
  value ? success() : failure()
}

// ######################################################################  TASK2  #########################################################################
const locationsMap = {
  "Суми": ["Охтирка", "Білопілля", "Шостка", "Конотоп"],
  "Чернігів": ["Новгород-Сіверський"],
  "Харків": ["Дергачі", "Чугуїв", "Балаклія", "Слобожанське", "Зміїв"],
  "Київ": ["Яготин", "Бориспіль", "Бровари"]
}

const getNeighbours = (anyLocation) => {
  return Object.keys(locationsMap).includes(anyLocation) ? locationsMap[anyLocation] : null;
}

const waetherApp = (location, getNeighbours) => {
  const citiesArray = getNeighbours(location);
  const arrayOfObjects = citiesArray.map((city) => {
    return {
      name: city,
      yearsOld: NaN,
      population: NaN
    }
  })
  return arrayOfObjects;
}

// ######################################################################  TASK3  #########################################################################
const isSpecialCharacter = (value) => {
  // return value.toLowerCase() === value.toUpperCase()
  
}
const removeSpecialCharacters = (url, isSpecialCharacter) => {
  let validatedUrl = '';
  for (let i of url) {
    !isSpecialCharacter(i) ? validatedUrl += i : ''
  }
  return validatedUrl;
}