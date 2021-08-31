// module.exports = {
//     plugins: {
//         autoprefixer: {},
//         "postcss-px2rem-exclude": { remUnit: 75, exclude: /node_modules/i },
//     },
// };
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        },
        'postcss-pxtorem': {
            rootValue: 75,
            propList: ['*'],
            selectorBlackList: ['van-'],

        }
    }
}