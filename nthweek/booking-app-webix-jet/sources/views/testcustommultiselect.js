import {JetView} from "webix-jet";

export default class TestCustomMultiSelect extends JetView {
	config() {
		webix.protoUI({
			name: "TestCustomMultiSelect",
			$init:function(config) {
			},
			defaults: {

			},
		}, webix.ui.richselect);

		var protoReturn = {
			view: "TestCustomMultiSelect", label: "Status", value: 1, popup: false, select: false,
			options: {
				body: {
					data: [
						{id:1, check: 0, status: "Open"},
						{id:2, check: 0, status: "Available soon"},
						{id:3, check: 0, status: "Last deals"}
					],
					template: "<div class = 'my_control'><div class= 'far fa-square clickable-checkbox' style = 'display: inline-block; height: 100%; width: 10%;'></div><div class = 'text' style = 'display: inline-block; padding-left: 10px;'><div>#status#</div></div></div>"
				}
			},
			// on: {
			// 	onChange: function(newv, oldv){
			// 		console.log(newv);
			// 		console.log(oldv);
			// 		console.log(this);
			// 	},
			// }
			on_click: {
				"clickable-checkbox": function(ev, id) {
					console.log(ev);
					console.log(id);
					console.log("Onclick");
				}
			}
		};
		return protoReturn;
	}
}

				// view: "popup", width: 100, 
				// body: {
				// 	rows: [
				// 		{view: "datatable", header: false,
				// 		columns: [
				// 			{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
				// 			{id: "status", width: 225, css: "status_section"}
				// 		],
				// 		data:  [
				// 			{id: 1, check: 0, status: "Open"},
				// 			{id: 2, check: 0, status: "Available soon"},
				// 			{id: 3, check: 0, status: "Last deals"},
				// 		]
				// 	},
				// 	{view: "button", type: "form", value: "Select"}
				// ]}
