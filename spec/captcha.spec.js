function captcha(pattern,operator,Loperand,Roperand){
  this.generate = function(){
    return new (L(pattern,Loperand) + ' ' + O(operator) + ' ' + R(pattern,Roperand));
  }
}
let num = [0,1,2,3,4,5,6,7,8,9];
let text = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

function O(operator){
this.toString = function(){
  if(operator === 1) return '+';
  else if(operator === 2) return '-';
}}

function L(pattern,Loperand){
  if (pattern === 1 && Loperand === 0)      { return '0' };
  else if (pattern === 1 && Loperand === 1) { return '1' };
  else if (pattern === 1 && Loperand === 2) { return '2' };
  else if (pattern === 1 && Loperand === 3) { return '3' };
  else if (pattern === 1 && Loperand === 4) { return '4' };
  else if (pattern === 1 && Loperand === 5) { return '5' };
  else if (pattern === 1 && Loperand === 6) { return '6' };
  else if (pattern === 1 && Loperand === 7) { return '7' };
  else if (pattern === 1 && Loperand === 8) { return '8' };
  else if (pattern === 1 && Loperand === 9) { return '9' };        
}

function R(pattern,Roperand){

}

describe('captcha app', () => {

})
