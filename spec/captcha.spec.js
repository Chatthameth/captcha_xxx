function captcha(pattern,operator,Loperand,Roperand){
  this.generate = function(){
    return new L(pattern,Loperand) + ' ' + new O(operator) + ' ' + new R(pattern,Roperand);
  }
}

function O(operator){
this.toString = function(){
  if(operator === 1) return '+';
  else if(operator === 2) return '-';
}}

function L(pattern,Loperand){
  this.toString = function(){
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
}}

function R(pattern,Roperand){
  this.toString = function(){
    if(pattern === 1 && Roperand === 0) return 'ZERO';
    else if(pattern === 1 && Roperand === 1) return 'ONE';
    else if(pattern === 1 && Roperand === 2) return 'TWO';
    else if(pattern === 1 && Roperand === 3) return 'THREE';
    else if(pattern === 1 && Roperand === 4) return 'FOUR';
    else if(pattern === 1 && Roperand === 5) return 'FIVE';
    else if(pattern === 1 && Roperand === 6) return 'SIX';
    else if(pattern === 1 && Roperand === 7) return 'SEVEN';
    else if(pattern === 1 && Roperand === 8) return 'EIGHT';
    else if(pattern === 1 && Roperand === 9) return 'NINE';

}}

describe('captcha app', () => {

})
