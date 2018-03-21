import App from '../imports/ui/App.js';
import { render } from 'react-dom';
import React from 'react';
import './main.html';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
