type Name = string & { __tag: 'name' };
let myName = 'Jordan' as Name;
myName = 'Not Jordan';
