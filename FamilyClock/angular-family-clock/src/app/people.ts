export const Family= [
  {name:"Tom", dob:"06/01/1965", sex:"male", },
  {name:"Jasmine", dob:"04/01/1964", sex:"female"},
  {name:"Luis", dob:"06/01/1990", sex:"male"},
  {name:"Masako", dob:"04/01/1993", sex:"female"},
  {name:"Daniel", dob:"06/01/1995", sex:"male"},
];

export class Person{
  name: string;
  dob: string;
  sex: 'male' | 'female';
}
