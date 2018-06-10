# FALS-OneNote
OneNote Office 365 AddIn for FALS

# Prerequisites
* Node.js 6+ (tested on 8.11.1) with NPM (tested on 5.6.0)
* Maven (optional, for java to ts generation, npm run gen)

# Setup and run

For localhost and browsersync:

1) npm install
2) \[optional\] npm run gen
3) npm run createStorage
4) npm run start
5) npm run backend

For server setup a separate package.json, server.ts and possibly other files should be branched.

# Office integration

1) Open web oneNote -> Insert -> Office Addin
2) Select file	fals-one-note-manifest.xml located in root project directory
