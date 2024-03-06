/**
 * Created by wenjoy on Sat ,  23Apr2016.
 */
module.exports = new Bad();
function Bad () {
    this.events_ = [];
    this.mock = {
        array:function(len) {
            'use strict';
            len = len||10;
            let array = new Array(len);
            for (var i = 0; i < array.length; i++) {
                array[i]=~~(Math.random()*10);
            }
            return array;
        }
    };
}
Bad.prototype.getEventsList = function () {
    return this.events_;
};
Bad.prototype.subscribe =  function (name,callback){
    if(!this.isFunction(callback)) throw new Error('not a valid callback function');
    this.events_[name] = callback;
};
Bad.prototype.unSubscribe =  function (name){
    delete this.events_[name];
};
Bad.prototype.dispatch =  function (name){
    if(!this.events_[name]) return false;
    return this.events_[name]();
};

Bad.prototype.isFunction = function (target) {
    if(typeof target === 'function') return true;
};