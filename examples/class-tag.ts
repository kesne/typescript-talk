import { Tag } from './tag';

type Name = string & Tag<'name'>;
type Email = string & Tag<'email'>;
type Age = number & Tag<'age'>;

export class User {
    name: Name;
    email: Email;
    age: Age;

    constructor(name: string, email: string, age: number) {
        this.name = name as Name;
        this.email = email as Email;
        this.age = age as Age;
    }
}
