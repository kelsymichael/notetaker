# React Notes

### webpack

entry (take things) => module:{loaders[]} (do some shit to it) => output (put that beautiful transformed input and put it somewhere)

` entry: [ ] `
^ array because you can have _multiple_ entry points (can put a string if you are living life on the edge, and have a single entry).

` module: { loaders: [] } `
Each loader needs ( 3 ) things
1. which filetype to transform
2. which directories to include or exclude
3. specific loader to run

` output: { filename: "name_of_file_created.js", path: __dirname  + '/dist'}`
// `__dirname` references directory of executing script

components
	- every component needs a *render* method

node modules
react
react-dom (with react-native, need something get react and the dom talking)
