import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Icon } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 16 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 16 },
        sm: { span: 8 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class UserForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values); // eslint-disable-line
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                    {...formItemLayout}
                    label="First Name"
                >
                    {getFieldDecorator('firstName', {
                        rules: [{
                            required: true, message: 'Please input user first name!',
                        }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Last Name"
                >
                    {getFieldDecorator('lastName', {
                        rules: [{
                            required: true, message: 'Please input user last name!',
                        }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid e-mail!',
                        }, {
                            required: true, message: 'Please input user e-mail!',
                        }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Phone"
                >
                    {getFieldDecorator('phone', {
                        rules: [{
                            required: true, message: 'Please input user phone!',
                        }],
                    })(<Input suffix={<Icon type="phone" />} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        );
    }
}

UserForm.propTypes = {
    form: PropTypes.shape({
        getFieldDecorator: PropTypes.func.isRequired,
        validateFieldsAndScroll: PropTypes.func.isRequired,
    }).isRequired,
};

export default Form.create()(UserForm);
