import {JetView} from 'webix-jet';

export default class HotelsView extends JetView {
	config(){
		var ui = {type: "form", rows: [
			{view: "text", label: "Where", placeholder: "Destination e.g. city, hotel name", labelAlign: "right", labelWidth: 100},
			{view: "datepicker", value: new Date(2018, 10, 28), label: "Check In", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
			{view: "datepicker", value: new Date(2018, 10, 29), label: "Check Out", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
			{view: "button", type: "form", value: "Search"}
		]};
		return ui;
	}
}