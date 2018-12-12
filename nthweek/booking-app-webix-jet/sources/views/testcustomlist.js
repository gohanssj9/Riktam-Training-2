import {JetView} from "webix-jet";

export default class TestCustomList extends JetView {
	config() {
		webix.protoUI({
			name: "CustomMultiselect",
			$init:function(config) {
				this.$view.innerHTML = "<div class='webix_view webix_layout_line'><div class='webix_view webix_control webix_el_label'><div></div></div>";
				console.log(config.id);
				// this.$view.innerHTML = "<div class = 'item1'></div>";
				// this.$ready.push(this.showDatatable);
			},
			// item1_setter: function(value){
			// 	console.log("Inside ready");
			// 	console.log(this.config);
			// 	webix.ui({
			// 		view: "datatable", container: value, header: false,
			// 		columns: [
			// 			{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
			// 			{id: "status", width: 225, css: "status_section"}
			// 		],
			// 		data: [
			// 			{id: 1, check: 0, status: "Open"},
			// 			{id: 2, check: 0, status: "Available soon"},
			// 			{id: 3, check: 0, status: "Last deals"},
			// 		]
			// 	});
			// },
			defaults: {
				width: 150,
			},
			label_setter:function(value) {
				console.log(this);
				if(value) this.$view.childNodes[0].childNodes[0].childNodes[0].innerHTML = value;
				console.log(value);
				return value;	
			}
		}, webix.ui.view);

		var protoReturn = {
			view: "CustomMultiselect", label: "Hello",
			// , label: "Status"
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
