import { Button, Table, Switch } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../components/common/Layout'
import ModalRemove from '../components/modal/remove'
import { QuestionAPI } from '../services'

class WorkSheets extends React.Component {
  state = {
    isLoading: false,
    tmpId: null,
    isShowModalRemove: false,
    questions: []
  }

  componentDidMount() {
    this._getQuestion()
  }

  _getQuestion = async () => {
    try {
      const res = await QuestionAPI.get()
      this.setState({
        questions: res.data.questions
      })
    } catch (e) {
      console.log(e)
    }
  }

  _remove = async () => {
    try {
      this.setState({
        isLoading: true
      })
      const res = await QuestionAPI.remove(this.state.tmpId)
      this.setState({
        questions: [...this.state.questions.filter(x => x.id !== this.state.tmpId)],
        tmpId: null,
        isShowModalRemove: false,
        isLoading: false
      })
    } catch (e) {
      this.setState({
        isLoading: false
      })
      console.log(e)
    }
  }

  _openModalRemove = (id) => {
    this.setState({
      tmpId: id,
      isShowModalRemove: true
    })
  }

  _closeModalRemove = () => {
    this.setState({
      tmpId: null,
      isShowModalRemove: false
    })
  }

  _toggleStatus = async (id) => {
    try {
      const { data: { question } } = await QuestionAPI.getById(id)
      const updatedEvent = await QuestionAPI.edit({
        answer: question.answer,
        choice_a_en: question.choice_a_en,
        choice_a_th: question.choice_a_th,
        choice_b_en: question.choice_b_en,
        choice_b_th: question.choice_b_th,
        choice_c_en: question.choice_c_en,
        choice_c_th: question.choice_c_th,
        choice_d_en: question.choice_d_en,
        choice_d_th: question.choice_d_th,
        id,
        status: question.status === 1 ? 0 : 1,
        title_en: question.title_en,
        title_th: question.title_th,
      })
      this._getQuestion()
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const columns = [{
      title: 'TOPIC',
      dataIndex: 'title_th',
      key: 'title_th',
      render: (title_th, record)=>
        <div>
          <div className="_mgbt-8px">{title_th}</div>
          <div className="_fs-8"><span><Link href={`/worksheets/edit/${record.id}`}><a>Edit</a></Link></span><span className="_mgh-8px">|</span><span className="_cs-pt" onClick={() => this._openModalRemove(record.id)}>Delete</span>
          </div>
        </div>,
      width: '15%'
    }, {
      title: 'QUESTION A',
      dataIndex: 'choice_a_th',
      key: 'choice_a_th',
      width: '15%'
    }, {
      title: 'QUESTION B',
      dataIndex: 'choice_b_th',
      key: 'choice_b_th',
      width: '15%'
    }, {
      title: 'QUESTION C',
      dataIndex: 'choice_c_th',
      key: 'choice_c_th',
      width: '15%'
    }, {
      title: 'QUESTION D',
      dataIndex: 'choice_d_th',
      key: 'choice_d_th',
      width: '15%'
    }, {
      title: 'ANSWER',
      dataIndex: 'answer',
      key: 'answer',
      width: '10%'
    }, {
      title: 'DATE',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (created_at) => <span>{moment(created_at).format('D MMM YY HH:mm')}</span>,
      width: '10%'
    }, {
      title: 'PUBLIC',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => <Switch checked={status === 1} onChange={() => this._toggleStatus(record.id)} />,
      width: '10%'
    },
  ]

    const { questions, isLoading, isShowModalRemove } = this.state

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300">
            <div className="_fs-4">ใบงาน</div>
            <Link href="/worksheets/add">
              <a>
                <Button icon="plus">เพิ่มใบงานใหม่</Button>
              </a>
            </Link>
          </div>
          <Table rowKey={record => record.id}  dataSource={questions} columns={columns} />
          <ModalRemove isShow={isShowModalRemove} remove={this._remove} closeModalRemove={this._closeModalRemove} isDeleting={isLoading} />
        </div>
      </Layout>
    )
  }
}

export default WorkSheets


