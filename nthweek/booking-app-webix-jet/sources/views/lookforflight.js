import {JetView} from 'webix-jet';

export default class LookForFlightView extends JetView {
	config(){
		var ui = {type: "form", rows: [
				{view: "radio", label: "Trip", value: 1, options: [
					{id: 1, value: "One-Way"},
					{id: 2, value: "Return"}
				], css: "radio_section", labelAlign: "right", labelWidth: 100,
				on: {
					onChange: (obj) => {
						console.log(obj);
						if(obj == 2) $$("returndate").show();
						else $$("returndate").hide();
					}
				}},
				{view: "combo", id: "departcombo", label: "From", options: [
					{id: 1, value: "-- Not selected --"},
					{id: 2, value: "Riga"},
					{id: 3, value: "Warsaw"},
					{id: 4, value: "Tallin"},
					{id: 5, value: "Moscow"},
					{id: 6, value: "Prague"},
					{id: 7, value: "Vilnius"},
					{id: 8, value: "Kiev"},
					{id: 9, value: "St.Petersburg"},
					{id: 10, value: "Minsk"},
				], placeholder: "Select departure point", labelAlign: "right", labelWidth: 100,
				on: {
					onChange: (obj) => {
						if(obj == 1) $$("departcombo").setValue("");
					}
				}
			},
			{view: "combo", id: "arrivecombo", label: "To", options: [
					{id: 1, value: "-- Not selected --"},
					{id: 2, value: "Riga"},
					{id: 3, value: "Warsaw"},
					{id: 4, value: "Tallin"},
					{id: 5, value: "Moscow"},
					{id: 6, value: "Prague"},
					{id: 7, value: "Vilnius"},
					{id: 8, value: "Kiev"},
					{id: 9, value: "St.Petersburg"},
					{id: 10, value: "Minsk"},
				], placeholder: "Select destination", labelAlign: "right", labelWidth: 100,
				on: {
					onShow: () => {
						let getDepartureID = $$("departcombo").getValue();

						console.log(getDepartureID);
						if(getDepartureID != 1) {
							// this.getList().filter(obj => obj.)
						}
					},
					onChange: (obj) => {
						if(obj == 1) $$("arrivecombo").setValue("");
					},
				},
			},
			{view: "datepicker", value: new Date(2018, 10, 28), label: "Departure", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
			{view: "datepicker", id: "returndate", value: new Date(2018, 10, 28), label: "Return", labelWidth: 100, labelAlign: "right", format: "%d %M %Y", hidden: true},
			{view: "counter", label: "Adults", labelAlign: "right", labelWidth: 100, value: 1},
			{view: "counter", label: "Children", labelAlign: "right", labelWidth: 100},
			{view: "button", type: "form", value: "Search Now"}
		]};
		return ui;
	}
}

					// onBeforeRender: (id) => {
					// 	var getDepartureID = $$("departcombo").getValue();
					// 	console.log("onBeforeRender");
					// 	console.log(getDepartureID);
					// 	console.log(id);
					// 	var options = $$("arrivecombo").getColumnConfig(id.column).collection;
					// 	options.clearAll();
					// 	options.parse([{id: 1, value: "-- Not selected --", id: 3, value: "Warsaw"}]);
					// 	console.log("End of onBeforeRender");
					// },
