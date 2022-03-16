# Difference Between Object and Map:

# 1 Object
- Object is a collection of properties and each property has a key along with a corresponding value.
- It allows you to have a key-value pair in which the key can only be of the type String. So, even if you assign a key of type number, it will be converted into a string.
- It is not iterable. To loop over every property in the Object, we need to get hold of either entries, keys or values which are returned as arrays and then possibly iterate over them.
- There is no direct method or property to find the size of an Object. The number of properties in an Object must be determined manually.


# MAP
- Map is a part of keyed collection in JavaScript. 
- This means that this data structure holds data in the form of a key along with its corresponding value.
-On the other handJavaScript Map allows you to have have a key-value pair in which the key could be of primitive type, an object or even a function.
- On the other Map is a built-in iterable in JavaScript, which means you can loop over every element in the Map using the forEach loop.
- You can get the size of a Map easily using the size property available. This returns the total number of entries in the Map.
