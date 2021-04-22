@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("oopsy")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    throw new Error();
    console.log(`swish`);
  }
}

function classDecorator (constructor: typeof Boat) {
  console.log(`constructor`, constructor);

}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(`key`, key, index);
}

function testDecorator(target: any, key: string) {
  console.log(`target`, target);
  console.log(`key`, key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot('speed');
