import { hot } from './hot';

const element = document.getElementById('app');

if (element) {
    element.textContent = 'welcome to es-project-template';
}

// Enable HMR
hot(module);
