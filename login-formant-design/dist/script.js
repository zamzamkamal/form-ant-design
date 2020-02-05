"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
             };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
var Form = antd.Form, Icon = antd.Icon, Input = antd.Input, Button = antd.Button, Checkbox = antd.Checkbox;
var NormalLoginForm = /** @class */ (function (_super) {
    __extends(NormalLoginForm, _super);
        function NormalLoginForm() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.handleSubmit = function (e) {
                e.preventDefault();
                _this.props.form.validateFields(function (err, values) {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        };
            return _this;
    }
    NormalLoginForm.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
            return (React.createElement(Form, { onSubmit: this.handleSubmit, className: "login-form" },
            React.createElement(Form.Item, null, getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
            React.createElement(Form.Item, null, getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
            React.createElement(Form.Item, null,
                getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(React.createElement(Checkbox, null, "Remember me")),
                React.createElement(Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in"))));
    };
            return NormalLoginForm;
}(React.Component));
var WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
ReactDOM.render(React.createElement(WrappedNormalLoginForm, null), mountNode);