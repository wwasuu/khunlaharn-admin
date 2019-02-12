import React from 'react'
import Router from 'next/router'
import { Button, Form, Input, Modal } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'
import 'biomatic/dist/biomatic.min.css'
import { AuthAPI } from '../services'

const FormItem = Form.Item

class Signin extends React.Component {

  static async getInitialProps({ req }) {
    const props = {}
    return props
  }

  state = {
    isLoading: false
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    this.props.form.validateFields((err, data) => {
      if (err) {
        this.setState({
          isLoading: false
        });
        return
      }
      this._signin(data.email, data.password)
    });
  }

  _signin = async (email, password) => {
    try {
      const res = await AuthAPI.signin(email, password)
      if (!res.data.status) {
        this.setState({
          isLoading: false
        })
        Modal.error({
          title: 'เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง',
        })
        return
      }
      localStorage.setItem('auth', JSON.stringify({
        username: email,
        email: email,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        expiredIn: moment().add(res.data.accessTokenDuration, 'seconds')
      }));
      Router.push({
        pathname: '/',
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const { isLoading } = this.state

    return (
      <div className="_v-100vw _h-100vh _dp-f _alit-ct _jtfct-ct">
        <div className="_bdw-1px _bdcl-gray-200 signin-box _pd-24px">
          <div className="_fs-4 _fw-600 _tal-ct _mgbt-24px">Khulaharn Admin</div>
          <Form onSubmit={this._handleSubmit}>
            <FormItem
              label="Email"
              colon={false}
            >
              {getFieldDecorator('email', {
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label="Password"
              colon={false}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem>
              <Button icon="login" htmlType="submit" className="_bgcl-warning _bdcl-warning _w-100pct" loading={isLoading}>Login</Button>
            </FormItem>
          </Form>
        </div>
        <style jsx global>{`
          .ant-layout-sider {
            background-color: #fff;
          }
          .ant-switch-checked {
            background-color: #f5b83d !important;
          }
          .ant-pagination-item-active {
            border-color: #f5b83d !important;

          }
          .ant-pagination-item-active > a {
            color: #f5b83d !important;
          }
          .ant-menu-item-selected {
            background-color: #f5b83d !important;
          }
          .ant-menu-item-selected > a {
            color: #fff;
          }
          .ant-menu-item:after {
            border: none !important;
          }
          .ant-menu-item-selected > a:hover {
            color: #fff !important;
          }
          .ant-btn-primary {
            background-color: #f5b83d !important;
          }
          .ant-menu-item > a:hover {
            color: #f5b83d;
          }
          .ant-btn:hover, .ant-btn:focus {
            color: #000;
            border-color: #f5b83d !important;
          }
          .ant-input:hover, .ant-input:focus {
            border-color: #f5b83d !important;
            box-shadow: 0 0 0 2px rgba(245, 184, 61, 0.2);
          }
          .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover  {
            border-color: #f5b83d !important;
          }
          .signin-box {
            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.05);
            width: 360px;
          }
        `}</style>
      </div>
    )
  }
}

export default Form.create()(Signin)