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
						if(obj == 2) $$("returndate").show();
						else $$("returndate").hide();
					}
				}},
				{view: "combo", id: "departcombo", label: "From", options: {
					data: [
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
				],
				on: {
					onShow: () => {
						const getArriveID = $$("arrivecombo").getValue();
						const options = $$("departcombo").getList();
						console.log("In onShow - departure");

						if(getArriveID == 3) options.filter(obj => obj.id == 2 || obj.id == 1);
						if(getArriveID == 4) options.filter(obj => obj.id == 4 || obj.id == 1);
						if(getArriveID == 5) options.filter(obj => obj.id == 9 || obj.id == 1);
						if(getArriveID == 6) options.filter(obj => obj.id == 8 || obj.id == 1);
						if(getArriveID == 8) options.filter(obj => obj.id == 5 || obj.id == 1);
						if(getArriveID == 9) options.filter(obj => obj.id == 7 || obj.id == 1);
						if(getArriveID == 10) options.filter(obj => obj.id == 6 || obj.id == 1);
						if(getArriveID == 11) options.filter(obj => obj.id == 3 || obj.id == 1);
					},
				}}, placeholder: "Select departure point", labelAlign: "right", labelWidth: 100,
				on: {
					onChange: (obj) => {
						if(obj == 1) $$("departcombo").setValue("");
					}
				}},
				{view: "combo", id: "arrivecombo", label: "To", options: {
					data: [
						{id: 1, value: "-- Not selected --"},
						{id: 2, value: "Riga"},
						{id: 3, value: "Warsaw"},
						{id: 4, value: "Berlin"},
						{id: 5, value: "Tallin"},
						{id: 6, value: "Moscow"},
						{id: 7, value: "Prague"},
						{id: 8, value: "Vilnius"},
						{id: 9, value: "Kiev"},
						{id: 10, value: "St.Petersburg"},
						{id: 11, value: "Minsk"}
					], 
					on: {
						onShow: () => {
							const getDepartureID = $$("departcombo").getValue();
							const options = $$("arrivecombo").getList();
							console.log("In onShow");

							if(getDepartureID == 2) options.filter(obj => obj.id == 3 || obj.id == 1);
							if(getDepartureID == 3) options.filter(obj => obj.id == 11 || obj.id == 1);
							if(getDepartureID == 4) options.filter(obj => obj.id == 4 || obj.id == 1);
							if(getDepartureID == 5) options.filter(obj => obj.id == 8 || obj.id == 1);
							if(getDepartureID == 6) options.filter(obj => obj.id == 10 || obj.id == 1);
							if(getDepartureID == 7) options.filter(obj => obj.id == 4 || obj.id == 9 || obj.id == 1);
							if(getDepartureID == 8) options.filter(obj => obj.id == 6 || obj.id == 1);
							if(getDepartureID == 9) options.filter(obj => obj.id == 5 || obj.id == 1);
							if(getDepartureID == 10) options.filter(obj => obj.id == 4 || obj.id == 1);
						},
					}}, placeholder: "Select destination", labelAlign: "right", labelWidth: 100,
					on: {
						onChange: (obj) => {
							if(obj == 1) $$("arrivecombo").setValue("");
						},
					}
			},
			{view: "datepicker", value: new Date(), label: "Departure", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
			{view: "datepicker", id: "returndate", value: new Date(), label: "Return", labelWidth: 100, labelAlign: "right", format: "%d %M %Y", hidden: true},
			{view: "counter", label: "Adults", labelAlign: "right", labelWidth: 100, value: 1},
			{view: "counter", label: "Children", labelAlign: "right", labelWidth: 100},
			{view: "button", type: "form", value: "Search Now", click: () => {
				console.log("Onclick clicked");
				
			}}
		]};
		return ui;
	}
}