function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
    return y();
}

const z = x();
// the function x has finished executing, but the inner function y still has access to variable a

z(); // output : 10
// because of closure, the inner function y retains access to the scope of x even after x has completed execution.
z(); // output : 10 anytime we call z, it will log 10

// mdn web docs in the best place to learn more about closures