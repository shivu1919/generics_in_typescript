//Attaching generics with functions....
function Myfun(a, b) {
    console.log("The user has entered: " + a + " & " + b);
}
//calling the funtion for first time with string values
Myfun("Shivam", "NIt");
//calling the function with number values
Myfun(12, 20);
//calling the function with boolean valaues
Myfun(false, true);
//calling the function with mixed values (Generally it will produce error because of type safety)
Myfun(true, 12);
