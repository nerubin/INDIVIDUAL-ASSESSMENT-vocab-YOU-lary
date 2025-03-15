import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    // Ensure item properties exist to prevent "undefined" values
    const name = item.name ? item.name : 'No Name Provided';
    const category = item.category ? item.category : 'No Category';
    const definition = item.def ? item.def : 'No Definition Available';
    const timeSubmit = item.timeSubmit ? item.timeSubmit : 'No Timestamp';
    const firebaseKey = item.firebaseKey ? item.firebaseKey : '';

    domString += `
      <div class="card">
        <div style="width: 100%; height:100%;" class="card-body">
          <h4 style="border-bottom: 1px; height: 35px;" class="card-title">${name}</h4>
          <h5 class="card-text">${category}</h5>
          <p class="card-text2" style="min-height: 215px">${definition}</p>
          <h6 class="card-text3">${timeSubmit}</h6>
          <a class="btn fas view-btn" id="view-vocab-btn--${firebaseKey}">View</a>
          <i class="fas btn edit-btn" id="edit-vocab-btn--${firebaseKey}">Edit</i>
          <i class="fas btn delete-btn" id="delete-vocab--${firebaseKey}">Delete</i>
        </div>
      </div>`;
  });

  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
