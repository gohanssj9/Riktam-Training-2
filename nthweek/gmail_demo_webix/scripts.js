function getData(){
	var data = [];
	for(var i=0; i<50; i++){
		data.push({
			check: Math.random() > 0.85 ? 1 : 0,
			star: Math.random() > 0.4 ? 1 : 0,
			from: "<p>Tigersheet.com</p>",
			subject: "<p>People WFH today - Hello all, People working from home today: Please login below to check the details. Click here. Cheers, Tigersheet.com Team </p>",
			date: "<p>Oct " + (19+Math.round(Math.random()*10)) + "</p>"
		});
	}
	return data;
}

var topHeader = {template: "top", height: 64};

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
var profileSection = {type: 'clean', height: 50, cols: [
		{view: 'button', css: 'profile_image', type: 'image', image: 'user_avatar.png', height: 32, width: 32},
		{value: 'Sriteja', width: 17},
		{view: 'button', type: 'iconButton', icon: 'fa fa-caret-down', width: 7, height: 4},
		{},
		{view: 'button', type: 'iconButton', icon: 'fa fa-plus', width: 30, height: 30}
	]
};
var chatSection = {template: "Chat", height: 360};

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
	{maxWidth: 630},
	{view: 'label', label: '<div class="flexed"><p>1-50 of 386</p></div>', width: 100, css: 'appheader_section'},
	{view:"button", type:"iconButton", icon:"fa fa-chevron-left", width:20, css:"appheader_section"},
  {view:"button", type:"iconButton", icon:"fa fa-chevron-right", width:20, css:"appheader_section"},
	{view:"button", type:"iconButton", icon:"fas fa-cog", width: 20, css: "appheader_section"}
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