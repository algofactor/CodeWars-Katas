/**************************
  PREP
  Challenge: To play rock papaer scissors and return the winner;
  P - two strings;
  R - return winner of the game;
  E - ('rock', 'scissors'), rock;
      ('scissors', 'paper'), scissors;
      ('rock', 'paper'), paper;
      ('rock', 'rock'), 'Draw!';
  P - check who is the winner based on what they play;
      return the winner after check or draw if they draw;
**************************/

const rps = (p1, p2) => {
    const getMsg = (n) => `Player ${n} won!`;
    if(p1 === p2){
      return 'Draw!';
    }else if( 
      (p1==='rock') && (p2==='scissors') ||
      (p1==='scissors') && (p2==='paper') ||
      (p1==='paper') && (p2==='rock')
    ){
      return getMsg(1);
    }else if( 
      (p2==='rock') && (p1==='scissors') ||
      (p2==='scissors') && (p1==='paper') ||
      (p2==='paper') && (p1==='rock')
    ){
      return getMsg(2);
    }
};