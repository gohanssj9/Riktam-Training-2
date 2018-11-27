import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

export default class FlightInfoView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y",
			columns: [
				{id: "no", header: "Number", fillspace: 1},
				{id: "direction", header: "Direction", fillspace: 3},
				{id: "date", header: "Date", fillspace: 2},
				{id: "deptime", header: "Departs", fillspace: 1},
				{id: "arrtime", header: "Arrives", fillspace: 1},
				{id: "comments", header: "Comments", fillspace: 1.25, template: function(obj) {
					let className = "";
					let stringName = "";
					if(obj.comments == 0) {
						className = "p1";
						stringName = "Landed";
					}
					else {
						className = "p2";
						stringName = "On Time";
					}
					return '<div class = "comments ' + className + '"><p style = "margin: 0;">&#9679;&nbsp;&nbsp;' + stringName + "</p></div>";
				}}
			],
		};
		return ui;

	}
	init(view){
		view.parse(data);
	}
}
