const sum = (_1,_2) => {
    return _1 + _2;
};

console.log(sum(5, 5));

const mas = Array(5).fill('jojo').map((_, _1) => _1);

mas.forEach(e => console.log(e));

console.log('Длинна:', mas.length);

mas.forEach((_1, _2) => {
    if (_2 % 2 === 0) {
        console.log('index', _1);
    }
});
  
mas.forEach((_1) => {
    if (_1 % 2 === 0) {
        console.log('item', _1);
    }
  });
 
mas.forEach((_1,_2) => {
    if (_1 === 0) {
        console.log('index', _2)
    }
  });
  
let count = mas.reduce((_1,_2) => {
    return _2 === 0 ? _1 + 1: _1;
}, 0);

console.log('Количество нулевых элементов: ', count);