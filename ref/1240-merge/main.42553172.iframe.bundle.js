(self.webpackChunkreact_photoswipe_gallery=self.webpackChunkreact_photoswipe_gallery||[]).push([[179],{"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./.yarn/__virtual__/@storybook-react-virtual-90fb6ba81f/0/cache/@storybook-react-npm-7.6.11-dfb10253e5-e662656c60.zip/node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./.yarn/__virtual__/@storybook-react-virtual-90fb6ba81f/0/cache/@storybook-react-npm-7.6.11-dfb10253e5-e662656c60.zip/node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./.yarn/__virtual__/@storybook-addon-essentials-virtual-478c70ee52/0/cache/@storybook-addon-essentials-npm-7.6.11-43692ae22b-2c0ad70b61.zip/node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./.storybook/preview.ts")])})},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{preview:()=>preview});var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/__virtual__/@storybook-theming-virtual-fb31a33639/0/cache/@storybook-theming-npm-7.6.11-7527822a16-b9f1bc8bf4.zip/node_modules/@storybook/theming/dist/chunk-ZGA76URP.mjs");const currentRef=encodeURIComponent("1240/merge"),currentSha="fd2baec716bb8366637a694adcecca9c8c3718ed",shortSha=currentSha?currentSha.substring(0,7):"local",createLogo=(theme="light")=>{const sha=shortSha;let ref=currentRef;ref.length>15&&(ref=`${ref.substring(0,15)}…`);const colors={light:"rgb(51, 51, 51)",dark:"rgb(255, 255, 255)"};return`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='202px' height='40px' viewBox='0 0 202 40' role='img'%0A%3E%3Ctitle%3EStorybook%3C/title%3E%3Ctext x='0' y='14' text-anchor='start' font-family='BlinkMacSystemFont, -apple-system, Arial, sans-serif' font-weight='bold' font-size='14' fill='${colors[theme]}' %3Ereact-photoswipe-gallery%3C/text%3E%3Ctext x='0' y='32' text-anchor='start' font-family='monospace' font-size='14' fill='${colors[theme]}' %3E${sha}@${ref}%3C/text%3E%3C/svg%3E`},brandSettings={brandTitle:`react-photoswipe-gallery/${currentRef} - Storybook${shortSha?` - ${shortSha}`:""}`,brandUrl:"https://github.com/dromru/react-photoswipe-gallery/"+("local"===currentRef?"":`tree/${currentRef}`)},preview={parameters:{controls:{hideNoControlsWarning:!0},darkMode:{stylePreview:!0,darkClass:"dark",lightClass:"light",classTarget:"html",dark:Object.assign(Object.assign(Object.assign({},_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.np.dark),brandSettings),{brandImage:createLogo("dark")}),light:Object.assign(Object.assign(Object.assign({},_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.np.light),brandSettings),{brandImage:createLogo("light")})},options:{storySort:{order:["Demo",["Basic","Cropped","Hash Navigation","Caption","Srcset","Download Button","Custom Content","Plugins"],"Dev"]}}}}},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./storybook/basic.stories":["./src/storybook/basic.stories.tsx",729,232],"./storybook/basic.stories.tsx":["./src/storybook/basic.stories.tsx",729,232],"./storybook/cropped.stories":["./src/storybook/cropped.stories.tsx",729,424],"./storybook/cropped.stories.tsx":["./src/storybook/cropped.stories.tsx",729,424],"./storybook/custom-content.stories":["./src/storybook/custom-content.stories.tsx",729,770],"./storybook/custom-content.stories.tsx":["./src/storybook/custom-content.stories.tsx",729,770],"./storybook/hash-navigation.stories":["./src/storybook/hash-navigation.stories.tsx",729,402],"./storybook/hash-navigation.stories.tsx":["./src/storybook/hash-navigation.stories.tsx",729,402],"./storybook/playground.stories":["./src/storybook/playground.stories.tsx",729,521],"./storybook/playground.stories.tsx":["./src/storybook/playground.stories.tsx",729,521],"./storybook/plugins.stories":["./src/storybook/plugins.stories.tsx",729,163],"./storybook/plugins.stories.tsx":["./src/storybook/plugins.stories.tsx",729,163],"./storybook/rotate-slide-button.stories":["./src/storybook/rotate-slide-button.stories.tsx",729,266],"./storybook/rotate-slide-button.stories.tsx":["./src/storybook/rotate-slide-button.stories.tsx",729,266],"./storybook/srcset.stories":["./src/storybook/srcset.stories.tsx",729,441],"./storybook/srcset.stories.tsx":["./src/storybook/srcset.stories.tsx",729,441],"./storybook/thumbnails-in-opened-photoswipe.stories":["./src/storybook/thumbnails-in-opened-photoswipe.stories.tsx",729,759],"./storybook/thumbnails-in-opened-photoswipe.stories.tsx":["./src/storybook/thumbnails-in-opened-photoswipe.stories.tsx",729,759],"./storybook/with-caption.stories":["./src/storybook/with-caption.stories.tsx",729,569],"./storybook/with-caption.stories.tsx":["./src/storybook/with-caption.stories.tsx",729,569],"./storybook/with-download-button.stories":["./src/storybook/with-download-button.stories.tsx",729,718],"./storybook/with-download-button.stories.tsx":["./src/storybook/with-download-button.stories.tsx",729,718],"./storybook/without-images.stories":["./src/storybook/without-images.stories.tsx",729,803],"./storybook/without-images.stories.tsx":["./src/storybook/without-images.stories.tsx",729,803]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[691],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);