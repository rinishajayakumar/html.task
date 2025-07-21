//global scope:variables  declared outside any function or block are in the global scope
//function scope:only accessible in the function in which they are declared
//block scope:the block scope of a variable means that the variables is accessible 
//within the block that is between the curlybraces
function SendMessage(){
    let x=10;
    console.log(x);//within
}
SendMessage();

function check(){
    if(true){
        let name="webdevelopment";
        var iscloudy=true;
        console.log(name);
    }
    console.log(iscloudy);
}
check()
//callback function in js:a callback function in javascript is a function that is passed as an arguement
//to another function,and it is executed after the completion of that function
// commonly used for:handling asynchronous operations(like api calls,timeouts,or event handling)
//customizing behavior inside functions
function First(){
    console.log("This is my first function");
}
First()
function Second(callback){
    console.log("This is my second function");
    
}
Second(First)
//clearinterval

let count=0;
let Input=()=>{ //arrow function
    count++;
    console.log(count);
    if(count<5){
        Input();
}
}
Input();