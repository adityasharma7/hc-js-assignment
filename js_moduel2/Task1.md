
1. Find the difference between Object and Map:

a.Object: objects can only have a number, string, or symbol as a key.
     Map:    We can put any type of data as a Map

b.Object:objects is not ordered and not iterable
  Map:  :A Map is ordered and iterable

c.Checking if a key exists:
Map:
Checking if a key is already in a map is done using the has(key) method.
Example:
gamesMap.has(1);
true
gamesMap.has(3);
false

Object:
On objects, we can use the hasOwnProperty(key) method.

Example:
gamesObj.hasOwnProperty(1);
true
gamesObj.hasOwnProperty(3);
false

D.
Deleting:
Map:
Maps have the delete(key) method for deleting pairs.

Example:
gamesMap.delete(1);

Object:
Example:
On objects, we can use the delete operator.
delete gamesObl[1];

E.
Map & object: It is simple to determine the size of map, whereas the size of an object cannot be determined directly



              