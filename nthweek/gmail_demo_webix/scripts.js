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

var topHeader = {type: 'clean', height: 64, cols: [
	{view: "button", type: "iconButton", icon: "fas fa-bars", width: 30, height: 40, css: "topheader_section"},
	{template: "<div class = 'logo_inner'></div>", css: "logo", height: 40, width: 200},
	searchBar
]};

var categories = [
	{icon: 'category fa fa-inbox', value: 'Inbox'},
	{icon: 'category fa fa-star', value: 'Starred'},
	{icon: 'category fas fa-clock', value: 'Snoozed'},
	{icon: 'category fa fa-comments', value: 'Sent Mail'},
	{icon: 'category fa fa-file', value: 'Drafts'},
	{icon: 'category fa fa-tags', value: 'Tigersheet'},
	{icon: 'category fa fa-chevron-circle-down', value: 'More'}
];

var menuSection = {
	padding: 10,
	margin: 10,
	height: 250,
	rows: [
		{view: 'button', type: 'image', image: 'plus_logo.png', label: 'Compose', height: 55, width: 150},
		{view: 'list', 
			select: true,
			columns: [
				{id: 'icon', height: 20, width: 20, marginRight: 18},
				{id: 'menuOption', fillspace: true}
			],
			header: false,
			data: categories, 
			scroll: true}
	]
};
var profileSection = {height: 50, cols: [
		{view: 'button', css: 'profile_image', type: 'image', image: 'user_avatar.png', height: 32, width: 32},
		{template: '<div class="text_inside"><p>Sriteja</p></div>', width: 40, css: 'text_section'},
		{view: 'button', type: 'iconButton', icon: 'fas fa-caret-down', width: 20, height: 20, css:'icon_section'},
		{width: 95},
		{view: 'button', type: 'image', image: 'plus.png', height: 50, width: 30, css: 'image_button_section'}
	], css: 'profile_section'
};

var chatSection = {	type: 'clean', paddingX:10, height: 300, rows: [
		{animate: false, cells: [
			{template: "<div></div>"},
      { id:"a1", css:"draft", 
      	view: 'list', 
					select: false,
					columns: [
						{id: 'icon', template: "<div class = 'avatar'>S</div>", css: "user_info", width: 60},
						{id: 'menuOption', fillspace: true}
					],
				header: false,
				data: categories, 
				scroll: true},
      { id:"a2", css:"draft", 
      	view: 'list', 
					select: true,
				columns: [
					{id: 'icon', height: 20, width: 20, marginRight: 18},
					{id: 'menuOption', fillspace: true}
			],
			header: false,
			data: categories, 
			scroll: true},
      {template: "<div></div>"}
    ]},
		{ view: 'tabbar', value: 'a1', type: 'bottom', multiview: true, tabMinWidth: 50, options: [
			{value: ""},
      { id:"a1", value:"<span class='webix_icon fas fa-user'></span>", css: "icon_draft"},
      { id:"a2", value:"<span class='webix_icon fas fa-comment'></span>", css: "icon_draft" },
      {value: ""}
		]}
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
	], width: 55, css: 'right_sidebar'
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
		{id: "from", css: "sender_section", width: 150},
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
	rows: [
		topHeader,
		{
			cols: [
				leftSidebar,
				infoTabs,
				rightSidebar
			]
		}
	]
});