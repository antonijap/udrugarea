module.exports={entry:"./js/entries/all.js",output:{path:"./_build/assets/js/",filename:"foundation.js"},externals:{jquery:"jQuery"},module:{loaders:[],rules:[{test:/\.js$/,use:[{loader:"babel-loader"}]}]}};