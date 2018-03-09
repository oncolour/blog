'use strict';
module.exports = function (grunt) {

    grunt.initConfig({

        // Load the Package file so we can reference its info if necessary
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: false,
            },
            dist: {
                files: {
                    './assets/_build/main-css.css': './assets/sass/*.{scss,sass}'
                }
            }
        },

        cssmin: {
            options: {
                report: 'min',
                keepSpecialComments: 0,
                sourceMap: true
            },
            rebaseTo: {
                files: [{
                    expand: true,
                    cwd: './assets/_build',
                    src: [
						'**/*.css',
						'!**/*.min.css'
					],
                    dest: './css',
                    ext: '.min.css'
				}]
            }
        },

        uglify: {
            my_target: {
                files: {
                    './js/main-javascript.min.js': ['./assets/js/*.js'],
                    './js/main.min.js': './assets/js/main.js'
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 4,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: './assets/images',
                    src: '**/*.{png,jpg,gif}',
                    dest: './images'
				}]
            }
        },

        watch: {
            sass: {
                files: './assets/sass/**/*.{scss,sass}',
                tasks: 'sass'
            },
            cssmin: {
                files: './assets/_build/**/*.css',
                tasks: 'cssmin'
            },
            js: {
                files: './assets/js/**/*.js',
                tasks: [
            					'uglify'
            				]
            },
            imagemin: {
                files: '.assets/images/**/*.{png,jpg,gif}',
                tasks: 'newer:imagemin'
            },
            configFiles: {
                files: [
            					'Gruntfile.js',
            					'package.json'
            				],
                options: {
                    reload: true
                },
                tasks: [
            					'sass',
            					'cssmin',
            					'uglify',
                    'newer:imagemin',
            					'watch'
            				]
            }
        }


    });

    /** Load NPM Tasks **/
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    /** Register Tasks **/
    grunt.registerTask('default', ['sass', 'uglify', 'cssmin', 'newer:imagemin', 'watch']);
    grunt.registerTask('dev', ['newer:sass', 'newer:uglify', 'newer:cssmin', 'newer:imagemin', 'watch']);

};
