module.exports = {
	livereload: {
		files: ['assets/css/project-theme.min.css', 'assets/js/**/*.js', '*.html', '*.php', 'images/src/**/*.{png,jpg,jpeg,gif,webp,svg}', 'assets/grunticon/output/grunticon.loader-file.js'],
		options: {
			livereload: true
		}
	},
	css: {
		files: ['assets/css/sass/**/*.scss'],
		tasks: ['css'],
		options: {
			debounceDelay: 500
		}
	},
	js: {
		files: ['assets/js/src/**/*.js', 'assets/js/vendor/**/*.js', 'assets/grunticon/svgs/*.svg'],
			tasks: ['js'],
			options: {
			debounceDelay: 500
		}
	},
	image: {
		files: ['assets/images/src/**/*', 'assets/images/src/**/*'],
		tasks: ['image'],
		options: {
			debounceDelay: 500
		}
	}
};
