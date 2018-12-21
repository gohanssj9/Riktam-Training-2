const editors = webix.editors;
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

editors.custommultiselect = webix.extend({
	focus: function() {console.log(this); console.log("Inside focus");},
	popupType: "custommultiselect",
	setValue: function(value){
		console.log(value);
		this.getPopup().show(this.node);
		console.log(this.getPopup().getBody().getChildViews()[0]);
		// console.log(this);
		// console.log(this.getInputNode().getChildViews());
		// this.getInputNode().getChildViews()[0].config.data = this.config.collection.config.data;
		var conf = $$("show_datatable_id");
		console.log(conf);
		conf.clearAll();
		conf.parse(this.config.collection.config.data);
		console.log("Inside setValue");
		return this.config.collection.config.data;
	},
	getValue: function(){
		console.log("Inside getValue");
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
					{id: 1, check: 0, status: "Open"}
				]
			},
			{view: "button", label: "Select", type: "form", margin: 0, click: () => {
				$$("something_else_").hide();
			}}
		]
	}
}

export default editors;