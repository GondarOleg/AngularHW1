
function f(x) {
    [a,b,c] = [x[0], x[1], x.length === 2 ? false : x[2]];
    console.log(a, b, c);
}



x = [1,2];
f(x);
x = [1,2,3];
f(x);





