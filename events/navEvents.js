import {
  getTech,
  getLanguage,
  getVocab,
  searchVocab,
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';
import addVocabForm from '../components/forms/addVocabForm';

const navEvents = (user) => {
  const logoutButton = document.querySelector('#logout-button');
  const techVocab = document.querySelector('#tech-vocab');
  const languageVocab = document.querySelector('#language-vocab');
  const allVocab = document.querySelector('#all-vocab');
  const addButton = document.querySelector('#add-button1');
  const searchInput = document.querySelector('#search');

  // ✅ Logout event
  if (logoutButton) logoutButton.addEventListener('click', signOut);

  // ✅ Filter vocab by Tech
  if (techVocab) {
    techVocab.addEventListener('click', () => {
      getTech(user.uid).then(showVocab);
    });
  }

  // ✅ Filter vocab by Language
  if (languageVocab) {
    languageVocab.addEventListener('click', () => {
      getLanguage(user.uid).then(showVocab);
    });
  }

  // ✅ Show all vocab entries
  if (allVocab) {
    allVocab.addEventListener('click', () => {
      getVocab(user.uid)
        .then(showVocab) // ✅ Forces vocab list to update
        .catch((error) => console.error('❌ Error fetching vocab:', error));
    });
  }

  // ✅ "Add Entry" button - Open Form
  if (addButton) {
    addButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents page refresh

      // ✅ Ensure the main container is cleared before showing the form
      const mainContainer = document.querySelector('#main-container');
      if (mainContainer) mainContainer.innerHTML = '';

      addVocabForm({}, user); // ✅ Open the vocab form
    });
  } else {
    console.error('❌ "Add Entry" button NOT found in the DOM!');
  }

  // ✅ Search event
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        searchVocab(user);
        searchInput.value = ''; // ✅ Clears input after search
      }
    });
  } else {
    console.error('❌ Search input not found in the DOM!');
  }
};

export default navEvents;
