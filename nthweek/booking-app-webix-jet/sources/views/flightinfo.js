import {JetView} from "webix-jet";
import {getInfo} from "models/info";
import "styles/app.css";

export default class FlightInfoView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y",
			columns: [
				{id: "no", header: "Flight No.", fillspace: 1},
				{id: "from", header: "From", fillspace: 1},
				{id: "to", header: "To", fillspace: 1},
				{id: "depart", header: "Departs", fillspace: 1},
				{id: "arrive", header: "Arrives", fillspace: 1},
				{id: "status", header: "Status", fillspace: 1, template: function(obj) {
					let className = "";
					if(obj.status == "Landed") className = "p1";
					else className = "p2";
					return '<div class = "comments ' + className + '"><p style = "margin: 0;">&#9679;&nbsp;&nbsp;' + obj.status + "</p></div>";
				}}
			],
		};
		return ui;

	}
	init(view){
		view.parse(getInfo());
	}
}
