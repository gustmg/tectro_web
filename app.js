const mdc = require('material-components-web');
mdc.autoInit();

import {MDCDialog} from '@material/dialog';

// Find all the dialogs on the page
const dialogEls = Array.from(document.querySelectorAll('.mdc-dialog'));
// First one is the Login, Second one is the Delivery
var dialogArr = [];
dialogEls.forEach((ele) => {
  const dialog = new MDCDialog(ele);
  dialog.listen('MDCDialog:accept', function() {
    console.log('accepted');
  })
  dialog.listen('MDCDialog:cancel', function() {
    console.log('canceled');
  })
  dialogArr.push(dialog);
});

document.querySelector('#contact-modal-trigger').addEventListener('click', function (evt) {
  
  dialogArr[1].open();
});
document.querySelector('#info-button').addEventListener('click', function (evt) {
  dialogArr[0].open();
});

dialogArr[1].listen('MDCDialog:closing', function(evt){
	$('header').show('fast');
	$('#info-button').show('fast');
	$('#phone-button').show('fast');
});

dialogArr[1].listen('MDCDialog:opening', function(evt){
	$('header').hide('fast');
	$('#info-button').hide('fast');
	$('#phone-button').hide('fast');
});

dialogArr[0].listen('MDCDialog:closing', function(evt){
	$('header').show('fast');
	$('#info-button').show('fast');
	$('#phone-button').show('fast');
});

dialogArr[0].listen('MDCDialog:opening', function(evt){
	$('header').hide('fast');
	$('#info-button').hide('fast');
	$('#phone-button').hide('fast');
});