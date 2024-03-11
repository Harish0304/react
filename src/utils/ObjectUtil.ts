export class ObjectUtil {
    public static renderMap<T>(json: any, A?: any): Map<string, T> {
      let mapValues = new Map<string, T>();
      if (json) {
        Object.keys(json).forEach((val) => {
          if (A) {
            json[val] = ObjectUtil.createInstance<T>(json[val], A);
          }
          mapValues.set(val, json[val] as T);
        });
      }
      return mapValues;
    }
  
    private static createInstance<A>(val: any, c: new (val: any) => A): A {
      return new c(val);
    }
  
    public static renderArray<T>(json: Array<any>, A?: any): Array<T> {
      let arrayValues = new Array<T>();
      if (json && json instanceof Array && json.length)
        json.forEach((val) => {
          if (A) val = ObjectUtil.createInstance<T>(val, A);
          arrayValues.push(val);
        });
      return arrayValues;
    }
  }
  