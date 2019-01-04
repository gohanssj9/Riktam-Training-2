webix.protoUI({
	name: "Custom_Datatable",
	$init: function(config) {
		this.$ready.push(this.getDatatable);
	},
	defaults: {
		rows: []
	},
	getDatatable: function() {
		var me = this;
		// console.log(this);
		me.addView({
			rows: [
				{view: "datatable", header: false, scroll: "y", autoheight: true, autowidth: true,
					columns: [
						{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
						{id: "status", width: 225, css: "status_section"}
					],
					data: me.config.options
				},
				{view: "button", type: "form", value: me.config.label}
			]
		});
	},
}, webix.EditAbility, webix.ui.layout, webix.EventSystem, webix.MouseEvents);