describe('writing basic specs', () => {
    it('we can add two numbers', () => {
        //Given (Arrange)
        const a = 10, b = 20;
        //When (Act)
        const answer = a + b;
        //Then (assert)
        expect(answer).toBe(30);
    });
});