
var fs = require('fs');
var path = require("path");
var mkdir = require("mkdirp");

var TEMPLATE_DIR = path.join(__dirname, "pkg"); // laver sti helt fra C drevet og frem til pkg mappen i gulp-intro mappen

var MODE_0666 = parseInt('0666',8);

if(!fs.existsSync("./package.json")){
	console.log("Please run <npm init> before you run this file");
	process.exit(1);
}

function copyFile(from, to){
	write(to, fs.readFileSync(path.join(TEMPLATE_DIR, from), 'utf-8'));
}

function copyFiles(fromDir, toDir){
	fs.readFileSync(path.join(TEMPLATE_DIR, fromDir)).forEach((file)=>{
		copyFile(path.join(fromDir, file), path.join(toDir, file));
	})
}

function write(file, str, mode){
	fs.writeFileSync(file, str, { mode:mode || MODE_0666 })
	console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}

mkdir.sync("./tasks");
mkdir.sync("./src");
mkdir.sync("./src/html");
mkdir.sync("./src/html/layouts");
mkdir.sync("./src/scss");
mkdir.sync("./src/js");
mkdir.sync("./src/img");
mkdir.sync("./src/media");

copyFiles("tasks", "./tasks");
copyFiles("src/html", "./src/html");
copyFiles("src/html/layouts", "./src/html/layouts");
copyFiles("src/scss", "./src/scss");
copyFiles("src/scss", "./src/scss");
copyFiles("src/js", "./src/js");
copyFiles("src/img", "./src/img");
copyFiles("src/media", "./src/media");
copyFile("gulpfile.js", "./gulpfile.js");

var package = require("./package");

package.devDependencies = {
    "@babel/core": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.2.0",
    "gulp-concat": "^2.6.1",
    "gulp-connect": "^5.7.0",
    "gulp-declare": "^0.3.0",
    "gulp-imagemin": "^6.2.0",
    "gulp-pug": "^4.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.5",
    "gulp-terser": "^1.2.0",
    "imagemin-jpeg-recompress": "^6.0.0"
  };

  write("./package.json", package);





// fs.copyFileSync("./pkg/gulpfile.js", "./gulpfile.js");



// var tasks = fs.readdirSync("./pkg/tasks");
// fs.mkdirSync("./src");
// fs.mkdirSync("./tasks");
// tasks.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/tasks/${file}`, `./tasks/${file}`);
// });

// var html = fs.readdirSync("./pkg/src/html");

// fs.mkdirSync("./src/html");
// html.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/src/html/${file}`, `./src/html/${file}`);
// });

// var scss = fs.readdirSync("./pkg/src/scss");

// fs.mkdirSync("./src/scss");
// scss.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/src/scss/${file}`, `./src/scss/${file}`);
// });

// var js = fs.readdirSync("./pkg/src/js");

// fs.mkdirSync("./src/js");
// js.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/src/js/${file}`, `./src/js/${file}`);
// });

// var img = fs.readdirSync("./pkg/src/img");

// fs.mkdirSync("./src/img");
// js.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/src/img/${file}`, `./src/img/${file}`);
// });


// var media = fs.readdirSync("./pkg/src/media");

// fs.mkdirSync("./src/media");
// media.forEach((file)=>{
// 	fs.copyFileSync(`./pkg/src/media/${file}`, `./src/media/${file}`);
// });




