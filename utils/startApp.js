import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/shared/logoutButton';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  setTimeout(() => {
    navEvents(user);
    domEvents(user);
    formEvents(user);
  }, 50);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
