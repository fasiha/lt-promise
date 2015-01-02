function getOnline(url) {
    return new Promise(function(fulfill, reject) {
        d3.xhr(url, 'text/plain', function(err, req) {
            if (err) {
                reject(err);
            } else {
                fulfill(req.responseText);
            }
        });
    })
}

function testAll(url1, url2) {
    return Promise.all([ getOnline(url1), getOnline(url2) ])
        .then(function(multiple) {
        console.log('Result', multiple);
        d3.select('body').append('p').text('Success!');
    });
};

testAll('foo', 'bar');