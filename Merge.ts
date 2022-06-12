import { MergeFunction } from "./interface";

export class Merge implements MergeFunction {
  merge(collection_1: number[], collection_2: number[]): number[] {
    let sortedArr: number[];

    sortedArr = [...collection_1].concat(collection_2);
    let sum = this.MergeSort(sortedArr);
    return sum;
  }

  private MergeSort(items: number[]): number[] {
    return this.divide(items);
  }

  private divide(items: number[]): number[] {
    let halfLength = Math.ceil(items.length / 2);
    let low = items.slice(0, halfLength);
    let high = items.slice(halfLength);
    if (halfLength > 1) {
      low = this.divide(low);
      high = this.divide(high);
    }
    return this.combine(low, high);
  }

  private combine(low: number[], high: number[]): number[] {
    let indexLow = 0;
    let indexHigh = 0;
    let lengthLow = low.length;
    let lengthHigh = high.length;
    let combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      let lowItem = low[indexLow];
      let highItem = high[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem <= highItem) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }

    return combined;
  }
}
