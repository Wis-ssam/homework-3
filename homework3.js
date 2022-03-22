// Exercice 1:
// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.


const object1 = {
    name: 'wissam',
    age: 19
};

const object2 = {
    name : 'wissam',
    age : 19
};

const student1 = {
    name : 'wissam',
    age: 19
};

const student2 = {
    prog_lang :'js',
    age: 19
};


function compare(object1,object2){
    if(Object.keys(object1).length!==Object.keys(object2).length)
        return false;
    
    for(let i in object1){
        if(object1[i] !== object2[i])
            return false;
        
    }
    return true;
}

console.log(compare(object1,object2));
console.log(compare(student1,student2));

// Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 

var array1=[1, 2, 3];
var array2=[100, 2, 1, 10];

var result=[];
let k=0;
function difference (array1,array2) {
    let L1=array1.length;
    let L2=array2.length;

    for(let i=0 ; i<L1 ; i++){
        for(let j=0 ; j<L2 ; j++){
            if(array1[i]===array2[j]){
                result.push(array1[i]);
            }
        }
    }
    return result;

}



console.log(difference(array1,array2));


