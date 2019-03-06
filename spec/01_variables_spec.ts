describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;
            interface Food {
                name: string;
                calories: number;
            }
            let z: number | string | Food; // Union type
            expect(x).toBe(12);
            x = 13;
            expect(x).toBe(13);
            let y;
            y = 18;
            expect(y).toBe(18);
            y = 'Tacos!';
            expect(y).toBe('Tacos!');
        });
        it('using the const keyword', () => {
            const MIN_AGE = 13;
            //MIN_AGE = 32;
            const FAVORITE_NUMBERS = [9, 20, 108];
            FAVORITE_NUMBERS[0] = 10;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            };

            ACTOR.role = 'Chewie';
        });
        it('still has var but it is bad and you should feel bad if you use it', () => {
            const age = 22;
            if (age >= 21) {
                var oldEnough = true; //shouldn't use 'var', since it is not block scoped
                //let oldEnough = true;  block scoped
            }
            expect(oldEnough).toBe(true);
        });
    });
    describe('literals', () => {
        it('has numberic literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_001_800; //cannot use commas, but can use underscired to read it easier
            let hexNumber = 0xff; //hexadecimal
            let binary = 0b101010; //binary
            let octal = 0o744; //octal
        });
        it('has string literals', () => {
            let firstString = 'Hello, World';
            expect(firstString).toBe("Hello, World");
            let story = "He said \"Oh My gosh\"";
            let story2 = 'He said "Oh My gosh"';
            let author = "Flanner O'Connel";

            expect("hi").toBe(`hi`);

            let lifeStory = `It happened too quickly
            There I was in my room, and then
            I wasn't`;

            let name = 'Jeff', age = 49;
            //let info='His name is '+ name + ' and he is ' + age+ ' years old';
            let info = `His name is ${name} and he is ${age} years old`; //same string as above, but easier
            console.log(info);
        });
        it('has array literals', () => {
            const things = []; //array is not typed by default
            things[0] = 'Hello';
            things[1] = 42;
            things[989] = 'You went this far?';
            things[990] = things;
            things[991] = ['Dog', 'Cat', 'Mouse'];
            expect(things[2]).toBeUndefined();

            const friends: (string | number)[] = [];
            friends[0] = 'David';
            friends[1] = 'Stacey';
            friends[42] = 42;

            const luckyNumbers: Array<number | string> = [];
        });
    });
});