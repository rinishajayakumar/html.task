//array object:it is a collection where each element is an object with properties
//used to group related data together in a structured way
let details={
    name:"js",
    totalmarks:100,
    subject:{
        dbms:100,
        java:100
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }
} 
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum())
//object destructuring:object destructuring is a syntax in javascript that allows you to
//extract values from objects and assign them to variables in a clean 
let person={
    job:"softwareTester",
    salary:25000
}
const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);
//array destructuring
let arr=new Array(1,2,"three");
console.log(arr[2]);
let arr2=["js",true,false];

const[name,b1,b2]=arr2;
console.log(name)
//filter-returns a new array containing only the elements that match a condition
let students='{'
    {name:"john",grade;"A"}
    {name:"joe",grade;"B"}
    {name:"suvitha",grade;"A"}
'}'
let gradestudents=students.filter(students=>students.grade==="A")
console.log(gradestudents);
//splice
let names=["Asha","Bala","Charan"];
names.splice(1,1,"David");
console.log(names);
