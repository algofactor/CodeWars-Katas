/**********************
  Challenge: to give only Santa Claus access to use the sleigh;
  
  parameter is two strings;
  return true or false if the individual has access to use the sleigh;
  ex. => 'Santa Claus', 'Ho Ho Ho!', true;
         'Santa Claus', 'Ho Ho!', false;
         'jhoffner', 'CodeWars', false;
  
  my approach: verify that the name and password strictly equals those that Santa Claus set for the sleigh;
  
**********************/

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!'
};