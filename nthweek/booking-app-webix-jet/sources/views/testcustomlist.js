webix.protoUI({
	name: "CustomMultiselect",
	$init:function(config) {
		var show_id = config.id + "_custom_select";
		var statPopup = {
			view: "popup", css: "custom_popup", id: show_id,
			body: {
				rows: [
					{view: "datatable", header: false, scroll: false, autoheight: true, autowidth: true,
					columns: [
						{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
						{id: "status", width: 225, css: "status_section"}
					],
					data: config.options
				},
				{view: "button", type: "form", value: config.value, click: () => {
					$$(show_id).hide();
				}}
			]}							
		};
		this.custom_multiselect = webix.ui(statPopup);
		this.$ready.push(this.showLabel);
	},
	defaults: {
		rows: []
	},
	showLabel: function() {
		var me = this;
		var config = me.config;
		console.log(config);
		console.log("Inside label");
		me.addView({
			css: "custom_css", cols: [
				{view: "label", label: config.label, align: config.labelAlign, width: 100},
				{view: "label", label: "", css: "right_css", align: "left",width: 200, click: (id, e, trg) => {
					this.custom_multiselect.show(e.target);
				}}
			]});
	},
}, webix.ui.layout, webix.EventSystem, webix.MouseEvents);