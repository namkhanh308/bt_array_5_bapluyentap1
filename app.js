//b1
// let arr = [11, 21, 31, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         count += 1;
//     }
// }
// alert("Có " + count + " số lớn hơn hoặc bằng 10")

// b2
// let arr = [11, 21, 31, 35, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// let viTri;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         viTri = i;
//     }
// }
// alert("Số lớn nhất là " + max + " vị trí " + viTri);


// b3
// let arr = [1, 2, 3, 4, 5];
// let max = arr[0];
// let viTri;
// let sum = 0;
// let avg;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         viTri = i;
//     }
//     sum += arr[i];
//     avg = sum / arr.length;
// }
// document.write("Số lớn nhất là " + max + " vị trí " + viTri + "<br>");
// document.write("Trung bình là " + avg);

// b4
// let arr = [];
// while (arr.length < 5) {
//     let n = prompt();
//     arr.push(n);
// }
// arr.reverse().toString();
// console.log(arr);

// b5
// let arr = [-11, 21, 31, -4, 5, 6, -7, 8, 9, 10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         count += 1;
//     }
// }
// alert("Có " + count + " số nguyên âm");

// b6
// let a = [];
// for(let i = 0; i < 5;i++){
//     let d = parseInt(prompt("Nhap n"))
//     a.push(d);
// }
// let b = parseInt(prompt("Nhập V"))
// let v = a.indexOf(b);
// if(v != -1){
//     alert("V is in the array")
// }
// else{
//     alert("V is not in the array")
// }
// b7
// let a = [];
// for(let i = 0; i < 5;i++){
//     let d = parseInt(prompt("Nhap n"))
//     a.push(d);
// }
// let b = parseInt(prompt("Nhập V"))
// for (let i = 0 ; i< a.length;i++){
//     if(a[i] === b){
//         a.splice(i,1)
//     }
//
// }
// console.log(a)

// b8
// let a = [1,5,3,2,5,7,9,2,0,1];
// a.sort(function (a,b){
//     return a-b;
// })
// console.log(a)

// b9
// let a = [1,5,3,2,5,7,9,2,0,1];
// let b = [1,5,3,2,5,7,9,2,22,12];
// let c = a.concat(b);
// console.log(c)