# grunt-cssnano-plus

> A better cssnano grunt plugin for minifying CSS


## Install

```
$ npm install --save-dev grunt-cssnano-plus
```

## Advantages

- Support verbose message output
- Support directory dest

## Usage

```js

grunt.initConfig({
	cssnano: {
		options: {
			sourcemap: true
		},
		dist: {
			files: {
			    'dist/index.min.css': 'src/index.css',
				'dist/app.min.css': 'src/app.css'
			}
		}
	}
});

grunt.registerTask('default', ['cssnano']);
```


## Options

See the `cssnano` [options](https://github.com/ben-eb/cssnano#options).


## License

grunt-cssnano-plus is available under the terms of [the MIT license](LICENSE).