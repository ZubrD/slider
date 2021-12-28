import {jest} from '@jest/globals';

jest.useFakeTimers();

export function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }
  
//   module.exports = filterByTerm