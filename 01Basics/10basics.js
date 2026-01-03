/**
 * Returns a function that calculates factorial, but caches the results.
 */
function makeMemoizedFactorial() {
    // 1. This 'cache' object lives inside the closure.
    // It is hidden from the outside world but accessible to the inner function.
    const cache = {}; 

    // 2. We return the actual recursive function
    return function factorial(n) {
        // Base case
        if (n <= 1) return 1;

        // Check if we already did the work for this number
        if (cache[n]) {
            console.log(`Fetching ${n}! from cache...`);
            return cache[n];
        }

        // If not in cache, calculate it recursively
        console.log(`Calculating ${n}! for the first time...`);
        const result = n * factorial(n - 1);

        // Store the result in the cache for future use
        cache[n] = result;

        return result;
    };
}

// --- Usage ---

const myFactorial = makeMemoizedFactorial();

console.log("--- First Run (5) ---");
console.log(myFactorial(5)); 
// Output: Calculates 5, 4, 3, 2. Returns 120.

console.log("\n--- Second Run (5) ---");
console.log(myFactorial(5)); 
// Output: "Fetching 5! from cache..." Returns 120 immediately.

console.log("\n--- Third Run (6) ---");
console.log(myFactorial(6)); 
// Output: Calculates 6 * factorial(5).
// It finds 5 is ALREADY in cache, so it stops recursing!
// Returns 720.