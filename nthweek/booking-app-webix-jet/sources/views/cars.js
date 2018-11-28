import {JetView} from 'webix-jet';

export default class CarsView extends JetView {
	config(){
		var ui = {type: "form", rows: [
			{view: "text", label: "Where", placeholder: "Location e.g. country, city", labelAlign: "right", labelWidth: 100},
			{cols: [
				{view: "datepicker", value: new Date(2018, 10, 28), label: "Pick up car", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
				{width: 5},
				{view: "richselect", options: [
					{id: 1, value: "00"},
					{id: 2, value: "01"},
					{id: 3, value: "02"},
					{id: 4, value: "03"},
					{id: 5, value: "04"},
					{id: 6, value: "05"},
					{id: 7, value: "06"},
					{id: 8, value: "07"},
					{id: 9, value: "08"},
					{id: 10, value: "09"},
					{id: 11, value: "10"},
					{id: 12, value: "11"},
					{id: 13, value: "12"},
					{id: 14, value: "13"},
					{id: 15, value: "14"},
					{id: 16, value: "15"},
					{id: 17, value: "16"},
					{id: 18, value: "17"},
					{id: 19, value: "18"},
					{id: 20, value: "19"},
					{id: 21, value: "20"},
					{id: 22, value: "21"},
					{id: 23, value: "22"},
					{id: 24, value: "23"},
				], width: 65, value: 10},
				{view: "richselect", options: [
					{id: 1, value: "00"},
					{id: 2, value: "15"},
					{id: 3, value: "30"},
					{id: 4, value: "45"},
				], width: 65, value: 1}
			]},
			{cols: [
				{view: "datepicker", value: new Date(2018, 10, 28), label: "Return car", labelWidth: 100, labelAlign: "right", format: "%d %M %Y"},
				{width: 5},
				{view: "richselect", options: [
					{id: 1, value: "00"},
					{id: 2, value: "01"},
					{id: 3, value: "02"},
					{id: 4, value: "03"},
					{id: 5, value: "04"},
					{id: 6, value: "05"},
					{id: 7, value: "06"},
					{id: 8, value: "07"},
					{id: 9, value: "08"},
					{id: 10, value: "09"},
					{id: 11, value: "10"},
					{id: 12, value: "11"},
					{id: 13, value: "12"},
					{id: 14, value: "13"},
					{id: 15, value: "14"},
					{id: 16, value: "15"},
					{id: 17, value: "16"},
					{id: 18, value: "17"},
					{id: 19, value: "18"},
					{id: 20, value: "19"},
					{id: 21, value: "20"},
					{id: 22, value: "21"},
					{id: 23, value: "22"},
					{id: 24, value: "23"},
				], width: 65, value: 10},
				{view: "richselect", options: [
					{id: 1, value: "00"},
					{id: 2, value: "15"},
					{id: 3, value: "30"},
					{id: 4, value: "45"},
				], width: 65, value: 1}
			]},
			{view: "button", type: "form", value: "Search"}
		]};
		return ui;
	}
}