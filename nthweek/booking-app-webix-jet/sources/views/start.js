import {JetView} from "webix-jet";

export default class StartView extends JetView {
	config() {
		var ui = {rows: [
			{view: "toolbar", height: 42, elements: [
				{margin: 8,
					cols: [
						{view: "label", label: "Flights"},
						{},
						{view: "segmented", value: "Offers", width: 300, options: [
							{id: "Offers", value: "Offers"},
							{id: "Regular", value: "Regular"},
							{id: "Info", value: "Info"},
						], 
						on: {
							onChange: (obj) => { 
								var id = obj;
								console.log(id);

								if(id == "Offers") this.app.show("/top/specialoffers");
								else if(id == "Regular") this.app.show("/top/regularoffers");
								else this.app.show("/top/flightinfo");
							}
						}},
						{width: 6}
					]
				},
			]},
			{$subview: true}
		]};
		return ui;
	}
}
