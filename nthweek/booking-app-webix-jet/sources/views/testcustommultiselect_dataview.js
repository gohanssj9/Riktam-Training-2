webix.protoUI({
	name: "Custom_Multi_Dataview",
	$init: function(config){
		console.log("Inside dataview Custom_Multi_Dataview");
		this.$ready.push(this.showSomeDataView);
	},
	defaults: {
		rows: []
	},
	showSomeDataView: function(){ 
		var me = this;
		me.addView({
			view: "dataview", template: "<div class = 'webix_strong'>#title#</div>",
			editable: true, editor: "popup", editaction: "dblclick",
			data: [
				{id: 1, title: "Something"}
			],
			type: {
				height: 60,
				width: "auto"
			}
		});
	}
}, webix.EditAbility, webix.ui.layout);