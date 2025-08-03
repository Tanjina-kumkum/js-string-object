const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['bijoy dibos', 'book fair', 'science fair'],
    unique: { color: 'blue', result: {
        GPA: '5', merit: 'top'
    }}
};

console.log(college);
college.events[1]= '16 december';
console.log(college.events);
delete college.class
console.log(college);
college.unique.merit= 'top top most';
console.log(college.unique);
console.log(college);




