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
var Form = antd.Form, Select = antd.Select, Input = antd.Input, Button = antd.Button;
var Option = Select.Option;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };
        _this.handleSelectChange = function (value) {
            console.log(value);
            _this.props.form.setFieldsValue({
                welcome: "Welcome to, " + (value === 'dota' ? 'Dota' : 'Assassin') + "!",
            });
        };
        return _this;
    }
    App.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return (React.createElement(Form, { labelCol: { span: 5 }, wrapperCol: { span: 7 }, onSubmit: this.handleSubmit },
            React.createElement(Form.Item, { label: "Welcome" }, getFieldDecorator('welcome', {
                rules: [{ required: true, message: 'Please input your game!' }],
         })(React.createElement(Input, null))),
            React.createElement(Form.Item, { label: "Game" }, getFieldDecorator('game', {
                rules: [{ required: true, message: 'Please select your game!' }],
         })(React.createElement(Select, { placeholder: "Select a option and change input text above", onChange: this.handleSelectChange },
            React.createElement(Option, { value: "dota" }, "dota"),
            // React.createElement(Option, { value: "ouija" }, "ouija")            
            React.createElement(Option, { value: "assassin" }, "assassin")))),
            React.createElement(Form.Item, { wrapperCol: { span: 12, offset: 5 } },
            React.createElement(Button, { type: "primary", htmlType: "submit" }, "Submit"))));
    };
        return App;
}(React.Component));
var WrappedApp = Form.create({ name: 'coordinated' })(App);
ReactDOM.render(React.createElement(WrappedApp, null), mountNode);