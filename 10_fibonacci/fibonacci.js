const fibonacci = function(num) {
    let a=0, b=1, c, res=[0,1];
    num = Number(num);
if(num<0){
    return "OOPS";
}
else{
    for(let i=0;i<num;i++){
    c=a+b;
    res.push(c);
    a=b;
    b=c;}
    // 1 1 2 3 5 8 13 21
}
return res[num];
};

// Do not edit below this line
module.exports = fibonacci;
