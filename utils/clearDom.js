const clearDom = () => {
  if (document.querySelector('#store')) document.querySelector('#store').innerHTML = '';
  if (document.querySelector('#add-button')) document.querySelector('#add-button').innerHTML = '';
  if (document.querySelector('#form-container')) document.querySelector('#form-container').innerHTML = '';
  if (document.querySelector('#view')) document.querySelector('#view').innerHTML = '';
};

export default clearDom;
