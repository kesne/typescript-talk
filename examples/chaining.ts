export class Lodash<T extends object> {
    constructor(private obj: T) {}

    subset<K extends keyof T>(...keys: K[]): Lodash<Pick<T, K>> {
        return new Lodash(
            keys.reduce((acc, key) => ({ ...acc, [key]: this.obj[key] }), {} as Pick<T, K>)
        );
    }

    get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }
}

const obj = new Lodash({
    foo: 'bar',
    bar: 'baz',
    hello: 'world'
});

obj.subset('foo', 'bar').get('hello');
