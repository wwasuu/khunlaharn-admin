import { Button, Form, Input, Switch, Select, Icon, Row, Col } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../../components/common/Layout'

const FormItem = Form.Item
const { TextArea } = Input

class AddWorkSheets extends React.Component {
  state = {
    isShowGallery: false,
    isLoading: false,
    data: {
      status: false,
      highlight: false
    },
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
      if (!this.state.featuredImage) {
        this.setState({
          isLoading: false,
          errorFeaturedImage: true,
        });
        return
      } else {
        this.setState({
          isLoading: false,
          errorFeaturedImage: false,
        });
      }
      this._createArticle(data)
    });
  }

  _changeStatus = () => {
    this.setState({
      data: {...this.state.data, status: !this.state.data.status}
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { isLoading , data: { status, highlight }, featuredImage, images } = this.state

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-white" style={{backgroundColor: '#001529'}}>
            <div className="_fs-4">เพิ่มใบงานใหม่</div>
            <div>
            <Button loading={isLoading} icon="save" className="_mgr-8px" form="form" key="submit" htmlType="submit">บันทึก</Button>
            <Link href="/worksheets">
              <a>
                <Button icon="close">ยกเลิก</Button>
              </a>
            </Link>
            </div>
          </div>
          <div className="_pd-16px">
            <div className="form">
              <Form id="form" onSubmit={this._handleSubmit} className="login-form _pdr-8px">
                <FormItem
                  label="ชื่อใบงาน"
                  colon={false}
                >
                  {getFieldDecorator('title_th', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="Title"
                  colon={false}
                >
                  {getFieldDecorator('title_en', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="ตัวเลือก (Choice)"
                  colon={false}
                >
                    <Row gutter={12}>
                        <Col span={1}>
                        </Col>
                        <Col span={8}>
                        ภาษาไทย
                        </Col>
                        <Col span={8}>
                        ภาษาอังกฤษ
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                >
                    <Row gutter={12}>
                        <Col span={1}>
                        A).
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_a_th', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_a_en', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                >
                    <Row gutter={12}>
                        <Col span={1}>
                        B).
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_b_th', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_b_en', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                >
                    <Row gutter={12}>
                        <Col span={1}>
                        C).
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_c_th', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_c_en', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                >
                    <Row gutter={12}>
                        <Col span={1}>
                        D).
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_d_th', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={8}>
                        {getFieldDecorator('quest_d_en', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                label="คำตอบ"
                colon={false}
                >
                <Row>
                <Col span={4}>
                    {getFieldDecorator('answer', {
                                rules: [{ required: true }],
                            })(
                                <Select>
                            <Select.Option value="a">A</Select.Option>
                            <Select.Option value="b">B</Select.Option>
                            <Select.Option value="c">C</Select.Option>
                            <Select.Option value="d">D</Select.Option>
                        </Select>
                            )}
                            </Col>
                        </Row>
                </FormItem>
              </Form>
              <div className="_pdl-8px">
                <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Public</label>
                  </div>
                  <Switch checked={status} onChange={this._changeStatus} />
                </div>
              </div>
            </div>
            <style jsx>{`
              .form {
                display: grid;
                grid-template-columns: 70% 30%;
              }
              .selected-gallery {
                display: grid;
                min-height: 360px;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                grid-gap: 8px;
              }
              .selected-gallery > div > img {
                border-radius: 4px;
                height: 120px;
                object-fit: cover;
              }
              .ant-upload.ant-upload-drag.-error {
                border: 1px solid red !important;
              }
            `}</style>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Form.create()(AddWorkSheets)