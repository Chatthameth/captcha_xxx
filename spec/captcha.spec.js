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

}

function R(pattern,Roperand){

}

describe('captcha app', () => {

})
