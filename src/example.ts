const concat = (str: string, str2: string): string => str + str2;

concat('Hello ', 'World') // -> Hello World;

interface ITask {
  howIDoIt: string
  someArray: Array<string | number>
  withData: [
    {
      howIDoIt: string
      someArray: Array<string | number>
    }
  ]
}

const MyHomeTask: ITask = {
  howIDoIt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

console.log(MyHomeTask);

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];

const result = tsArr.reduce((sum, el) => {
  return sum + el;
}, 0)

console.log(result);