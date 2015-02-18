function asyncLoad(ids, load, done) {
  // asyncLoad takes an array of identifiers, load function and done function.
  //
  // load function knows how to load stuff. It takes an identifier
  // and a callback function which will be called with load result
  //
  // done function should be called only when all work of loading stuff is done.
  // It takes an array of loaded items
  //
  // * loaded items should be the same order as ids
  // * load should be performed in parallel

  var size = ids.length,
      loaded = new Array(size),
      fn;

  for(var i = 0; i < size; i++) {
    (function(i) {
      fn = function(callback) {
        size--;
        loaded[i] = callback;
        size === 0 && done(loaded);
      }
    })(i);

    load(ids[i], fn)
  }
}

module.exports = asyncLoad;
