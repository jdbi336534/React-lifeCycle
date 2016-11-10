var indexlist = require('./index-list');
var indexlistrefresh = require('./index-list-refresh');
var indexlistmore = require('./index-list-more');
var indexlistwaterfall = require('./index-list-waterfall');
var indexlistcss3waterfall = require('./index-list-css3waterfall');
var detail = require('./detail');

module.exports = function() {
    return {
        "list": indexlist,
        "listrefresh": indexlistrefresh,
        "listmore": indexlistmore,
        "listwaterfall": indexlistwaterfall,
        "listcss3waterfall": indexlistcss3waterfall,
        "detail": detail
    }
}
