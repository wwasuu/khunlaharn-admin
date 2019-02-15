import { Button, Table, Switch } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../components/common/Layout'
import ModalRemove from '../components/modal/remove'

class WorkSheets extends React.Component {
  state = {
    isLoading: false,
    tmpId: null,
    isShowModalRemove: false,
  }

  componentDidMount() {
  }

  render () {
    const columns = [{
      title: 'TOPIC',
      dataIndex: 'title_th',
      key: 'title_th',
      render: (title_th, record)=>
        <div>
          <div className="_mgbt-8px">{title_th}</div>
          <div className="_fs-8"><span><Link href={`/events/edit?id=${record.id}`}><a>Edit</a></Link></span><span className="_mgh-8px">|</span><span className="_cs-pt" onClick={() => this._openModalRemove(record.id)}>Delete</span>
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
    },
  ]

    const { events, isLoading, isShowModalRemove } = this.state

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
          <Table rowKey={record => record.id}  dataSource={events} columns={columns} />
          {/* <ModalRemove isShow={isShowModalRemove} remove={this._remove} closeModalRemove={this._closeModalRemove} isDeleting={isLoading} /> */}
        </div>
      </Layout>
    )
  }
}

export default WorkSheets

