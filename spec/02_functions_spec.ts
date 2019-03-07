//import { formatName as fn, PI } from "../src/formatters";
import * as formatters from "../src/formatters";
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
    describe('higher order functions', () => {
        /*
        1. takes one or more functions as arguments (i.e. procedural parameters), 
        2. (and/or) returns a functions as its result.
        */
        it('takes a function as an argument', () => {
            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = formatters.wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            const wrapInCarots = formatters.wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');
        });
    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('taking a look at every member of an array', () => {
            numbers.forEach((x) => console.log(x));
        });
        describe('methods that return new arrays', () => {
            it('has a filter', () => {
                //const evens = numbers.filter(n => n % 2 === 0); <= same as below
                function isEven(n: number): boolean {
                    return n % 2 === 0;
                }
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
            it('map', () => {
                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });
            it('do a practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];

                const lowMileageVehicles = vehicles //Vehilces[{},{},{}]
                    .filter(v => v.mileage < 100_000) //Vehicles[{},{}]
                    .map(v => v.makeAndModel); //String{} ["",""]

                expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);


            });
            describe('methods that produce a single (scalar) value', () => {
                it('hasmethods that check the membership of an array', () => {
                    expect(numbers.some(n => n > 8)).toBe(true);
                    expect(numbers.every(n => n % 2 === 0)).toBe(false);
                });
                it('has reduce', () => {
                    expect(numbers.reduce((s, n) => s + n)).toBe(45);
                    expect(numbers.reduce((s, n) => s + n, 100)).toBe(145);
                });
            });
        });
        describe('a demo', () => {
            it('using reduce for something "real"', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];
                interface HighestMileageVEhicle {
                    vin: string;
                    mileage: number;
                }
                const seed: HighestMileageVEhicle = {
                    vin: null,
                    mileage: -1
                };
                const answer = vehicles.reduce((p, n) => {
                    if (n.mileage > p.mileage) {
                        return {
                            vin: n.vin,
                            mileage: n.mileage
                        };
                    } else {
                        return p;
                    }
                }, seed);
                expect(answer).toEqual({
                    vin: '9999',
                    mileage: 182000
                })
            });
        });
    });
});
