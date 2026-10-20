// 这个插件是冗余的：feather-icon 已经在 plugins/globalComponents.js 里注册过了。
// 重复注册会让 Vue 在每个页面都刷 "Component 'feather-icon' has already been
// registered in target app" 警告，所以这里直接移除。
export default defineNuxtPlugin(() => {});
