var topHeader = {template: "top", height: 64};

var categories = [
	{icon: 'fa fa-inbox', value: 'Inbox'},
	{icon: 'fa fa-star', value: 'Starred'},
	{icon: 'fa fa-comments', value: 'Sent Mail'},
	{icon: 'fa fa-file', value: 'Drafts'},
	{icon: 'fa fa-tags', value: 'Tigersheet'},
	{icon: 'fa fa-chevron-circle-down', value: 'More'}
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
var profileSection = {template: "Profile", height: 45}
var chatSection = {template: "Chat", height: 260};

var leftSidebar = {rows: [
	menuSection,
	profileSection,
	chatSection
], width: 256};

var rightSidebar = {template: "right", width: 55};

var appHeader = {template: "Menu tabs", height: 48};
var mainContent = {template: 'Main Content'};

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