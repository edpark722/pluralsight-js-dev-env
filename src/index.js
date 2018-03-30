import './index.css';

import numeral from 'numeral';

/*Use ` backticks for the ES6 template string feature*/

const courseValue = numeral(1000).format('$0,0.00');
debugger; // eslint-disable-line no-debugger
console.log(`I would pay ${courseValue} for this awesome course!`);// eslint-disable-line no-console


