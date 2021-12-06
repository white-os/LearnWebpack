/*
 * @Date: 2021-12-02 16:56:42
 * @LastEditors: bhy
 * @LastEditTime: 2021-12-03 16:04:32
 * @FilePath: \webpack\src\index.js
 */

async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    return element;
}

getComponent().then( (component) => {
    document.body.appendChild(component);
});