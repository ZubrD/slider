import { filterByTerm } from '../js/tasks.js'
// const filterByTerm = require('../js/tasks.js')

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" },
        { id: 3, url: "https://www.rank3.dev" }
      ];
      const output = [{ id: 3, url: "https://www.rank3.dev" }];

      expect(filterByTerm(input, "rank")).toEqual(output);

    });
  });

