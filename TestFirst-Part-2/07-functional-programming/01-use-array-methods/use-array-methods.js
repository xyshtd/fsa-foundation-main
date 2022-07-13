/* eslint-disable no-unused-vars */
//.map()
//indexAndValue
const indexAndValue = (arr) => {
  return arr.map((value, index) => {
    return {
      value,
      index,
    };
  });
};

//.map()
//capitalize .toUppderCase
//callbackfn
const capitalize = (str) => {
  return str.toUpperCase();
};
//swapCase
const swapCase = (str) => {
  return str
    .split(' ')
    .map((element, index) => {
      if (index % 2 === 0) {
        return capitalize(element);
      }
      return element;
    })
    .join(' ');
};

//.flter()
//.includes()
//extenstionSearch
const extensionSearch = (ext, array) => {
  return array.filter((element) => element.includes(ext));
};

//.reduce()
//getPopulation
const getPopulation = (arrAll, arrCountry) => {
  return arrAll.reduce((acc, country) => {
    if (arrCountry.includes(country.name) || arrCountry.length === 0) {
      return acc + country.population;
    }
    return acc;
  }, 0);
};

//.reduce()
//keyifyArrayOfObjects
const keyifyArrayOfObjects = (key, arr) => {
  return arr.reduce((acc, heroObj) => {
    acc[heroObj[key]] = heroObj;
    return acc;
  }, {});
};

//.reduce()
//Math.round()
//powerLevelAverage
const powerLevelAverage = (arr) => {
  return Math.round(
    arr.reduce((acc, heroObj) => {
      return acc + heroObj.powerLevel;
    }, 0) / arr.length
  );
};

//.reduce()
//mapReduce
const mapReduce = (arr, callback) => {
  return arr.reduce((acc, element) => {
    acc.push(callback(element));
    return acc;
  }, []);
};

//.reduce()
//filterReduce
const filterReduce = (arr, checkFunc) => {
  return arr.reduce((acc, element) => {
    if (checkFunc(element)) {
      acc.push(element);
    }
    return acc;
  }, []);
};

//method chaining
//.filter()
//.map()
//inYourBudget
const inYourBudget = (maxPrice, arr) => {
  return arr
    .filter((element) => element.price <= maxPrice)
    .map((element) => element.item);
};
//method chaining
//.map()
//.filter()
//separateAndReturnNames

const separateAndReturnNames = (arr, nameKey, maxLength) => {
  return arr
    .map((heroObj) => {
      const [firstName, lastName] = heroObj.name.split(' ');
      heroObj.firstName = firstName;
      heroObj.lastName = lastName;
      return heroObj;
    })
    .filter((heroObj) => heroObj[nameKey].length <= maxLength)
    .map((heroObj) => heroObj[nameKey]);
};
//.filter()
//.reduce()
//priorityTodoDuration
const priorityTodoDuration = (arr) => {
  return arr
    .filter((item) => item.priority === 'high')
    .reduce((acc, item) => {
      return acc + item.duration;
    }, 0);
};
