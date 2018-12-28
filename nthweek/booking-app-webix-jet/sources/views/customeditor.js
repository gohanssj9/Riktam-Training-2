const editors = webix.editors;

var changingRowItem = 0;
var changingStatus = "";
var output_string = "";
var grid_row = "";
editors.editdate = webix.extend({
	render:function(){
    var icon = "<span class='webix_input_icon wxi-calendar' style='position:absolute; cursor:pointer; top:8px; right:5px;'></span>";
	  var node = webix.html.create("div", {
			"class":"webix_dt_editor"
		}, "<input type='text'>"+icon);

    node.childNodes[1].onclick = function(){
			var master = webix.UIManager.getFocus();
    	var editor = master.getEditor();
        
    	master.editStop(false);
    	var config = master.getColumnConfig(editor.column);
    	config.editor = "date";
    	master.editCell(editor.row, editor.column);
    	config.editor = "editdate";
  	}
  	return node;
	}
}, webix.editors.text);

//  || 

editors.custommultiselect = webix.extend({
	focus: function() {
		// grid_row = this.config.footer[0].text;
	},
	popupType: "custommultiselect",
	setValue: function(value){
		this.getPopup().show(this.node);
		console.log(this);
		var conf = $$("show_datatable_id");
		conf.clearAll();
		conf.parse(((this.config.collection.config.data)));

		var changing_status_array = value.split(",");
		if(changing_status_array.length === 1){
			changingStatus = changing_status_array[0];
			conf.eachRow(function(id) {
				if(this.getItem(id).status === changingStatus) {
					var updated_item = conf.getItem(id);
					updated_item["check"] = 1;
				}
				else {
					var updated_item = conf.getItem(id);
					updated_item["check"] = 0;
				}
			});
		}
		else {
			var cnt = 0;
			conf.eachRow(function(id) {
				if(this.getItem(id).status === changing_status_array[cnt]) {
					var updated_item = conf.getItem(id);
					updated_item["check"] = 1;
					cnt++;
				}
				else {
					var updated_item = conf.getItem(id);
					updated_item["check"] = 0;
				}
			});
		}
		conf.refresh();
	},
	getValue: function(){
		return output_string;
	}
}, webix.editors.popup);

editors.$popup.custommultiselect = {
	view: "suggest",
	padding: 0,
	id: "something_else",
	body: {
		view: "form",
		id: "something_else_",
		rows: [
			{view: "datatable", header: false, id: "show_datatable_id", margin: 0, scroll: false, autoheight: true, autowidth: true,
				columns: [
					{id: "check", template: "{common.checkbox()}", width: 25, css: "checkbox_section"},
					{id: "status", width: 225, css: "status_section"}
				],
				data: [
					{id: 1, check: 0, status: "Enter some options."}
				]
			},
			{view: "button", label: "Select", type: "form", margin: 0, click: (id, e) => {
				// output_string = "";
				// const notif = $$("show_datatable_id");
				// const grid = $$(grid_row);
				// notif.eachRow(function(id) {
				// 	if(this.getItem(id).check) output_string += this.getItem(id).status + ",";
				// });

				// output_string = output_string.substring(0, output_string.length - 1);
				// var updated_cell = grid.getItem(grid._item_clicked.row);
				// updated_cell[grid._item_clicked.column] = output_string;
				// grid.refresh();

				$$("something_else").hide();

				// notif.eachRow(function(id) {
				// 	var updated_item = notif.getItem(id);
				// 	updated_item["check"] = 0;
				// });
				// notif.refresh();
			}}
		]
	}
}

export default editors;