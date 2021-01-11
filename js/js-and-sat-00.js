const iterator = function() {
    let state = 0;

    const foo = function() {
        state ++;
    }

    const show = function() {
        console.log('state: ', state);
    }
    const result = { 
        foo: foo,
        show: show,
    }
    return result;
}

const a = iterator();
const b = iterator();

a.foo();
a.foo();
a.foo();
a.show();
b.foo();
b.foo();
b.show();

console.log('a is not b: ', a !== b);