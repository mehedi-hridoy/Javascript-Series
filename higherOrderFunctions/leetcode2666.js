/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false; // 1. State variable tracked via closure
    
    return function(...args){
        if (!hasBeenCalled) {
            hasBeenCalled = true; // 2. Mark as called immediately
            // 3. Use .apply() to preserve 'this' context, though fn(...args) often works too
            return fn.apply(this, args); 
        }
        // 4. Implicitly returns undefined if the condition fails
        return undefined;
    }
};