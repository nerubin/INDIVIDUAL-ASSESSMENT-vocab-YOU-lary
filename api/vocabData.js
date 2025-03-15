import { showVocab } from '../pages/vocab';
import client from '../utils/client';

const endpoint = client.databaseURL;

// GET vocab cards
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const firebaseKey = data.name;
      fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firebaseKey }),
      }).then(() => {
        getVocab(payload.uid).then(showVocab); // ✅ Auto-refresh vocab list
        resolve({ ...payload, firebaseKey });
      });
    })
    .catch(reject);
});

// UPDATE
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(() => {
      getVocab(payload.uid).then(showVocab); // ✅ Refresh vocab list after update
      resolve();
    })
    .catch(reject);
});

// GET Language Entries
const getLanguage = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryLang = Object.values(data).filter((item) => item.category === 'Language');
      resolve(categoryLang);
    })
    .catch(reject);
});

// GET Tech Entries
const getTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryTech = Object.values(data).filter((item) => item.category === 'Tech');
      resolve(categoryTech);
    })
    .catch(reject);
});

// SEARCH vocab entries based on user input
const searchVocab = (user) => {
  const searchInput = document.querySelector('#search').value.toLowerCase();
  getVocab(user.uid).then((items) => {
    const oneVocab = items.filter((vocab) => vocab.name.toLowerCase().includes(searchInput));
    showVocab(oneVocab);
  });
};

export {
  getVocab,
  deleteVocab,
  createVocab,
  updateVocab,
  getLanguage,
  getTech,
  searchVocab,
};
