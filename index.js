/* jshint esversion: 6 */
import {
    createTestList,
    handleButtonClick, 
    trackMousePosition, 
    setupEventDelegation
} from './main.js';

createTestList();
handleButtonClick('myButton', 'Button clicked!');
trackMousePosition();
setupEventDelegation('#testList');