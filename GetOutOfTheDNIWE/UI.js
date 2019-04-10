"use strict"

console.log('UI loading');
var move_to;
var engine;

$(document).ready(function(){
	console.log('UI loaded');
	
	document.onkeydown = function checkKeycode(event){
		var keycode;
		if(!event) var event = window.event;
		if (event.keyCode) keycode = event.keyCode; // IE
		else if(event.which) keycode = event.which; // all browsers
		switch (keycode) {
			case (100): { move_to(-1, 0); break; }    // �����
			case (37): { move_to(-1, 0); break; }    // �����
			case (65): { move_to(-1, 0); break; }    // �����
			case (102): { move_to(1, 0); break; }     // ������
			case (39): { move_to(1, 0); break; }     // ������
			case (68): { move_to(1, 0); break; }     // ������
			case (103): { move_to(0, -1, false); move_to(-1, 0); break; }   // �����-�����
			case (81): { move_to(0, -1, false); move_to(-1, 0); break; }   // �����-�����
			case (104): { move_to(0, -1); break; }    // �����
			case (38): { move_to(0, -1); break; }    // �����
			case (87): { move_to(0, -1); break; }    // �����
			case (105): { move_to(0, -1, false); move_to(1, 0); break; }    // �����-������
			case (69): { move_to(0, -1, false); move_to(1, 0); break; }    // �����-������
		}
		//console.log("keycode: " + keycode);
	}	
});
	