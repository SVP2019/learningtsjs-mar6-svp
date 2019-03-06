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
        describe('tuples', () => {
            it('making the case', () => {
                //public string FormatName(string first, string last) {}
                interface NameResult {
                    fullname: string;
                    numberOfLetters: number;
                }
                function formatName(first: string, last: string) {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullname: fullName,
                        numberOfLetters: fullName.length
                    }
                }
                const result = formatName('Han', 'Solo');
                expect(result.fullname).toBe("Solo, Han");
                expect(result.numberOfLetters).toBe(9);
            });
            it('the syntax', () => {
                let warren: [string, string, number]; //tuple
                warren = ['Warren', 'Ellis', 56];

                //let first = warren[0];
                //let age=warren[2];
                let [first, , age] = warren; //does the same thing as commented code above
                expect(first).toBe('Warren');
                expect(age).toBe(56);

            });
            it('using a tuple', () => {
                type FormatNameResult = [string, number];
                type NameInput = [string, string];
                function formatName(input: NameInput): FormatNameResult {
                    const [first, last] = input;
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }
                const [name, len] = formatName(['Han', 'Solo']);
                expect(name).toBe('Solo, Han');
                expect(len).toBe(9);
            });
            it('using destructuring on an array', () => {
                const friends = ['Reggie', 'Susan', 'Neil'];
                const [first, , last] = friends;
                expect(first).toBe('Reggie');
                const [firstFriend, ...restOfMyFriends] = friends; //rest operator
                expect(firstFriend).toBe('Reggie');
                expect(restOfMyFriends).toEqual(['Susan', 'Neil']);
            });
            it('using the spread operator', () => {
                const friends = ['Susan', 'Neil'];
                const newFriends = ['Reggie', ...friends]; //spread operator
                expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']); //toBe compares arrays in memory, and they are not equal
            });
        });
    });
});