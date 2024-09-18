import Drug from "./class/Drug";
import Pharmacy from "./class/Pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      // new Pharmacy([new Drug("default", 2, 3)]).updateBenefitValue(),
      // new Pharmacy([new Drug("defaultOld", 0, 0)]).updateBenefitValue(),
      // new Pharmacy([new Drug("defaultOld2", 1, 5)]).updateBenefitValue(),
      // new Pharmacy([new Drug("defaultOld3", -150, 1)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Herbal Tea", 5, 5)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Herbal Tea", 1, 5)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Herbal Tea", 2, 48)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Herbal Tea", -485, 50)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Magic Pill", 5, 30)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Magic Pill", 1, 0)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Magic Pill", -95, 50)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Fervex", 15, 32)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Fervex", 11, 32)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Fervex", 6, 32)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Fervex", 6, 49)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Fervex", 1, 49)]).updateBenefitValue(),
      // new Pharmacy([new Drug("Dafalgan", 10, 24)]).updateBenefitValue(),
      new Pharmacy([new Drug("Dafalgan", 1, 24)]).updateBenefitValue(),
    ).toEqual(
      // [new Drug("default", 1, 2)],
      // [new Drug("defaultOld", -1, 0)],
      // [new Drug("defaultOld2", 0, 3)],
      // [new Drug("defaultOld3", -151, 0)],
      // [new Drug("Herbal Tea", 4, 6)],
      // [new Drug("Herbal Tea", 0, 7)],
      // [new Drug("Herbal Tea", -1, 50)],
      // [new Drug("Herbal Tea", 1, 49)],
      // [new Drug("Herbal Tea", -486, 50)],
      // [new Drug("Magic Pill", 4, 30)],
      // [new Drug("Magic Pill", 1, 0)],
      // [new Drug("Magic Pill", 1, 50)],
      // [new Drug("Fervex", 14, 33)],
      // [new Drug("Fervex", 10, 34)],
      // [new Drug("Fervex", 5, 35)],
      // [new Drug("Fervex", 5, 50)],
      // [new Drug("Fervex", 0, 0)],
      // [new Drug("Dafalgan", 9, 22)],
      [new Drug("Dafalgan", 0, 20)],
    );
  });
});
