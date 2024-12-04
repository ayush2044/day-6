// let a = 5;
// const b = 5;
// var c = a + b;
// console.log("hellow jimmy :",c);
// // varaibles : let,const,var------.
// document.write("hello world");
// let e=5;
// console.log(e);
// var d=5;
// console.log(d);
// const n=10;
// console.log(n);

    // loops: for and while:
//  let count = 1;
//  let i = 9;
//        while(count<=10){   
        
    
//         let table = (i*count);
//         console.log("9 *",count,"=",table);
//         count++;
//        }
    
//        const userInput = 10;
//        for(let i = 1; i <= 10; i++){
//         const pahade = userInput + "*" +i+ "=" +userInput*i;
//         console.log(pahade);

//        }
//     for(let i = 1; i<=100;i++){
//         if(i%3===0 & i%5 === 0 & i%7 === 0){
//         console.log(i);
//         }
//     }

//        for(let i = 0; i<100;i++){
//         if(i % 2 !== 0){
//             console.log(i);
//         }
      
//        }
//        for(let i = 0; i<100;i++){
//        if(i % 2 !== 1){
//         console.log(i);
//     }
// }
// let i =100;
// while(i>1){
//     if(i%2 !== 0){
//         console.log(i);
//     }
//     i--;
// }
// let count=0;
// for(let i = 1; i<100; i=i+2){
//     ans = i + count;
//     console.log(ans);


console.log("-----helloo------");
const title = document.getElementById("title");
console.log("title");
const desc = document.getElementsByClassName("desc");
console.log(desc);
desc[0].innerText = "RED-RANGER";

const heading = document.getElementsByClassName("heading");
heading.length;
for(let i = 0;i<heading.length;i++){
    if(i%2 !== 1)
    heading[i].innerText = "even";
    else
    heading[i].innerText = "odd";
}

heading[0].innerText = "tenu ki lagda shubham ? ";
heading[1].innerText = "mainu pujabi nayi aundi";
heading[2].innerText = "mainu bahot vadiya punjabi aundi hai putarrrr";

// heading[1].innerText = "pehle tu thana tha ";
// heading[2].innerText = "fir baad me puchiyo ki tere babu ne thana thaya ya nhi";
Array.length;
for(let i = 10;i>=Array.length;i--){
    console.log(i);
}
const arr = [10,9,8,7,6,5,4,3,2,1];
// const FirstElement = arr[0];
arr.length;
for(let i = 0;i<arr.length;i++){
    if(i%2 === 0){
        arr[i];
        console.log(arr[i]);
        
    }
   
}
const ar = [1,2,3,4,5,6,7,8,9,10];
ar.length;
for(let i = 0;i<ar.length;i++){
    let Sum;
    sum = sum + ar[i];
    console.log(sum);

}
// console.log(FirstElement);