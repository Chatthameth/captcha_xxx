function captcha(pattern,operator,Loperand,Roperand){
  this.generate = function(){
    return new (L.toString(pattern,Loperand) + ' ' + O.toString(operator) + ' ' + R.toString(pattern,Roperand));
  }
}
let num = [0,1,2,3,4,5,6,7,8,9];
let text = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

function O(operator){

}

function L(pattern,Loperand){

}

function R(pattern,Roperand){

}

describe('captcha app', () => {

})
