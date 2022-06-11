const zeros = (_1, _2) => {
    let bolshe = _1 >= 0;
    let strDlina = String(_1).length + (bolshe ? 0 : -1);
    
    return (bolshe ? '' : '-') + Array(_2 - strDlina).fill('jojo').map(_ => 0).join('') + Math.abs(_1);
};

console.log(zeros(-3, 4));