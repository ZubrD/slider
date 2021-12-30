import { summa } from '../js/scale.js'

describe("Тесты scale.js", () => {
    test("Сумма 4 и 5", () => {
      expect(summa(4, 5)).toEqual(9);
    });

    test("Сумма -10 и 5", () => {
      expect(summa(-10, 5)).toEqual(-5);
    });    
});