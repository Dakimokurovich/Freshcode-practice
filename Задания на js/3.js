const verblud = (_s) => {
    return _s.split(' ').map((_1, _i) => {
      if (_i === 0) return _1.toLowerCase();
      return _1[0].toUpperCase() + _1.split('').slice(1).join('').toLowerCase();
    }).join('');
};

console.log(verblud('hello world'));