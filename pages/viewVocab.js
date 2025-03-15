import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  // Ensure obj properties exist, otherwise use a default value
  const name = obj && obj.name ? obj.name : 'No Name Provided';
  const category = obj && obj.category ? obj.category : 'No Category';
  const definition = obj && obj.def ? obj.def : 'No Definition Available';
  const timeSubmit = obj && obj.timeSubmit ? obj.timeSubmit : 'No Timestamp';
  const firebaseKey = obj && obj.firebaseKey ? obj.firebaseKey : '';

  // Create the vocabulary card HTML
  const domString = `
  <div class="card vocab-card">
    <div class="card-body"> 
      <h4 class="view-card-title">${name}</h4>
      <h5 class="view-card-text category-badge">${category}</h5>
      <p class="view-card-text2">${definition}</p>
      <h6 class="view-card-text3">${timeSubmit}</h6>

      <!-- Action Buttons -->
      <div class="vocab-actions">
        <i class="fas fa-eye btn action-btn view-btn" id="view-vocab-btn--${firebaseKey}" title="View"></i>
        <i class="fas fa-edit btn action-btn edit-btn" id="edit-vocab-btn--${firebaseKey}" title="Edit"></i>
        <i class="fas fa-trash btn action-btn delete-btn" id="delete-vocab--${firebaseKey}" title="Delete"></i> 
      </div>
    </div>
  </div>`;

  // Render the HTML inside the main container
  renderToDom('#main-container', domString);
};

export default viewVocab;
