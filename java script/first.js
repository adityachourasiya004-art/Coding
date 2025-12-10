// console.log("ram ram");

// for( i = 1;i<=5;i++){
//     str = '';
//     for(j = 1;j<=i;j++){
//         str +='*';

//     }
//     console.log(str)
// }
// function sum(a,b,c){
//     sum = a+b+c;
//     console.log(sum);

// }
// sum(5,6,7);
// let arr =[1,2,3,4,5,6,7];
// console.log(arr.join);


// let arr = [1, 2, 3, 45, 5]
// let total = 0;
// const sum = () => {
//     for (let a = 0; a < arr.length; a++) {


//         total = total + arr[a]
//     }
//     console.log(total)
// }
// sum(arr);

// let arr = [1, 2, 3, 45, 5]
// sum=0
// arr.forEach(element => {
//     console.log(element)
//     sum+=element
    
// });
// console.log(sum)


// let data =[
//     {name:"anshu",course:"btach",branch:"cse"},
//     {name:"aditya",course:"btach",branch:"ds"},
//     {name:"jay",course:"btach",branch:"civil"},
//     {name:"abhi",course:"btach",branch:"math"},
//     {name:"ram",course:"btach",branch:"civil"}
// ]

// // student = data.filter(Element => {
// // if(Element.branch=="civil"){
// //     return Element
// // }
// // });
// let student = data.filter(element => element.branch==='civil').map((element)=>element.name)

// console.log(student)
console.log("anshu")
// function sum(a,b){
//     let total = a+b;
//     console.log(total);
// }
// sum(4,5);
// sum =(a,b)=>{
//     let total =a+b;
//     console.log(total)
// }
// sum(3,4)
const text = document.getElementById("text");
const btn = document.getElementById("button");
// function random(max) {
//     return Math.floor(Math.random() * (max + 1));
// }
// btn.addEventListener('click',function(){
//     const colour = `rgb(${random(255)} ${random(255)} ${random(255)})`
//     console.log(colour)

//     document.body.style.backgroundColor = `${colour}`
// })
const p = document.createElement("p");
p.innerHTML=text.value
text.addEventListener('input', function(){

    console.log(text.value);
    p.innerHTML=text.value;
    document.body.appendChild(p)
})

