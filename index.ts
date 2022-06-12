import { Merge } from "./Merge";

function main(collection_1: number[], collection_2: number[]) {
  try {
    collection_1.map((item) => {
      if (item < 0) {
        throw "Please enter number greater than or equal to zero.";
      }
    });

    collection_2.map((item) => {
      if (item < 0) {
        throw "Please enter number greater than or equal to zero.";
      }
    });

    let arr = new Merge();

    let sum = arr.merge(collection_1, collection_2);

    console.log(sum);

    return sum;
  } catch (e) {
    console.error(e);

    return e;
  }
}


main([10, 2, 5], [1, 4, 3]);
module.exports = main;
