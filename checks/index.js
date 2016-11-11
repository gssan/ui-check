import { ListView, Item } from 'rgui-ui-listview';
import template from './index.rgl';
import checkTemplate from './check.rgl';

/**
 * @class Checks
 * @extend ListView
 * @param {Object}       options.data                 =  绑定属性
 * @param {Var}          options.data.value          <=> 当前选择的值
 * @param {Boolean}      options.data.multiple        => 是否支持多选，这里支持
 * @param {Boolean}      options.data.cancelable      => 是否可以
 * @param {Boolean}      options.data.readonly        => 是否只读
 * @param {Boolean}      options.data.disabled        => 是否禁用
 * @param {Boolean}      options.data.visible         => 是否显示
 * @param {String=''}    options.data.class           => 补充class
 */
const Checks = ListView.extend({
    name: 'checks',
    template
});

const Check = Item.extend({
    name: 'check',
    template: checkTemplate
});

export default Checks;
