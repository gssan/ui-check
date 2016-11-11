import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Checkbox
 * @extend Component
 * @param {Object}       options.data           =  绑定属性
 * @param {String=''}    options.data.name      => 多选按钮的文字
 * @param {Boolean}      options.data.checked  <=> 多选按钮的状态
 * @param {Boolean}      options.data.readonly  => 是否只读
 * @param {Boolean}      options.data.disabled  => 是否禁用
 * @param {Boolean}      options.data.visible   => 是否显示
 * @param {String=''}    options.data.class     => 补充class
 */
const Checkbox = Component.extend({
    name: 'checkbox',
    template,
    /**
     * @protected
     * @overide
     */
    config() {
        this.defaults({
            name: '',
            checked: false
        });
        this.supr();
        this.watch();
    },
    watch() {
        this.$watch('checked', (newValue, oldValue) => {
            if (oldValue === undefined) {
                return;
            }

            /**
             * @event change 选中状态改变时触发
             * @property {Object} sender 事件发送对象
             * @property {Object} value 改变后的选中状态
             */
            this.$emit('change', {
                sender: this,
                value: newValue
            });
        });
    },
    /**
     * @method check(checked) 改变选中状态
     * @public
     * @param {Boolean} checked 选中状态。 在true和false间切换
     * @return {Void}
     */
    check(checked) {
        if (this.data.readonly || this.data.disabled) {
            return;
        }

        if (checked === undefined) {
            checked = !this.data.checked;
        }
        this.data.checked = checked;

        /**
         * @event check 改变选中状态时触发
         * @property {Object} sender 事件发送对象
         * @property {Boolean} checked 选中状态
         */
        this.$emit('check', {
            sender: this,
            checked: checked
        });
    }
});

export default Checkbox;
