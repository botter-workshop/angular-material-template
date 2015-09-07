module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    var appRoot = 'app';
    var distRoot = 'dist';
    var cordovaRoot = 'cordova';

    grunt.initConfig({
        bower_concat: {
            default: {
                dest: distRoot + '/_bower.js',
                cssDest: distRoot + '/_bower.css'
            }
        },
        uglify: {
            options: {
        	       mangle: true
            },
            default: {
                src: [distRoot + '/_bower.js'],
                dest: distRoot + '/_bower.js'
            }
        },
        concat: {
            options: {
                sourceMap: true
            },
            default: {
                src: [
                    appRoot + '/**/*module.js',
                    appRoot + '/**/!(*spec)!(*module).js'
                ],
                dest: distRoot + '/app.js'
            }
        },
        clean: {
            default: distRoot,
            cordova: [
                cordovaRoot + '/www/**/*',
                '!' + cordovaRoot + '/www/README.md'
            ]
        },
        copy: {
            default: {
                files: [
                    {
                        expand: true,
                        cwd: appRoot,
                        src: [
                          '**',
                          '!**/*.js'
                        ],
                        dest: distRoot
                    }
                ]
            },
            cordova: {
                files: [
                    {
                        expand: true,
                        cwd: distRoot,
                        src: [
                          '**'
                        ],
                        dest: cordovaRoot + '/www'
                    }
                ]
            }
        },
        injector: {
            default: {
                options: {
                    ignorePath: distRoot,
                    addRootSlash: false
                },
                files: [
                    {
                        src: [
                            distRoot + '/**/*.js',
                            distRoot + '/**/*.css'
                        ],
                        dest: distRoot + '/index.html'
                    }
                ]
            }
        },
        cachebreaker: {
            default: {
                options: {
                    match: [
                        distRoot + '/app.js'
                    ],
                },
                files: {
                    src: [
                        distRoot + '/index.html'
                    ]
                }
            }
        },
        cordovacli: {
            options: {
                path: cordovaRoot
            },
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add'
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'cordova-plugin-crosswalk-webview'
                    ]
                }
            },
            default: {
                options: {}
            }
        },
        connect: {
            default: {
                options: {
                    port: 8080,
                    base: distRoot
                }
            }
        },
        watch: {
            default: {
                files: [
                    appRoot + '/**/*.html',
                    appRoot + '/**/!(*spec).js',
                    appRoot + '/**/*.css'
                ],
                tasks: ['default']
            }
        }
    });

    grunt.registerTask('default', [
        'clean:default',
        'bower_concat:default',
        'concat:default',
        'copy:default',
        'injector:default',
        'cachebreaker:default'
    ]);

    grunt.registerTask('serve', [
        'default',
        'connect:default',
        'watch:default'
    ]);

    grunt.registerTask('default:cordova', [
        'default',
        'clean:cordova',
        'copy:cordova'
    ]);

    grunt.registerTask('cordova', function (action, platform) {
        var actions = ['build', 'emulate', 'run'],
            platforms = ['android', 'ios'];
        
        if (actions.indexOf(action) < 0) {
            grunt.warn('Action not supported');
        }
        
        if (platforms.indexOf(platform) < 0) {
            grunt.warn('Platform not supported');
        }
        
        grunt.config('cordovacli.default.options.command', action);
        grunt.config('cordovacli.options.platforms', [platform]);
        
        grunt.task.run([
            'default:cordova',
            'cordovacli:add_platforms',
            'cordovacli:add_plugins',
            'cordovacli:default'
        ]);
    });  
};
