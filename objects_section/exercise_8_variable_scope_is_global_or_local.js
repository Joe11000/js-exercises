// primatives are passed and copied by value 
// objects (arrays, functions, objects) are passed and copied by reference

let global_variable = 0

function add1(){
  global_variable++
}
function add2(){
    global_variable += 2
}
function add3(){
    return {
        global_variable: global_variable += 3
    }
}
add1(); add2(); add3();
console.log('test_1', global_variable === 6)


function dontadd50(){
    let global_variable = 50
    global_variable += 50
    return (global_variable)
}
function dontadd150(){
    const global_variable = {global_variable: undefined}
    global_variable.global_variable = 250
    return (global_variable)
}
function dontadd250(){
    var global_variable = 50
    global_variable += 250
    return (global_variable)
}
dontadd50(); dontadd150(); dontadd250();
console.log('test_2', global_variable === 6)
