describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            //Named function - you can use it before it is declared
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(2, 2)).toBe(4);

            //Anonymous function - you can only use it after it was declared
            const subtract = function (a: number, b: number) { return a - b; }
            expect(subtract(10, 8)).toBe(2);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(2, 5)).toBe(10);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe!');
                }
                else {
                    return a / b;
                }
            }
            expect(divide(20, 5)).toBe(4);
            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too young";
        });
        it('passing arguments to functions', () => {
            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe("Solo, Han D.");
        });
        it('using rest parameters', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo); //higher order function - function that takes an argument of function, and may return the function
            }
            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 2)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        })
    });
});
});