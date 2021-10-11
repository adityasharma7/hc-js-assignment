
const merge = require('webpack-merge');
const themeRoot = require('@vue-storefront/core/build/theme-path');
const filterStream = require('postcss-filter-stream');


function addFilterStreamForPostCSSPlugin (loader, pluginName, filter) {
  const plugins = loader.options.plugins instanceof Function
    ? loader.options.plugins()
    : loader.options.plugins;
  const index = plugins.findIndex(plugin => plugin().postcssPlugin === pluginName);

  if (index !== -1) {
    plugins[index] = filterStream(filter, plugins[index]());
    loader.options.plugins = loader.options.plugins instanceof Function
      ? () => plugins
      : plugins;
  }
}


function fixPostCSSPlugins (rules) {
  const processedLoaders = [];

  rules.forEach(rule => {
    const loader = rule.use ? rule.use.find(item => item.loader === 'postcss-loader') : null;

    if (loader && !processedLoaders.includes(loader)) {
      addFilterStreamForPostCSSPlugin(loader, 'postcss-flexbugs-fixes', '**/@storefront-ui/**');
      processedLoaders.push(loader);
    }
  });
}

module.exports = function (config, { isClient }) {
  const clientConfig = isClient ? {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // cache groups are handled basing on priority - given module will belong to the cache group with a higher priority
        
          vendorInitial: {
            // create 'vendor' group from initial packages from node_modules except Storefront UI
            test: /node_modules/,
            name: 'vendor-initial',
            chunks: 'initial',
            priority: 1
          },
          vendorAsync: {
            // create 'vendor' group from async packages from node_modules except Storefront UI
            test: /node_modules/,
            name: 'vendor-async',
            chunks: 'async',
            priority: 1
          },
          searchAdapter: {
            // create one 'vsf-search-adapter' group
            test: /vsf-search-adapter/,
            name: 'vsf-search-adapter',
            priority: 1
          }
        }
      }
    }
  } : {}
  const mergedConfig = merge(
    // alias for 'src/modules/client' has to be the first one, because it has to be
    // handled earlier than already existing aliases in VSF (like general 'src' path)
    { resolve: { alias: { 'src/modules/client': `${themeRoot}/config/modules` } } },
    config, // default vsf config
    clientConfig
  );

  fixPostCSSPlugins(mergedConfig.module.rules);

  return mergedConfig;
};