// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      results.push(array[i][j]);
    }
  }
  return results;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  let allElementsPass = true;
  for (let i = 0; i < array.length; i++) {
    // once allElementsPass is set to false, it'll never turn to true
    allElementsPass = test(array[i]) && allElementsPass;
    
    // after the first false, don't bother testing the rest of the array
    if (!allElementsPass) {
      return false;
    }
  }
  return allElementsPass;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // taken from Eloquent Javascript
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  // taken from Eloquent Javascript
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;           
  }

  // modified from Eloquent Javascript. filters out all UTF-16 scripts whose direction is "none" cause they're boring
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    // instead of returning script.name, we're looking at script.direction
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  // scripts is an array of objects describing characterScripts with the properties count and name, where name is the direction the text is read

  // if the array is 0, that means that all scripts in the text were boring left to right scripts
  if (scripts.length === 0) {
    return "ltr";
  } 
  // comparing the count property of each script object of the array, the script with the higher count is more likely to not have ltr, so check its direction
  return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
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
