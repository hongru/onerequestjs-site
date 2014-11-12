module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            basic: {
                src: [

                ],
                dest: 'build/*.debug.js'
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'js/',
                        src: ['*.js'],
                        dest: 'build/js/',
                        ext: '.js'
                    }
                ]
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['*'],
                        cwd: 'images/',
                        dest: 'build/images/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        less: {
            dynamic_mappings: {
                options: {
                    paths: ["less"],
                    cleancss: true
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'less/',       // Src matches are relative to this path.
                        src: ['*.less'], // Actual pattern(s) to match.
                        dest: 'build/css/',   // Destination path prefix.
                        ext: '.css'   // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['uglify']
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        },
        onereq:  {
            options: {
                scriptClass: ['onereq'],
                minify: true
            },
            html: {
                files: [
                    {
                        cwd: './',
                        src: ['*.html', '*.htm'],
                        dest: 'dest/',
                        ext: '.html'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-onereq');

    grunt.registerTask('default', ['less', 'uglify', 'copy', 'watch']);
    grunt.registerTask('build', ['less', 'uglify', 'copy', 'onereq']);
    

}