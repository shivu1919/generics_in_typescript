//Performing operation in generics based functions.

function Add<G>(a:G, b:G): G {
   let sum = a + b;
   //console.log(sum)
   //console.log(typeof(a) + " "+ typeof(b))
   return sum;
}

//calling the function with number values

console.log(Add(3,4))