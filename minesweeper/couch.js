// http://bradley-holt.com/2011/07/couchdb-jquery-plugin-reference/

$.couch.urlPrefix = "http://localhost:5984";

$.couch.info({
    success: function(data) {
        console.log(data);
    }
});

$.couch.allDbs({
    success: function(data) {
        console.log(data);
    }
});

var doc = {};
$.couch.db("test").saveDoc(doc, {
    success: function(data) {
        console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});

$.couch.db("test").openDoc("d12ee5ea1df6baa2b06451f44a019ab9", {
    success: function(data) {
        console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});
