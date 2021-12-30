
export function filterByTerm (inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
}


// const area = (radius) => Math.PI * radius ** 2;
// const circumference = (radius) => 2 * Math.PI * radius;
  
// module.exports = { filterByTerm, area, circumference }
