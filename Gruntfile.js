module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        excel_vocabulary: {
            second: {
                files: [{
                    expand: true,
                    cwd: 'public/json',
                    dest: 'public/json',
                    src: [
                        '**/*.xlsx'
                    ],
                    ext: '.json'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-excel-vocabulary');
    grunt.registerTask('default', ['grunt-excel-vocabulary']);
};