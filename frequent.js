var array = [13,2,13,1,4,4,5,4,7,2,13,4,13,13,13,9,0,2,4];
  
obj = {};
let item;
let m = 0;
for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) obj[array[i]] = 1;
    else obj[array[i]]++;
}
  
for (const i in obj) {
    if (m < obj[i]) {
        m = obj[i];
        item = i;
    }
}
  
console.log("The most frequent element is: " + item);