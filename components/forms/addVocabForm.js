import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom(); // ✅ Clears previous content

  // ✅ Create #form-container if it doesn't exist
  let formContainer = document.querySelector('#form-container');
  if (!formContainer) {
    formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    document.querySelector('#main-container').appendChild(formContainer);
  }

  const formId = obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab';

  const domString = `
    <div class="vocab-form-container">
      <form id="${formId}" class="vocab-form">
        <h2 class="form-title">${obj.firebaseKey ? 'Edit Vocabulary' : 'Add New Vocabulary'}</h2>

        <!-- Vocabulary Name Input -->
        <div class="form-group">
          <label for="name">Vocabulary Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter Vocab Name" value="${obj.name || ''}" required autocomplete="off">
        </div>

        <!-- Definition Input -->
        <div class="form-group">
          <label for="def">Definition</label>
          <textarea class="form-control" id="def" placeholder="Enter Vocabulary Definition" rows="4" autocomplete="off">${obj.def || ''}</textarea>
        </div>

        <!-- Category Dropdown -->
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" class="form-select" required>
            <option value="select">Select a Category</option>
            <option value="Language" ${obj.category === 'Language' ? 'selected' : ''}>Language</option>
            <option value="Tech" ${obj.category === 'Tech' ? 'selected' : ''}>Tech</option>
          </select>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn-submit">
          ${obj.firebaseKey ? 'Update Vocab' : 'Submit Vocab'}
        </button>
      </form>
    </div>`;

  renderToDom('#form-container', domString);
};

export default addVocabForm;
