1. Find the difference between Object and Map.

Map is a part of keyed collection in JavaScript. This means that this data structure holds data in the form of a key along with its corresponding value.

Object is a collection of properties and each property has a key along with a corresponding value.

Does this mean both map and object are similar to one another??
Well, both let us set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects were previously used as Maps. But there are important differences that make using a Map preferable in certain cases.

1.Based on the type of key:

=> JavaScript Map allows you to have have a key-value pair in which the key could be of primitive type, an object or even a function

=> Object, on the other hand allows you to have a key-value pair in which the key can only be of the type String. So, even if you assign a key of type number, it will be converted into a string.

2.Based on the way we can iterate on them:

=> Map is a built-in iterable in JavaScript, which means you can loop over every element in the Map using the forEach loop.

=> Object, on the other hand is not iterable. To loop over every property in the Object, we need to get hold of either entries, keys or values which are returned as arrays and then possibly iterate over them.

3.Based on the way we get the size:

=> You can get the size of a Map easily using the size property available. This returns the total number of entries in the Map.

=> There is no direct method or property to find the size of an Object. The number of properties in an Object must be determined manually.

4.Based on the way you convert them into a JSON string:

=> Since Map is a pure hash table, there is no support for JSON directly. You need to provide your own parser to convert Map into a JSON string.

=> With Objects, you get a direct support to convert them into a JSON string using JSON.stringify().
[Short explanation of JSON at the end]

Other Differences:

=> The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
=> A Map may perform better in scenarios involving frequent addition and removal of key pairs.

