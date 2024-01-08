function a() {
  console.log('Function A')
}
let x = new a()
x.__proto__.__proto__.number = 100
console.log('x.number:', x.number)
console.log('x.__proto__:', x.__proto__)
console.log('a.prototype: ', a.prototype)

a.prototype.__proto__.number = 200
Object.prototype.number = 500

// Object Function => Function Prototype => Object Prototype
Object.__proto__.__proto__.number = 1000

function b() {
  console.log('Function B')
}
let y = new b()
console.log('y.number:', y.number)
console.log('y.__proto__:', y.__proto__)
console.log('b.constructor: ', b.constructor)

b.prototype.constructor()
y.constructor()
console.log((function () { }).prototype.__proto__.number)

let f = () => {
  console.log('Function F')
}
f()
