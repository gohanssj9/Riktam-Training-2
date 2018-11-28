import {JetView} from 'webix-jet';

export default class LookForFlightView extends JetView {
	config(){
		var ui = {type: "form", rows: [
				{view: "radio", label: "Trip", value: 1, options: [
					{id: 1, value: "One-Way"},
					{id: 2, value: "Return"}
				], css: "radio_section", labelAlign: "right", labelWidth: 100},
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
					onChange: (obj) => {
						if(obj == 1) $$("arrivecombo").setValue("");
					}
				}
			},
		]};
		return ui;
	}
}