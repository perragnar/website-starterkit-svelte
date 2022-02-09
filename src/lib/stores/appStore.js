import { writable } from 'svelte/store';

const appState = {
  appTitle: 'Website Starter Kit',
};

export const appStore = writable(appState);
