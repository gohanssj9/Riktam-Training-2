import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

export default class RegularOffersView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y", id: "regularoffersgrid",
			columns: [
				{id: "id", header: "#", width: 42},
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
	}
}
