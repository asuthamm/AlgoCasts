x = {'foo': 'bar'}
y = {'baz': x}
z = y['baz']['foo']

console.log('x         = ', x)
console.log(`x.foo     =  ${x.foo}`)
console.log(`x['foo']  =  ${x['foo']}`)
console.log(' ')
console.log('y         = ', y)
console.log('y.baz     = ', y.baz)          
console.log("y['baz']  = ", y['baz'])  
console.log(' ')
console.log("y.baz.foo = ", y.baz.foo, " =  z  =  y['baz']['foo']")





function f(x) {
  console.log('passing in x: ', x)        // 3
   x *= 2;
     console.log('x: ', x)
  return function(y) {
      console.log('passing in y: ', y).   // 4
    y *= x;
    return function(z) {
      console.log('passing in z: ', z).   // 5
      return z*y;
    }
  }
}
let g = f(3)(4)(5);
console.log(g); //120