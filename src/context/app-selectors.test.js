import { selectAverageRatingsFromState } from "./app-selectors";

import {
  dummyData,
  dummyData2,
  dummyData3,
  dummyData4,
} from "./test-data/test-feedback";

describe("selectAverageRatingsFromState()", () => {
  it("should equal to the correct amount given certain data", () => {
    const dataResult1 = selectAverageRatingsFromState(dummyData);
    const dataResult2 = selectAverageRatingsFromState(dummyData2);
    const dataResult3 = selectAverageRatingsFromState(dummyData3);

    expect(dataResult1).toEqual(5);
    expect(dataResult2).toEqual(3.5);
    expect(dataResult3).toEqual(5);
  });

  it("should return null if there is no data being passed in ", () => {
    const nullResult = selectAverageRatingsFromState();
    expect(nullResult).toEqual(null);
  });

  it("should return null if there is no feedback property in the data passed in", () => {
    const nullResult = selectAverageRatingsFromState(dummyData4);
    expect(nullResult).toEqual(null);
  });
});
