let vishaya = (any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(any), 1000);
    });
  };
let num = vishaya(56);
let str = vishaya('jojo');
let bol = vishaya(true);
let sym = vishaya(Symbol('j'));
let _null = vishaya(null);
let _undefinded = vishaya(undefined);
let _obj = vishaya({name: 'Karasik', type: 'Cat'});
let asyncLog = async (promise) => {
  const _ = await promise;
  console.log(typeof _, _);
};

asyncLog(num);