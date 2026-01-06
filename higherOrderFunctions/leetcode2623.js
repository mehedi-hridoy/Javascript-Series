/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // 1. Initialize the cache OUTSIDE the returned function so it persists.
    // Using 'new Map()' is often faster than a plain object for frequent additions/lookups.
    const cache = new Map();
    
    return function(...args) {
        // 2. Generate a unique key. 
        // For this specific LeetCode problem (numbers), 'join' is faster than JSON.stringify
        const key = args.join(',');
        
        // 3. Check if key exists in cache
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // 4. If not, execute the function, save result, and return it
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}