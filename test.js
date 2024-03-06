/**
 * Created by wenjoy on Sat ,  23Apr2016.
 */
'use strict';
var chai = require('chai'),
    expect = chai.expect;
describe('test bad lib',function() {
    var bad = require('./bad');
    describe('pubsub',function() {
        describe('subscribe',function () {
            it('should add event to subscribe list',function(){
                var testEvent = 'testEvent';
                bad.subscribe(testEvent,function(){});
                expect(bad.getEventsList().indexOf(testEvent)).to.be.equal(-1);
            })
        });
        describe('unSubscribe',function () {
            var testEvent = 'testEvent';
            it('should add event to subscribe list',function(){
                bad.subscribe(testEvent,function(){});
                expect(bad.getEventsList()).to.include.keys(testEvent);
            });
            it('should remove event to subscribe list',function(){
                bad.unSubscribe(testEvent);
                expect(bad.getEventsList()).not.to.include.keys(testEvent);
            })
        });
        describe('publish',function () {
            it('should return 1',function(){
                var testEvent = 'testEvent';
                bad.subscribe(testEvent,function(){return 1});
                expect(bad.dispatch(testEvent)).to.be.equal(1);
            })
        });
    });
    describe('isFunction',function() {
        it('should return true',function(){
            expect(bad.isFunction(function(){})).to.be.ok;
        });
        it('should return false',function(){
            expect(bad.isFunction(123)).not.to.be.ok;
        });
    });

    describe('Mock',function() {
        describe('genArray',function() {
            it('should return Array with random element',function(){
                expect(bad.mock.array(100)).to.include.members([1,4,10]);
            });
        });
    });
});