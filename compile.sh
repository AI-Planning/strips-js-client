#!/bin/bash

node gen-grammar.js > source.js

cat main.js >> source.js

browserify source.js > strips.js


