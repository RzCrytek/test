exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let indx = -1;

    arr.forEach((elm, i) => {
      if (elm == item)  indx = i; 
    });

    return indx;
  },

  sum: function(arr) {
    let total = arr.reduce((a, b) => a + b );
    return total;
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    let indx = arr.length;
    if(indx !== -1) arr[indx]=item;
    
    return arr;
  },

  truncate: function(arr) {
    let indx = arr.length - 1; 
    arr.splice(indx, 1);
    
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let cant=0;
    arr.forEach(elm => {
      if (elm === item) cant++
    });

    return cant;
  },

  duplicates: function(arr) {    
    let duplicate = [];
    const temp = [...arr].sort();

    for (let i = 0; i < temp.length; i++) {
      if (temp[i+1] === temp[i]) {
        duplicate.push(temp[i]);
      }
    }

    console.log(duplicate);

    return duplicate;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
