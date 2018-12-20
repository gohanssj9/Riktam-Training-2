import editors from 'views/customeditor';
webix.protoUI({
	name: "CustomMultiselect",
	$init:function(config) {
		var show_id = config.id + "_custom_select";
		var show_datatable_id = config.id + "_custom_datatable_select";
		var show_label_id = config.id + "_custom_label_select";
		var statPopup = {
			view: "popup", css: "custom_popup", id: show_id,
			body: {
				rows: [
					{view: "datatable", header: false, id: show_datatable_id, scroll: false, 
					autoheight: true, autowidth: true,
					columns: [
						{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
						{id: "status", width: 225, css: "status_section"}
					],
					data: config.options
				},
				{view: "button", type: "form", value: config.value, click: () => {
					var output_string = "";
					const popup = $$(show_datatable_id);

					popup.eachRow(function(id) {
						if(this.getItem(id).check) output_string += this.getItem(id).status + ",";
					});

					output_string = output_string.substring(0, output_string.length - 1);

					$$(show_label_id).define("label", output_string);
					$$(show_label_id).refresh();

					$$(show_id).hide();

					popup.eachRow(function(id) {
						var updated_item = popup.getItem(id);
						updated_item["check"] = 0;
					});
					popup.refresh();
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
		var show_label_id = config.id + "_custom_label_select";
		var show_datatable_id = config.id + "_custom_datatable_select";
		me.addView({
			css: "custom_css", cols: [
				{view: "label", label: config.label, align: config.labelAlign, width: 100},
				{view: "label", label: config.options[0].status, css: "right_css", align: "left", id: show_label_id, width: 200, click: (id, e, trg) => {
					this.custom_multiselect.show(e.target);

					var change_array = $$(show_label_id).config.label.split(",");
					const popup = $$(show_datatable_id);
					if(change_array.length === 1){
						var changingStatus = change_array[0];
						popup.eachRow(function(id) {
							if(this.getItem(id).status === changingStatus) {
								var updated_item = popup.getItem(id);
								updated_item["check"] = 1;
							}
							else {
								var updated_item = popup.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					else {
						var cnt = 0;
						popup.eachRow(function(id) {
							if(this.getItem(id).status === change_array[cnt]) {
								var updated_item = popup.getItem(id);
								updated_item["check"] = 1;
								cnt++;
							}
							else {
								var updated_item = popup.getItem(id);
								updated_item["check"] = 0;
							}
						});
					}
					popup.refresh();
				}}
			]});
	},
}, webix.ui.layout, webix.EventSystem, webix.MouseEvents);