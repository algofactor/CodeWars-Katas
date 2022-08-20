const configuration = {
    "name": "your-pack-name",
    "description": "dsgsgdfgsfsf",
    'main': '',
    'scripts': 'a set of commands that can be executed with npm run <cmd>',
    'keywords': ['an array of strings containing keywords that describe your application'],
    'bugs': 'https://www.example.com',
    'license': 'UNLICENSED',
    'author': 'the name, email and url in a single string or an object with these three properties',
    'contributors': [{"name" : "Barney Rubble",  "email" : "b@rubble.com",  "url" : "http://barnyrubble.tumblr.com/"}],
    'repository': {
                    "type": "git",
                    "url": "https://github.com/npm/cli.git"
                  },
    'private': true,
    'preferGlobal': true,
    'engines': {
                "npm": "~1.0.20"
              },
    'version': '1.1.1',
    'os': ['array of strings with supported OS'],
    'cpu': ['array of strings with supported CPU'],
    "scripts": {
                "precompress": "{{ executes BEFORE the `compress` script }}",
                "compress": "{{ run command to compress files }}",
                "postcompress": "{{ executes AFTER `compress` script }}"
              },
    'dependencies': {
                      "babel-core": "^6.0.0",
                      "babel-polyfill": "^6.0.0",
                      "babel-preset-es2015": "^6.0.0",
                      "babel-preset-stage-0": "^6.0.0"
                    },
    'devDependencies': {
                      "babel-core": "^6.0.0",
                      "babel-polyfill": "^6.0.0",
                      "babel-preset-es2015": "^6.0.0",
                      "babel-preset-stage-0": "^6.0.0"
                    }
  };
  // Hint: try creating with `npm init` command
  // Help! -> https://docs.npmjs.com/files/package.json