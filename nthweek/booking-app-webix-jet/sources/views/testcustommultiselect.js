import {JetView} from "webix-jet";

export default class TestCustomMultiSelect extends JetView {
	config() {
		webix.protoUI({
			name: "TestCustomMultiSelect",
			$init:function(config) {
			},
			defaults: {
				width: 250,
				margin: 10,
				options: {
					body: {
						data: [
							{id:1, check: 0, status: "Open"},
							{id:2, check: 0, status: "Available soon"},
							{id:3, check: 0, status: "Last deals"}
						],
						template: "<div class = 'my_control'><div class= 'far fa-square' style = 'display: inline-block;'></div><div class = 'text' style = 'display: inline-block; padding-left: 10px;'><div>#status#</div></div></div>"
					}
				}
			},
			label_setter: function(value) {
				console.log(this);
				this._settings.label = value;
				this.refresh();
				// this.config.;
				// this.config.refresh();
			}
		}, webix.ui.richselect);

		var protoReturn = {
			view: "TestCustomMultiSelect", label: "Status"
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
