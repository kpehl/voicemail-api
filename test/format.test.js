const sinon = require('sinon');

const expect = require('chai').expect;

const { formatDate, formatDuration, formatText, formatPhone } = require('../utils/format');

sinon.useFakeTimers(new Date(2020,11,11,11));

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
    describe('Phone', () => {
        it('should format phone numbers with hyphens', () => {
            const num1 = 15555555555;
            const num2 = 5555555555;
            expect(formatPhone(num1)).to.equal('1-555-555-5555');
            expect(formatPhone(num2)).to.equal('555-555-5555');
        });
        it('should not hyphenate shorter numbers', () => {
            const num = 555555;
            expect(formatPhone(num)).to.be.oneOf([555555,'555555']);
        });
    });
    describe('Duration', () => {
        it('should display shorter times in minutes/seconds', () => {
            const duration1 = 10000;
            const duration2 = 600000;
            expect(formatDuration(duration1)).to.equal('00:10');
            expect(formatDuration(duration2)).to.equal('10:00');
        });
        it('should include hours in longer times', () => {
            const duration1 = 3600000;
            const duration2 = 7201000;
            expect(formatDuration(duration1)).to.equal('01:00:00');
            expect(formatDuration(duration2)).to.equal('02:00:01');            
        });
    });
    describe('Time', () => {
        it('should display a same-day message in hours', () => {
            const date1 = new Date(2020,11,11,10).getTime();
            const date2 = new Date(2020,11,11,9).getTime();
            expect(formatDate(date1)).to.equal('1 hour ago');
            expect(formatDate(date2)).to.equal('2 hours ago');
        });
        it('should display a same-week message in days', () => {
            const date1 = new Date(2020,11,10,10).getTime();
            const date2 = new Date(2020,11,9,9).getTime();
            expect(formatDate(date1)).to.equal('1 day ago');
            expect(formatDate(date2)).to.equal('2 days ago');
        });
        it('should display full date if older than 1 week', () => {
            const date1 = new Date(2020,11,1,10).getTime();
            const date2 = new Date(2019,0,10,9).getTime();
            expect(formatDate(date1)).to.equal('December 1, 2020');
            expect(formatDate(date2)).to.equal('January 10, 2019');
        });      
    });
});