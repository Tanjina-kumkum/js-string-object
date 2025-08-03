const mobile={
    brand: 'samsung',
    color: 'black',
    price: 25000,
    camera: '12mp',
    isNew: true
}
for(let prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
    
}
const keys = Object.keys(mobile);
console.log(keys);
for(let key of keys){
    console.log(key);
    console.log(key, ':', mobile[
        key
    ]);
    
}
const pencil= new Object()
console.log(pencil);
const rubber= Object.create({})
console.log(rubber);


