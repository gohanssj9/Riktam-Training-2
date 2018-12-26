import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

import StatusPopup from 'views/statuses';
import editors from 'views/customeditor';

var changingRowItem = 0;
var changingStatus = "";

export default class SpecialOffersView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y", id: "specialoffersgrid", editable: true, editaction: "dblclick",
			columns: [
				{id: "id", header: "#", width: 42},
				{id: "direction", header: "Direction", fillspace: 3, editor: "textarea", css: "text_fields"},
				{id: "date", header: "Date", fillspace: 1.5, format: webix.i18n.longDateFormatStr, editor: "editdate"},
				{id: "price", header: "Price", fillspace: 1, format: webix.i18n.priceFormat, editor: "text", css: "text_fields"},
				{id: "save", header: "You save", fillspace: 1, format: webix.i18n.priceFormat, editor: "text", css: "text_fields"},
				{id: "status", header: "Status", footer: "specialoffersgrid", fillspace: 1.75, editor: "custommultiselect", options: [
					{id:1, check: 0, status: "Open"},
					{id:2, check: 0, status: "Available soon"},
					{id:3, check: 0, status: "Last deals"},
					{id:4, check: 0, status: "Not Available"}
				], template: function(obj) {
					let className = "";
					if(obj.status === "Open") className = "o1";
					else if(obj.status === "Last deals") className = "o2";
					else if(obj.status === "Available soon") className = "o3";
					else className = "o4";
					return '<div class = "status ' + className + '"><p style = "margin: 0;" class = "textarea">&#9679;&nbsp;&nbsp;' + obj.status + "</p></div>";
				}}
			],
		};
		return ui;

	}
	init(){
		this.statuses = this.ui(StatusPopup);

		const grid = $$("specialoffersgrid");
		grid.sync(data);

		this.on(this.app, "search:flight", (from, to, date) => {
			grid.hideOverlay();
			if(from || to || date){
				grid.filter(obj => {
					const from_id = from ? obj.direction.indexOf(from) : 0;
					const to_id = to ? obj.direction.indexOf(to) : 300;
					const date_check = date ? (date === obj.date) : 1;
					return from_id !== -1 && to_id !== -1 && from_id < to_id && date_check;
				});
			}
			else grid.filter();

			if(!grid.count()) grid.showOverlay("Sorry, there are no flights for this route");
		});
	}
}

