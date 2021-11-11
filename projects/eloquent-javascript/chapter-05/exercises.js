// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {

  let flattenedArr = arr.reduce(function(flat, current, index, array) {
    return flat.concat(current); // or return [...flat, ...current];
  }, []);
  return flattenedArr;
}


// console.log(flatten([[1, 2, 3], [4], [5, 6]]));
//  => [1, 2, 3, 4, 5, 6];

/*
[].concat([1, 2, 3]) => [1, 2, 3]
[1, 2, 3] = [1, 2, 3, 4]
[1, 2, 3, 4] = [1, 2, 3, 4, 5, 6]

*/


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop() {

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every() {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
