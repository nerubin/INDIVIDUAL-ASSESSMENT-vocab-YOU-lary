/* eslint-disable no-alert */
import {
  deleteVocab,
  getVocab,
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm({}, user);
    }

    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
  });
};

export default domEvents;
