webix.protoUI({
	name: "Custom_Multi_Dataview",
}, webix.EditAbility, webix.ui.dataview);

	// $init: function(config){
	// 	this.$ready.push(this.showSomeDataView);
	// },
	// defaults: {
	// 	rows: []
	// },
	// showSomeDataView: function(){ 
	// 	var me = this;
	// 	me.addView({
	// 		view: "dataview", template: "<div class = 'webix_strong'>#title#</div>",
	// 		editable: true, editor: "text", editaction: "click", height: 250, editValue: "title",
	// 		data: [
	// 			{id: 1, title: "Something"}
	// 		],
	// 		type: {
	// 			height: 60,
	// 			width: "auto"
	// 		}
	// 	});
	// }
