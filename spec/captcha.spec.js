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
      if (pattern === 1 && Loperand === 0)      { return '0'; }
      else if (pattern === 1 && Loperand === 1) { return '1'; }
      else if (pattern === 1 && Loperand === 2) { return '2'; }
      else if (pattern === 1 && Loperand === 3) { return '3'; }
      else if (pattern === 1 && Loperand === 4) { return '4'; }
      else if (pattern === 1 && Loperand === 5) { return '5'; }
      else if (pattern === 1 && Loperand === 6) { return '6'; }
      else if (pattern === 1 && Loperand === 7) { return '7'; }
      else if (pattern === 1 && Loperand === 8) { return '8'; }
      else if (pattern === 1 && Loperand === 9) { return '9'; }

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

    else if(pattern === 2 && Roperand === 0) return '0';
    else if(pattern === 2 && Roperand === 1) return '1';
    else if(pattern === 2 && Roperand === 2) return '2';
    else if(pattern === 2 && Roperand === 3) return '3';
    else if(pattern === 2 && Roperand === 4) return '4';
    else if(pattern === 2 && Roperand === 5) return '5';
    else if(pattern === 2 && Roperand === 6) return '6';
    else if(pattern === 2 && Roperand === 7) return '7';
    else if(pattern === 2 && Roperand === 8) return '8';
    else if(pattern === 2 && Roperand === 9) return '9';
}}

describe('captcha app', () => {
  describe('Pattern 1', () => {
    const pattern = 1;
    it('should return "1 + TWO" when input is 1,1,1,2', () => {
      let app = new captcha(pattern,1,1,2);
      expect(app.generate()).toEqual('1 + TWO');
    })
  })
//---------------------------------------------------------------------------------------------
describe('Pattern 1', () =>{
  const pattern = 1;
  it('should return "9 + ZERO"', () => {
    let app = new captcha(pattern,1,9,0);
    expect(app.generate()).toEqual('9 + ZERO');
  })
  it('should return "8 + ONE"', () => {
    let app = new captcha(pattern,1,8,1);
    expect(app.generate()).toEqual('8 + ONE');
  })
  it('should return "7 + TWO"', () => {
    let app = new captcha(pattern,1,7,2);
    expect(app.generate()).toEqual('7 + TWO');
  })
  it('should return "6 + THREE"', () => {
    let app = new captcha(pattern,1,6,3);
    expect(app.generate()).toEqual('6 + THREE');
  })
  it('should return "5 + FOUR"', () => {
    let app = new captcha(pattern,1,5,4);
    expect(app.generate()).toEqual('5 + FOUR');
  })
  it('should return "4 + FIVE"', () => {
    let app = new captcha(pattern,1,4,5);
    expect(app.generate()).toEqual('4 + FIVE');
  })
  it('should return "3 + SIX"', () => {
    let app = new captcha(pattern,1,6,3);
    expect(app.generate()).toEqual('3 - SIX');
  })
  it('should return "2 + SEVEN"', () => {
    let app = new captcha(pattern,1,2,7);
    expect(app.generate()).toEqual('2 + SEVEN');
  })
  it('should return "1 + EIGHT"', () => {
    let app = new captcha(pattern,2,1,8);
    expect(app.generate()).toEqual('1 + EIGHT');
  })
  it('should return "0 + NINE"', () => {
    let app = new captcha(pattern,1,0,9);
    expect(app.generate()).toEqual('0 + NINE');
  })
})
  
//----------------------------------------------------------------------------------------------
  describe('Pattern 2', () =>{
    const pattern = 2;
    it('should return "ZERO + 9"', () => {
      let app = new captcha(pattern,1,0,9);
      expect(app.generate()).toEqual('ZERO + 9');
    })
    it('should return "ONE + 8"', () => {
      let app = new captcha(pattern,1,1,8);
      expect(app.generate()).toEqual('ONE + 8');
    })
    it('should return "TWO + 7"', () => {
      let app = new captcha(pattern,1,2,7);
      expect(app.generate()).toEqual('TWO + 7');
    })
    it('should return "THREE + 6"', () => {
      let app = new captcha(pattern,1,3,6);
      expect(app.generate()).toEqual('THREE + 6');
    })
    it('should return "FOUR + 5"', () => {
      let app = new captcha(pattern,1,4,5);
      expect(app.generate()).toEqual('FOUR + 5');
    })
    it('should return "FIVE + 4"', () => {
      let app = new captcha(pattern,1,5,4);
      expect(app.generate()).toEqual('FIVE + 4');
    })
    it('should return "SIX - 3"', () => {
      let app = new captcha(pattern,2,6,3);
      expect(app.generate()).toEqual('SIX - 3');
    })
    it('should return "SEVEN - 2"', () => {
      let app = new captcha(pattern,2,7,2);
      expect(app.generate()).toEqual('SEVEN - 2');
    })
    it('should return "EIGHT - 1"', () => {
      let app = new captcha(pattern,2,8,1);
      expect(app.generate()).toEqual('EIGHT - 1');
    })
    it('should return "NINE - 0"', () => {
      let app = new captcha(pattern,2,9,0);
      expect(app.generate()).toEqual('NINE - 0');
    })
  })
})
