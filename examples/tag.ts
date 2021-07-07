const tag: unique symbol = Symbol('tag');

export type Tag<Name extends string> = {
    [tag]: Name;
};
