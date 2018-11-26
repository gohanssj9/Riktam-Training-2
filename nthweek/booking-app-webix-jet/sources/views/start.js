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
						]},
						{width: 6}
					]
				},
			]},
			{$subview: true}
		]};
		return ui;
	}
}
