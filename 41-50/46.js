// Q 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

// Answer
//Omuing => 저 forEach부분과 while부분 공부 계속해야할듯 이해 좀 안됨
let arr = [];
let total = 0;
for(let i=0; i<20; i++) {
	arr[i] = i + 1
}
  console.log(arr)
arr.forEach((n)=> {
  while(n) {
   	total = total + n%10;
    n = Math.floor(n/10);
    console.log(n)
  }
});
console.log(total)

//sjshin