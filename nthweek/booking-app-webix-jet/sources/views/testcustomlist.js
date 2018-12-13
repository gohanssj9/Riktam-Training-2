import {JetView} from "webix-jet";

export default class TestCustomList extends JetView {
	config() {
		webix.protoUI({
			name: "CustomMultiselect",
			$init:function(config) {
				this.$ready.push(this.showDatatable);
			},
			defaults: {
				rows: []
			},
			showDatatable: function() {
				var me = this;
				var config = me.config;
				console.log(config);
				me.addView({ width: 200,
					cols: [
						{view: "label", label: config.label, align: config.align},
						{view: "label", label: "Open", align: "left"}
					]});
			}			
		}, webix.ui.layout);

		var protoReturn = {
			view: "CustomMultiselect", label: "Status", align: "right"
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


				// 		{rows: [
				// 			{view: "datatable", header: false, scroll: false, autoheight: true, autowidth: true,
				// 				columns: [
				// 				{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
				// 				{id: "status", css: "status_section", width: 150}
				// 			],
				// 			data: [
				// 				{id: 1, check: 0, status: "Open"},
				// 				{id: 2, check: 0, status: "Available soon"},
				// 				{id: 3, check: 0, status: "Last deals"},
				// 			]
				// 		},
				// 		{view: "button", type: "form", label: "Select"}]
				// }
