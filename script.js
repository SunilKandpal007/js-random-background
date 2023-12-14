const btn = document.getElementById('colorBtn');

const changeColor = () => {
    //let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = `#${hexVal}`;
  document.getElementById('colorCode').innerText = `Hex Color Code: #${hexVal}`;
  
  //console.log(`Hex Color Code: #${hexVal}`);
};

btn.addEventListener('click', changeColor);
window.addEventListener('load', changeColor);
