function example<T extends { [key: string]: V }, V extends string, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

// Returns "world"
example(
    {
        hello: 'world'
    },
    'hello'
);
