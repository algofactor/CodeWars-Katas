// Challenge: To remove spaces with a string and return the string with all its characters all joined together without spaces
// To do this, the split method is called on the string with the parameter of ' ' which is a space, this space is the criteria for splitting the string.
// This condition parameter set causes the elimination/removal of the spaces within the string
// The join method is then called to join the each array element without spaces.

function noSpace(x){
    return x.split(' ').join('')
}
  
// Alternative solution using a One-liner
// const noSpace = x => x.split(' ').join('');