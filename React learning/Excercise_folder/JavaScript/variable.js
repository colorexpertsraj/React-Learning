//var a = 10;
//let a = 10;
//for var
// function foo(){
// for(var i = 0; i < 4; i++){
//     console.log('bit to exabyte it');
// }
// console.log(i); // as a var we can use globally or access out side the loop. example here is i.

// }
// foo();

// () =>{//arrow function

// }

//for let
function foo(){
    for(let i = 0; i < 4; i++){
        console.log('bit to exabyte it');
    }
    //console.log(i); //in let here i cannot access outside the loop. So loop is worked and after this for loop console.log(i); show an error.
    }
    foo();

//for const
// function foo(){
//     for(const i = 0; i < 4; i++){
//         console.log('bit to exabyte it');
//     }
//     console.log(i); //const use for when you use for constant variable . that means we can't change this variable value
//     // here i is constant so not increasing i++ so it getting this error
//     }
//     foo();