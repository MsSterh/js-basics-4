var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  // Spy function takes an object and a method and starts spying on method calls.
  // It knows how many times it was called and with what arguments.
  // So Spy function returns an object with two methods: count and args.
  //
  // * count returns number of method calls
  // * args returns an array of arrays of arguments
  var init_method = target[method];
  var obj = {
    count: 0,
    args: []
  };

  target[method] = function() {
    obj.count++;
    var arg = [];
    for(var i in arguments) {
      arguments.hasOwnProperty(i) && arg.push(arguments[i]);
    }
    obj.args.push(arg);
    return init_method.apply(this, arguments);
  }

  return obj
}

module.exports = Spy
