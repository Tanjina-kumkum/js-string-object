const teacherInfo= {
    name: 'Tanjina',
    age: 32,
    salary: 25000,
    isMarried: false
}
let boyos = 'age'
teacherInfo[boyos]= 50;
console.log(teacherInfo);
let income= 'salary';
teacherInfo[income] = 30000;
console.log(teacherInfo);
teacherInfo.isMarried = true;
console.log(teacherInfo);

