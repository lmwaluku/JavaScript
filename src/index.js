import './index.css';
import numeral from 'numeral';
import { debug } from 'webpack';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log('I would pay this ${courseValue} awesome course!');
