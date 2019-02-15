import { Button, Table, Switch } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../components/common/Layout'
import ModalRemove from '../components/modal/remove'
import { ArticleAPI } from '../services'

class Knowledge extends React.Component {

  state = {
    isLoading: false,
    tmpId: null,
    isShowModalRemove: false,
    knowledges: []
  }

  componentDidMount() {
    this._getKnowledges()
  }

  _getKnowledges = async () => {
    try {
      const res = await ArticleAPI.get('knowledge')
      this.setState({
        knowledges: res.data.articles
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
      const res = await ArticleAPI.remove(this.state.tmpId)
      this.setState({
        knowledges: [...this.state.knowledges.filter(x => x.id !== this.state.tmpId)],
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

  render () {
    const { knowledges, isLoading, isShowModalRemove } = this.state

    const columns = [{
      title: 'TOPIC',
      dataIndex: 'title_th',
      key: 'title_th',
      render: (title_th, record) =>
      <div>
        <div className="_mgbt-8px">{title_th}</div>
        <div className="_fs-8">
          <span><Link href={`/knowledges/edit?id=${record.id}`}><a>Edit</a></Link></span>
          <span className="_mgh-8px">|</span>
          <span className="_cs-pt" onClick={() => this._openModalRemove(record.id)}>Delete</span>
        </div>
      </div>,
      width: '60%'
    }, {
      title: 'DATE',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (created_at) => <span>{moment(created_at).format('D MMM YY HH:mm')}</span>,
      width: '20%'
    }, {
      title: 'PUBLIC',
      dataIndex: 'status',
      key: 'status',
      render: status => <Switch checked={status === 1} onChange={() => {}} />,
      width: '10%'
    }, {
      title: 'HIGHLIGHT',
      dataIndex: 'highlight',
      key: 'highlight',
      render: highlight => <Switch checked={highlight === 1} onChange={() => {}} />,
      width: '10%'
    }]

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300">
            <div className="_fs-4">ความรู้</div>
            <Link href="/knowledges/add">
              <a>
                <Button icon="plus">เพิ่มความรู้ใหม่</Button>
              </a>
            </Link>
          </div>
          <Table rowKey={record => record.id}  dataSource={knowledges} columns={columns} />
          <ModalRemove isShow={isShowModalRemove} remove={this._remove} closeModalRemove={this._closeModalRemove} isDeleting={isLoading} />
        </div>
      </Layout>
    )
  }
}

export default Knowledge


