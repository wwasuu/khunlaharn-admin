import { Button, Form, Input, Switch, Select, Icon, Row, Col } from 'antd'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/common/Layout'
import { QuestionAPI } from '../../services'

const FormItem = Form.Item
const { TextArea } = Input

class EditWorkSheets extends React.Component {
  state = {
    question: null,
    isLoading: false,
    data: {
      status: false,
    },
  }

  componentDidMount() {
      this._getQuestion()
  }

  _getQuestion = async () => {
    try {
        const id = this.props.router.query.id
        const { data: { question } } = await QuestionAPI.getById(id)
        this.setState({
            question,
            data: {
                status: question.status === 1 ? true : false,
            }
        })
    } catch (e) {
        console.log(e)
    }
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
      this._createQuestion(data)
    });
  }

  _createQuestion = async (data) => {
    try {
      const result = await QuestionAPI.edit({
        id: this.state.question.id,
        ...data,
        status: this.state.data.status ? 1 : 0,
      })
      Router.push({
        pathname: '/worksheets',
      })
    } catch (e) {
      console.log(data)
    }
  }

  _changeStatus = () => {
    this.setState({
      data: {...this.state.data, status: !this.state.data.status}
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { isLoading , data: { status }, question } = this.state

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
          {
              question &&
            <div className="_pd-16px">
                <div className="form">
                <Form id="form" onSubmit={this._handleSubmit} className="login-form _pdr-8px">
                    <FormItem
                    label="ชื่อใบงาน"
                    colon={false}
                    >
                    {getFieldDecorator('title_th', {
                        initialValue: question.title_th,
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
                        initialValue: question.title_en,
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
                            {getFieldDecorator('choice_a_th', {
                                initialValue: question.choice_a_th,
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                            </Col>
                            <Col span={8}>
                            {getFieldDecorator('choice_a_en', {
                                initialValue: question.choice_a_en,
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
                            {getFieldDecorator('choice_b_th', {
                                initialValue: question.choice_b_th,
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                            </Col>
                            <Col span={8}>
                            {getFieldDecorator('choice_b_en', {
                                initialValue: question.choice_b_en,
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
                            {getFieldDecorator('choice_c_th', {
                                initialValue: question.choice_c_th,
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                            </Col>
                            <Col span={8}>
                            {getFieldDecorator('choice_c_en', {
                                initialValue: question.choice_c_en,
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
                            {getFieldDecorator('choice_d_th', {
                                initialValue: question.choice_d_th,
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                            </Col>
                            <Col span={8}>
                            {getFieldDecorator('choice_d_en', {
                                initialValue: question.choice_d_en,
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
                                initialValue: question.answer,
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
            }
        </div>
      </Layout>
    )
  }
}

export default Form.create()(withRouter(EditWorkSheets))