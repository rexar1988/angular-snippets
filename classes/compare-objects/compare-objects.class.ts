export class CompareObjectsClass {
  static compareObjects(object1, object2, exclude?: string[]): boolean {
    if (exclude) {
      exclude.forEach((item: string) => {
        delete object1[item];
        delete object2[item];
      });
    }

    if (Object.entries(object1).length !== Object.entries(object2).length) {
      return false;
    }

    const array1 = Object.entries(object1);
    const array2 = Object.entries(object2);

    this.sortArrays(array1);
    this.sortArrays(array2);

    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  private static sortArrays(array: any[]): void {
    for (const [key, value] of array.entries()) {
      if (!Array.isArray(value) && value instanceof Object) {
        array[key] = Object.entries(value);

        this.sortArrays(array[key]);
      }

      if (Array.isArray(value)) {
        this.sortArrays(value);
      }
    }

    array.sort((a, b) => {
      if (a.toString() === b.toString()) {
        return 0;
      }

      if (a.toString() > b.toString()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
