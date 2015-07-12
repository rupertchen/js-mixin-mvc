module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: 'min'
      },
      build: {
        options: {
          sourceMap: true,
          mangle: false
        },
        files: {
          'build/<%= pkg.name %>.min.js': ['lib/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};

