/*Developer Config*/

import path from 'path';

export default{
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    /*Creates files below in memory for dev env.  For production env, another way to build the files*/
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders:['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }

}
