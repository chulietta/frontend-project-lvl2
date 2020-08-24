install:
	npm install

gendiff:
	npx babel-node -- dist/bin/gendiff.js

publish:
	npm publish --dry-run
