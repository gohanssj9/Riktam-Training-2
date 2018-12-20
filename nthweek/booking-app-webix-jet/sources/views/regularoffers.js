import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

import editors from 'views/customeditor';

export default class RegularOffersView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y", id: "regularoffersgrid", editable: true, editaction: "dblclick",
			columns: [
				{id: "id", header: "#", width: 42},
				{id: "no", header: "Number", fillspace: 1, editor: "text"},
				{id: "direction", header: "Direction", fillspace: 3, editor: "text"},
				{id: "date", header: "Date", fillspace: 2, format: webix.i18n.longDateFormatStr, editor: "editdate"},
				{id: "deptime", header: "Departs", fillspace: 1, editor: "text"},
				{id: "arrtime", header: "Arrives", fillspace: 1, editor: "text"},
				{id: "comments", header: "Comments", fillspace: 1.25, editor: "richselect", options: ["Landed", "On Time"], template: function(obj) {
					let className = "";
					if(obj.comments === "Landed")	className = "p1";
					else className = "p2";
					return '<div class = "comments ' + className + '"><p style = "margin: 0;">&#9679;&nbsp;&nbsp;' + obj.comments + "</p></div>";
				}}
			],
		};
		return ui;

	}
	init(view){
		const grid = $$("regularoffersgrid");
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
