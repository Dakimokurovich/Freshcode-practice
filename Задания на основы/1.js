const sum = (_1, _2) => {
    let result = 0;
    for (let i = _1; i <= _2; i++) {
      result += i;
    }
    return console.log(result);
};

sum(2, 5);