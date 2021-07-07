const CHAINED: unique symbol = Symbol('chained');
export class Lodash<T extends object, Chained extends boolean = false> {
    [CHAINED]: Chained;

    constructor(private obj: T) {}

    partial<K extends keyof T>(...keys: K[]): Lodash<Pick<T, K>, true> {
        // @ts-ignore
        return;
    }
}

function logDash(lodash: Lodash<{ foo: any }, any>) {
    console.log(lodash);
}

logDash(new Lodash({ foo: 'bar', bar: 'baz' }));
logDash(new Lodash({ foo: 'bar', bar: 'baz' }).partial('foo'));
logDash(new Lodash({ foo: 'bar', bar: 'baz' }).partial('bar'));

function logBareDash(lodash: Lodash<any, false>) {
    console.log(lodash);
}

logBareDash(new Lodash({ foo: 'bar', bar: 'baz' }));
logBareDash(new Lodash({ foo: 'bar', bar: 'baz' }).partial('foo'));
logBareDash(new Lodash({ foo: 'bar', bar: 'baz' }).partial('bar'));
