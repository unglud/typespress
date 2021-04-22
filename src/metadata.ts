import "reflect-metadata";

@printMetadata
class Plane {
  color = "red";

  @markFunction('321')
  fly(): void {
    console.log(`Janina`);
  }
}

function markFunction(secretInfo: string){
  return function(target: Plane, key: string)
 {
  Reflect.defineMetadata("secret", secretInfo, target, key);
}}

function printMetadata (target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(`secret`, secret);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

//console.log(`secret`, secret);
