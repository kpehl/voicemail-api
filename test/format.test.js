const expect = require('chai').expect;

const { formatDate, formatDuration, formatText, formatPhone } = require('../utils/format');

describe('Formatting', () => {
    // add test(s) here in describe blocks
    describe('Text', () => {
        // add conversion(s) to be tested here in it blocks
        it('should convert email addresses to links', () => {
            // add assertion(s) here using expect
            const text = 'abcd test@gmail.com efgh';
            expect(formatText(text)).to.equal(
              'abcd <a href="mailto:test@gmail.com">test@gmail.com</a> efgh'
            );
        });
        it('should not convert incomplete emails', () => {
            const text1 = 'abcd test@gmail efgh';
            const text2 = 'abcd test@gmail.';
            expect(formatText(text1)).to.equal('abcd test@gmail efgh');
            expect(formatText(text2)).to.equal('abcd test@gmail.');
        });
    });
});