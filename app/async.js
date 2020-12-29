exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(value);
      }, 250);
    });

    return promise;
  },

  manipulateRemoteData: function(url) {
    let list = [];

    fetch(url)
    .then(r => r.json())
    .then(r => {
      r.people.forEach(elem => {
        list.push(elem.name);
      });

      console.log('list', list.sort());
      console.log(list.sort().length);

      return list.sort();
    })
  }
};
