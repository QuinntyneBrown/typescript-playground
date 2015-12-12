class Test {

    constructor() {
        let a = 0;

        if (a == 0) {

        }
    }

    @nonenumerable
    getAnswer() {
        return 42;
    }

    get message() { return `hello`; }

} 

function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
} 
