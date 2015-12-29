// method missing using proxies
var target = { name: "My name", tarfn: function() { return 'be a callable'; } };
var proxy_handler = {
    get: function(receiver, prop_name) {
        // use receiver to access the original object
        if (receiver.hasOwnProperty(prop_name)) {
            return receiver[prop_name];
        } else if (prop_name.endsWith('fn')) {
            return function() { return `${prop_name}` ;};
        } else {
            return `${receiver.name} ${prop_name}` ;
        }
    }
};

var proxy_object = new Proxy(target, proxy_handler);
console.log(proxy_object.no_such_property);
console.log(proxy_object.name);
target.name = "My Name changed";
console.log(proxy_object.no_such_property);
console.log(proxy_object.tarfn());
console.log(proxy_object.unknownfn());
