import {JetView} from 'webix-jet';

export default class RegisterView extends JetView {
	config(){
		var ui = {type: "form", rows: [
			{view: "text", label: "First Name", placeholder: "Matthew", labelAlign: "right", labelWidth: 100},
			{view: "text", label: "Last Name", placeholder: "Clark", labelAlign: "right", labelWidth: 100},
			{view: "text", label: "Email", placeholder: "mattclark@some.com", labelAlign: "right", labelWidth: 100},
			{view: "text", label: "Login", placeholder: "Matt", labelAlign: "right", labelWidth: 100},
			{view: "text", type: "password", label: "Password", placeholder: "********", labelAlign: "right", labelWidth: 100},
			{view: "text", type: "password", label: "Confirm Password", placeholder: "********", labelAlign: "right", labelWidth: 100},
			{view: "button", type: "form", value: "Register"}
		]};
		return ui;
	}
}