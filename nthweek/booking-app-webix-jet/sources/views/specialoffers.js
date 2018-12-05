import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

import StatusPopup from 'views/statuses';

var changingRowItem = 0;

export default class SpecialOffersView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y", id: "specialoffersgrid", editable: true, editaction: "dblclick",
			columns: [
				{id: "id", header: "#", width: 42},
				{id: "direction", header: "Direction", fillspace: 3, editor: "text"},
				{id: "date", header: "Date", fillspace: 1.5, format: webix.i18n.longDateFormatStr, editor: "editdate"},
				{id: "price", header: "Price", fillspace: 1, format: webix.i18n.priceFormat, editor: "text"},
				{id: "save", header: "You save", fillspace: 1, format: webix.i18n.priceFormat, editor: "text"},
				{id: "status", header: "Status", fillspace: 1.75, template: function(obj) {
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
				if(this.getItem(id).check) {
					console.log(id + " is checked");
					console.log(this.getItem(id).status);
					output_string += this.getItem(id).status + ", ";
				}
			});
			output_string = output_string.substring(0, output_string.length - 2);
			var updated_cell = grid.getItem(changingRowItem);
			updated_cell["status"] = output_string;
			grid.refresh();
			$$("statusPopup").hide();
		});

		webix.editors.editdate = webix.extend({
  		render:function(){
        var icon = "<span class='webix_input_icon wxi-calendar' style='position:absolute; cursor:pointer; top:8px; right:5px;'></span>";
			  var node = webix.html.create("div", {
					"class":"webix_dt_editor"
				}, "<input type='text'>"+icon);

        node.childNodes[1].onclick = function(){
					var master = webix.UIManager.getFocus();
        	var editor = master.getEditor();
            
        	master.editStop(false);
        	var config = master.getColumnConfig(editor.column);
        	config.editor = "date";
        	master.editCell(editor.row, editor.column);
        	config.editor = "editdate";
      	}
      	return node;
			}
		}, webix.editors.text);	
	}
}
// , editor: "richselect", options: ['Open', 'Available Soon', 'Last deals']