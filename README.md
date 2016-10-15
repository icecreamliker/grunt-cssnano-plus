# grunt-cssnano-plus

> A better cssnano grunt plugin for minifying CSS


## Install

```
$ npm install --save-dev grunt-cssnano-plus
```

## Advantages

- Support directory dest
- Support verbose message output

## Usage

```
grunt.initConfig({
  'cssnano': {
    options: {
      sourcemap: true
    },
    dist: {
      files: {
        'path/dist/index.min.css': 'path/src/index.css',
        'path/dist/app.min.css': 'path/src/app.css'
      }
    }
  }
});
```
Or compile all the CSS files into a specific directory:
```
grunt.initConfig({
  'cssnano': {
    options: {
      sourcemap: true
    },
    dist: {
      files: [{
          src: 'path/src/*.css',
          dest: 'path/dist/'
      }]
    }
  }
});
```
Or customize multi-tasks:
grunt.initConfig({
  'cssnano': {
    options: {
      sourcemap: true
    },
    subtask1: {
      files: [{
          src: 'path/src/*.css',
          dest: 'path/dist/'
      }]
    },
    subtask2: {
      files: {
        'dist/index.min.css': 'src/index.css',
        'dist/app.min.css': 'src/app.css'
      }
    }
  }
});
```


## Options

See the `cssnano` [options](https://github.com/ben-eb/cssnano#options).


## License

grunt-cssnano-plus is available under the terms of [the MIT license](LICENSE).