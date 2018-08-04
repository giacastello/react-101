

/* ---------- var ----------*/

var message = 'hi';
{
    var message = 'bye';
}
console.log(message);
// bye (because it's being reassigned)


var message = 'hi';
function greet (){
    var message = 'bye';
}
console.log(message);
// hi  (because bye is only executed when the funcion is ran)

/* ---------- let ----------*/
let message = 'hi';
{
    let message = 'bye';
}
console.log(message);
// hi (because let uses block scoping. As message 2 is inside a block, it wont affect the planed output)