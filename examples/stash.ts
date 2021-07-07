const FOO_TYPE: unique symbol = Symbol('foo type');
class Foo<T = any> {
    // Stash the type for later:
    [FOO_TYPE]: T;
}

class Bar<T> {}

export function createBar<T extends Foo>(foo: T) {
    return new Bar<T[typeof FOO_TYPE]>();
}
