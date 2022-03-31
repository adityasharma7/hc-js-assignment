Q. Differences between JavaScript Objects and Maps:
Answer:
                        Object      	                Map
Iterable	Not directly iterable	                Directly iterable
Size	    Do not have a size property	            Have a size property
Key Types	Keys must be Strings (or Symbols)	    Keys can be any datatype
Key Order	Keys are not well ordered	            Keys are ordered by insertion
Defaults	Have default keys	                    Do not have default keys
    
>Object- follows the same concept as that of map i.e. using key-value pair for storing data. But there are slight differences which makes map a better performer in certain situations.

>Map- is a data structure which helps in storing the data in the form of pairs. The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.

>Key differences

1. The Map is an instance of an object but the vice-versa is not true.
var map = new Map();
var obj = new Object();
console.log(obj instanceof Map);   // false
console.log(map instanceof Object);  // true



2. In Object, the data-type of the key-field is restricted to strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, an object)
var map = new Map();//Empty
map.set(1,'1');
map.set('one', 1);
map.set('{}', {name:'Hello, World!'});
map.set(12.3, 12.3)
map.set([12],[12345])

for(let [key,value] of map.entries())
  console.log(key+'---'+value)


3. In the Map, the original order of elements is preserved. This is not true in case of objects.
let obj ={
  1:'1',
  'one':1,
  '{}': {name:'Hello world'},
  12.3:12.3,
  [12]:[100]
}
console.log(obj)
     