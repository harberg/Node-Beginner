module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		jshint: {
			options: {
				"curly": true,
			  	"eqnull": true,
			  	"eqeqeq": true,
			  	"globals": {
			  		"jQuery": true
			  	}
			},
			target1: ['Gruntfile.js', '*.js']
		}
	});

	grunt.registerTask('default', ['jshint']);
};