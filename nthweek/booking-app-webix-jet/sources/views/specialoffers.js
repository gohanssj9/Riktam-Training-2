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
				{id: "status", header: "Status", fillspace: 1.75, editor: "custommultiselect", options: [
					{id:1, check: 0, status: "Open"},
					{id:2, check: 0, status: "Available soon"},
					{id:3, check: 0, status: "Last deals"},
				], template: function(obj) {
					let className = "";
					if(obj.status === "Open") className = "o1";
					else if(obj.status === "Last deals") className = "o2";
					else if(obj.status === "Available soon") className = "o3";
					else className = "o4";
					return '<div class = "status ' + className + '"><p style = "margin: 0;" class = "textarea">&#9679;&nbsp;&nbsp;' + obj.status + "</p></div>";
				}}
			],
			onDblClick: {
				"status": function(ev, id, trg) {
					this.$scope.statuses.showPopup(trg);
					changingRowItem = id.row;

					var changing_status = $$("specialoffersgrid").getItem(id.row).status;
					var changing_status_array = changing_status.split(",");
					console.log(changing_status_array);

					const notif = $$("status_multiselect");
					if(changing_status_array.length === 1){
						changingStatus = changing_status_array[0];
						notif.eachRow(function(id) {
							if(this.getItem(id).status === changingStatus) {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 1;
							}
							else {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					else {
						var cnt = 0;
						notif.eachRow(function(id) {
							if(this.getItem(id).status === changing_status_array[cnt]) {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 1;
								cnt++;
							}
							else {
								var updated_item = notif.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					notif.refresh();
				}
			}
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

		this.on(this.app, "checkboxes:check", () => {
			var output_string = "";
			const notif = $$("status_multiselect");

			notif.eachRow(function(id) {
				if(this.getItem(id).check) output_string += this.getItem(id).status + ",";
			});

			output_string = output_string.substring(0, output_string.length - 1);

			var updated_cell = grid.getItem(changingRowItem);
			updated_cell["status"] = output_string;
			grid.refresh();

			$$("statusPopup").hide();

			notif.eachRow(function(id) {
				var updated_item = notif.getItem(id);
				updated_item["check"] = 0;
			});
			notif.refresh();
		});
	}
}

