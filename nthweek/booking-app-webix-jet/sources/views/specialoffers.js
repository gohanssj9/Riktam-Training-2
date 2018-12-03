import {JetView} from "webix-jet";
import {data} from "models/specialoffers";
import "styles/app.css";

export default class SpecialOffersView extends JetView {
	config(){
		var ui = {
			view: "datatable", scroll: "y", id: "specialoffersgrid",
			columns: [
				{id: "id", header: "#", width: 42},
				{id: "direction", header: "Direction", fillspace: 3},
				{id: "date", header: "Date", fillspace: 1.5},
				{id: "price", header: "Price", fillspace: 1, format: webix.i18n.priceFormat},
				{id: "save", header: "You save", fillspace: 1, format: webix.i18n.priceFormat},
				{id: "status", header: "Status", fillspace: 1.75, template: function(obj) {
					let className = "";
					if(obj.status == "Open") className = "o1";
					else if(obj.status == "Last deals") className = "o2";
					else className = "o3";
					return '<div class = "status ' + className + '"><p style = "margin: 0;">&#9679;&nbsp;&nbsp;' + obj.status + "</p></div>";
				}}
			],
		};
		return ui;

	}
	init(view){
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
