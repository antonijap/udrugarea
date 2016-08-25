var $=require("gulp-load-plugins")(),gulp=require("gulp"),rimraf=require("rimraf").sync,sequence=require("run-sequence"),supercollider=require("supercollider"),COMPATIBILITY=["last 2 versions","ie >= 10","and_chr >= 2.3"];supercollider.config({template:"./docs/src/_template.hbs",extension:"md",marked:!1,handlebars:require("./lib/handlebars")}).adapter("sass"),gulp.task("clean",function(s){rimraf("./_build"),rimraf("./docs/*.md"),s()}),gulp.task("docs",function(){return gulp.src("./docs/src/*.md").pipe(supercollider.init()).pipe(gulp.dest("./docs"))}),gulp.task("sass",function(){return gulp.src("./motion-ui.scss").pipe($.sass().on("error",$.sass.logError)).pipe($.autoprefixer({browsers:COMPATIBILITY})).pipe(gulp.dest("./_build"))}),gulp.task("javascript",function(){return gulp.src("./motion-ui.js").pipe($.umd({dependencies:function(){return[{name:"jquery",amd:"jquery",cjs:"jquery",global:"jQuery",param:"$"}]},exports:function(){return"MotionUI"},namespace:function(){return"MotionUI"}})).pipe(gulp.dest("./_build"))}),gulp.task("dist",["dist:sass","dist:javascript"]),gulp.task("dist:sass",["sass"],function(){return gulp.src("./_build/motion-ui.css").pipe(gulp.dest("./dist")).pipe($.minifyCss()).pipe($.rename("motion-ui.min.css")).pipe(gulp.dest("./dist"))}),gulp.task("dist:javascript",["javascript"],function(){return gulp.src("./_build/motion-ui.js").pipe(gulp.dest("./dist")).pipe($.uglify()).pipe($.rename("motion-ui.min.js")).pipe(gulp.dest("./dist"))}),gulp.task("build",function(s){sequence("clean",["docs","sass","javascript"],s)}),gulp.task("lint",function(){return gulp.src("./src/**/*.scss").pipe($.scssLint())}),gulp.task("default",["build"],function(){gulp.watch(["./docs/src/*.md","./docs/src/_template.hbs"],["docs"]),gulp.watch(["./src/**/*.scss","./motion-ui.scss"],["sass"]),gulp.watch("./motion-ui.js",["javascript"])});