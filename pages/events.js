import { Button, Table, Switch } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../components/common/Layout'
import ModalRemove from '../components/modal/remove'
import { EventAPI } from '../services'

class Events extends React.Component {
  state = {
    isLoading: false,
    tmpId: null,
    isShowModalRemove: false,
    events: []
  }
  componentDidMount() {
    this._getEvent()
  }

  _getEvent = async () => {
    try {
      const res = await EventAPI.get()
      this.setState({
        events: res.data.events
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
      const res = await EventAPI.remove(this.state.tmpId)
      this.setState({
        events: [...this.state.events.filter(x => x.id !== this.state.tmpId)],
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
      const { data: { event } } = await EventAPI.getById(id)
      const updatedEvent = await EventAPI.edit({
        description_en: event.description_en,
        description_th: event.description_th,
        featured_image: event.featured_image_id.toString(),
        highlight: event.highlight,
        id,
        media_id: event.media.map(x => x.id).join(','),
        read_type: event.read_type,
        title_en: event.title_en,
        title_th: event.title_th,
        status: event.status === 1 ? 0 : 1,
        video_url: event.video_url,
        date: event.date
      })
      this._getEvent()
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
          <div className="_fs-8"><span><Link href={`/events/edit/${record.id}`}><a>Edit</a></Link></span><span className="_mgh-8px">|</span><span className="_cs-pt" onClick={() => this._openModalRemove(record.id)}>Delete</span>
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
      render: (status, record) => <Switch checked={status === 1} onChange={() => this._toggleStatus(record.id)} />,
      width: '10%'
    },
    // {
    //   title: 'HIGHLIGHT',
    //   dataIndex: 'highlight',
    //   key: 'highlight',
    //   render: highlight => <Switch checked={highlight === 1} onChange={() => {}} />,
    //   width: '10%'
    // }
  ]

    const { events, isLoading, isShowModalRemove } = this.state

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300">
            <div className="_fs-4">กิจกรรม</div>
            <Link href="/events/add">
              <a>
                <Button icon="plus">เพิ่มกิจกรรมใหม่</Button>
              </a>
            </Link>
          </div>
          <Table rowKey={record => record.id}  dataSource={events} columns={columns} />
          <ModalRemove isShow={isShowModalRemove} remove={this._remove} closeModalRemove={this._closeModalRemove} isDeleting={isLoading} />
        </div>
      </Layout>
    )
  }
}

export default Events


