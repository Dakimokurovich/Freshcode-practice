let div = document.createElement('div');
let jiEst = true;
div.onclick = () => {
  div.style.backgroundColor = jiEst ? 'blue' : 'yellow';
  jiEst = !jiEst;
};