function getData(){
	var data = [];
	for(var i=0; i<50; i++){
		data.push({
			check: Math.random() > 0.85 ? 1 : 0,
			star: Math.random() > 0.7 ? 1 : 0,
			from: "<p>Tigersheet.com</p>",
			subject: "<p>People WFH today - Hello all, People working from home today: Please login below to check the details. Click here. Cheers, Tigersheet.com Team </p>",
			date: "<p>Oct " + (19+Math.round(Math.random()*10)) + "</p>"
		});
	}
	return data;
}

var searchBar = { view: "form", margin: 0, cols: [
	{ view: "search", placeholder: "Search mail", inputHeight: 50, height: 50, css: 'search_section'},
	{gravity: 0.25},
	{view: "button", type: "iconButton", icon: "fas fa-th", width: 40, css: "topheader_section grid_icon"},
	{view: "button", type: "iconButton", icon: "fas fa-bell", width: 40, css: "topheader_section bell_icon"},
	{template: "<div class = 'avatar'>S</div>", css: "user_info", width: 60}
]};

var topHeader = {type: 'clean', css: 'dummy_check', height: 64, cols: [
	{view: "button", type: "iconButton", icon: "fas fa-bars", width: 30, height: 40, css: "topheader_section"},
	{template: "<div class = 'logo_inner'></div>", css: "logo", height: 40, width: 200},
	searchBar
]};

var categories = [
	{icon: 'category fa fa-inbox', value: 'Inbox'},
	{icon: 'category fa fa-star', value: 'Starred'},
	{icon: 'category fas fa-clock', value: 'Snoozed'},
	{icon: 'category fa fa-comments', value: 'Sent'},
	{icon: 'category fa fa-file', value: 'Drafts'},
	{icon: 'category fa fa-tags', value: 'Tigersheet'},
	{icon: 'category fa fa-chevron-circle-down', value: 'More'}
];

var chatbox = [
	{dummyTitle: 'I', value: 'Iron Man', backgroundColor: '#f9619f', message: 'You: You want me to repair Jarvis? I know you cannot fix it on your own.'},
	{dummyTitle: 'A', value: 'Atom', backgroundColor: '#352cb5', message: 'Beep Beep Beep'},
	{dummyTitle: 'R', value: 'Real Steel', backgroundColor: '#2088c0', message: 'You: Great movie!'},
	{dummyTitle: 'W', value: 'Wolverine', backgroundColor: '#f91abe', message: 'Grrr'},
	{dummyTitle: 'C', value: 'Cyclops', backgroundColor: '#c43597', message: 'Thanks for saving us!'},
	{dummyTitle: 'H', value: 'Hulk', backgroundColor: '#c4d395', message: 'Thanos scared me !'},
	{dummyTitle: 'F', value: 'Flash', backgroundColor: '#a0cbc5', message: 'You: I told you not to go fast on a banana peel :P'},
];

var menuSection = {
	padding: 10,
	margin: 10,
	height: 250,
	rows: [
		{view: 'button', type: 'image', image: 'plus_logo.png', label: 'Compose', height: 55, width: 150, click: function(){$$("window1").show({x: 710, y:190});}},
		{view: 'list', 
			select: true,
			columns: [
				{id: 'icon', height: 20, width: 20, marginRight: 18},
				{id: 'menuOption', fillspace: true}
			],
			header: false,
			data: categories, 
			scroll: true,
		}
	]
};

var profileSection = {height: 50, cols: [
		{view: 'button', css: 'profile_image', type: 'image', image: 'user_avatar.png', height: 32, width: 32},
		{template: '<div class="text_inside"><p>Sriteja</p></div>', width: 40, css: 'text_section'},
		{view: 'button', type: 'iconButton', icon: 'fas fa-caret-down', width: 20, height: 20, css:'icon_section'},
		{width: 95},
		{view: 'button', type: 'image', image: 'plus.png', height: 50, width: 30, css: 'image_button_section'}
	], css: 'profile_section dummy_check'
};
var chatSection = {	type: 'clean', paddingX:10, height: 300, rows: [
		{animate: false, cells: [
			{template: "<div></div>"},
      { id:"a1", css:"draft", 
      	view: 'list', 
				select: true,
				type: {
					templateStart: "<div item_id='id' class = 'custom_item chat_user_info'>",
					template: "<div class = 'avatar' style = 'background-color: #backgroundColor#'>#dummyTitle#</div><div style = 'display: flex; justify-content: center; align-items: center;'><div class = 'title'> #value# </div></div>",
					templateEnd: "</div>"
				},
				header: false,
				data: chatbox, 
				scroll: true, css: "chatbox_section"},
      { id:"a2", css:"draft", 
      	view: 'list', 
				select: true,
				type: {
					templateStart: "<div item_id='id' class = 'custom_item chat_user_info'>",
					template: "<div class = 'avatar' style = 'background-color: #backgroundColor#'>#dummyTitle#</div><div style = 'display: flex; flex-direction: column; justify-content: flex-start; width: 180px;'><div class = 'title' style = 'color: #666; font-size: 13px;'> #value# </div><div class = 'message_section'><p style = 'color: #666; font-size: 11px;'>#message#</p></div></div>",
					templateEnd: "</div>"
				},
			header: false,
			data: chatbox, 
			scroll: true, css: "chatbox_section"},
      {template: "<div></div>"}
    ]},
		{ view: 'tabbar', value: 'a1', type: 'bottom', multiview: true, tabMinWidth: 50, options: [
			{value: ""},
      { id:"a1", value:"<span class='webix_icon fas fa-user'></span>", css: "icon_draft", width: 45},
      { id:"a2", value:"<span class='webix_icon fas fa-comment'></span>", css: "icon_draft", width: 45},
      {value: ""}
		], css: 'dummy_check', height: 30}
	]};

var leftSidebar = {rows: [
	menuSection,
	profileSection,
	chatSection
], width: 256};

var rightSidebar = {rows: [
		{view: 'button', type: 'image', image: 'calendar.png', height: 26, width: 26},
		{view: 'button', type: 'image', image: 'keep.png', height: 26, width: 26},
		{view: 'button', type: 'image', image: 'tasks.png', height: 26, width: 26},
		{template: '<div class = "border_line"></div>', height: 26, width: 26},
		{view: 'button', type: 'image', image: 'plus.png', height: 26, width: 26}
	], width: 55, css: 'right_sidebar dummy_check'
};

var appHeader = {height: 48, maxWidth: 996, padding: 10, cols:[
	{view: 'button', css: 'appheader_section', type: 'iconButton', icon: 'far fa-square', width: 20},
	{view: 'button', css: 'appheader_section_caret', type: 'iconButton', icon: 'fas fa-caret-down', width: 10},
	{view: 'button', css: 'appheader_section', type: 'iconButton', icon: 'fa fa-redo', width: 20},
	{view: 'button', css: 'appheader_section', type: 'iconButton', icon: 'fa fa-ellipsis-v', width: 20},
	{},
	{view: 'label', label: '<div class="flexed"><p>1-50 of 391</p></div>', width: 100, css: 'appheader_section right_move'},
	{view:"button", type:"iconButton", icon:"fa fa-chevron-left", width:20, css:"appheader_section right_move"},
  {view:"button", type:"iconButton", icon:"fa fa-chevron-right", width:20, css:"appheader_section right_move"},
	{view:"button", type:"iconButton", icon:"fas fa-cog", width: 20, css: "appheader_section right_move"}
]};

var mainContent = {
	view: 'datatable', scroll: 'y',
	columns: [
		{id: "check", css: "checkbox_section", template: function(obj) {
			return "<div class='"+(obj.check?"fa fa-check-square" : "far fa-square")+"'></div>"	
		}, width: 40},
		{id: "star", css: "star_section", template: function(obj){
				return "<span class = 'webix_icon orange_star "+(obj.star?"fas fa-star":"far fa-star")+"'></span>"
			}, width: 40},
		{id: "from", css: "sender_section", width: 200},
		{id: "subject",css: "subject_section", fillspace: true},
		{id: "date", css: "date_section"}		
	], header: false, 
		data:getData(), 
		select: true,
};

var infoTabs = {rows: [
	appHeader,
	mainContent
]};

webix.ui({
  view:"window",
  id: "window1",
  width:514,
  height:476,
  head:{view: "toolbar", css:"toolbar_compose_section", cols: [
  	{view: "label", label: "New Message", maxWidth: 420, css: "header_section"},
  	{view: "button", type: "iconButton", icon: "fas fa-chevron-down", width: 24, height: 24, css: "header_icon_section"},
  	{view: "button", type: "iconButton", icon: "fas fa-arrows-alt-v", width: 24, height: 24, css: "header_icon_section"},
  	{view: "button", type: "iconButton", icon: "fas fa-times", width: 24, height: 24, css: "header_icon_section", click: "$$('window1').hide();"}
  ]},
  headHeight: 40,
  autofit:false,
  body:{rows: [
  	{view: "text", label: "To", css: "text_label_section"},
  	{view: "text", placeholder: "Subject", css: "text_label_section"},
  	{view: "textarea", css: "textarea_label_section", fillspace: true},
  	{view: "toolbar", height: 60,css: "body_compose_section", cols: [
  		{view: "button", label: "Send", width: 72, height: 36, css: "send_button"},
	  	{view: "button", type: "iconButton", icon: "fas fa-underline", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "fas fa-paperclip", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "fas fa-link", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "far fa-grin", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "fab fa-google-drive", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "fas fa-image", width: 24, height: 24, css: "body_icon_section"},
	  	{template: "<p>Saved</p>", css: "text_compose_section"},
	  	{view: "button", type: "iconButton", icon: "fas fa-trash", width: 24, height: 24, css: "body_icon_section"},
	  	{view: "button", type: "iconButton", icon: "fas fa-ellipsis-v", width: 24, height: 24, css: "body_icon_section"},
  	]}
  ]}
});

webix.ui({
	rows: [
		topHeader,
		{
			cols: [
				leftSidebar,
				infoTabs,
				rightSidebar
			]
		}
	],
});

// $$("$list1").addCss(0, "webix_focused");


    // template:"Window Position:<br/><br/> Left offset is 200px, <br/> Top offset is 150px"
