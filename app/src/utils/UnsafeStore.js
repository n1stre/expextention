const UnsafeStore = new Map();

/*

Map.prototype.clear()
Removes all key/value pairs from the Map object.

Map.prototype.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.

Map.prototype.entries()
Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

Map.prototype.forEach(callbackFn[, thisArg])
Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

Map.prototype.get(key)
Returns the value associated to the key, or undefined if there is none.

Map.prototype.has(key)
Returns a boolean asserting whether a value has been associated to the key in the Map object or not.

Map.prototype.keys()
Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

Map.prototype.set(key, value)
Sets the value for the key in the Map object. Returns the Map object.

Map.prototype.values()
Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
Map.prototype[@@iterator]()
Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.


*/



export default UnsafeStore;