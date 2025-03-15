import { getVocab, createVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    const timeSubmit = new Date().toLocaleTimeString([], { hour: 'numeric', hour12: true });

    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        name: document.querySelector('#name').value,
        def: document.querySelector('#def').value,
        cateory: document.querySelector('#category').value,
        timeSubmit,
        uid: user.uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        def: document.querySelector('#def').value,
        category: document.querySelector('#category').value,
        timeSubmit,
        firebaseKey,
        uid: user.uid
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
