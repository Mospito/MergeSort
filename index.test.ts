const MergeSort = require("./index");

test("MergeSort arr [6,2,5] and [1,4,3] to [1,2,3,4,5,6]", () => {
  const collection_1 = [6, 2, 5];
  const collection_2 = [1, 4, 3];
  const ans = [1, 2, 3, 4, 5, 6];
  expect(MergeSort(collection_1, collection_2)).toEqual(ans);
});

test("MergeSort arr [1234,10,5000] and [0,400,321] to [0,10,321,400,1234,5000]", () => {
  const collection_1 = [1234, 10, 5000];
  const collection_2 = [0, 400, 321];
  const ans = [0, 10, 321, 400, 1234, 5000];
  expect(MergeSort(collection_1, collection_2)).toEqual(ans);
});

test("MergeSort arr [12,6,66] and [11,0,-5] have value less than zero.", () => {
  const collection_1 = [12, 6, 66];
  const collection_2 = [11, 0, -5];
  const ans = "Please enter number greater than or equal to zero.";
  expect(MergeSort(collection_1, collection_2)).toEqual(ans);
});

test("MergeSort arr [1000,100,-1] and [10,-10,1] have value less than zero.", () => {
  const collection_1 = [1000, 100, -1];
  const collection_2 = [10, -10, 1];
  const ans = "Please enter number greater than or equal to zero.";
  expect(MergeSort(collection_1, collection_2)).toEqual(ans);
});
