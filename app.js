// Declare all components available.
// We could break this up into separate files for each component, etc.
var components = {

	Row: Ractive.extend({
		template: '<div class="row">{{>content}}</div>'
	}),

	Button: Ractive.extend({
		template: '<a href="#" class="button">{{title}}</a>'
	})

};

// Init and render.
var ractive = new Ractive({
	el: '#main',
	template: '#template',
	components: components
});