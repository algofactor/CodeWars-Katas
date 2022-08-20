var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
        f.forEach(e => this._friends.push(e));
      }
    }
    return person;
}