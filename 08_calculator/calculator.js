const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(arr) {
  let ans=0;
  for(let i=0;i<arr.length;i++){
    ans+=arr[i];
  }
  return ans;
};

const multiply = function(arr) {
  let ans=1;
  for(let i=0;i<arr.length;i++){
    ans*=arr[i];
  }
  return ans;

};

const power = function(base,power) {
  let answer=1;
  for(let i=1;i<=power;i++){
    answer*=base;
  }
  return answer;
	
};

const factorial = function(num) {
  if(num==1 || num==0) return 1;
  else
    return num*factorial(num-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
