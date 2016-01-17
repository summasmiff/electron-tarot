require('../less/main.less');

'use strict';

import React from 'react';
import Card from './components/card.js';

var divStyle = {
  background: 'url(../assets/background.jpg) repeat-x'
};

React.render(<div style={divStyle}></div>, document.getElementById('content'));
