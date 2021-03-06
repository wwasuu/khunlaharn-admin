import { Button, Table, Switch } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../components/common/Layout'
import ModalRemove from '../components/modal/remove'
import { ArticleAPI } from '../services'

class Article extends React.Component {

  state = {
    isLoading: false,
    tmpId: null,
    isShowModalRemove: false,
    articles: []
  }

  componentDidMount() {
    this._getArticles()
  }

  _getArticles = async () => {
    try {
      const res = await ArticleAPI.get('article')
      this.setState({
        articles: res.data.articles
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
        articles: [...this.state.articles.filter(x => x.id !== this.state.tmpId)],
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
    console.log('closeModalRemove')
    this.setState({
      tmpId: null,
      isShowModalRemove: false
    })
  }

  _toggleStatus = async (id) => {
    try {
      const { data: { article } } = await ArticleAPI.getById(id)
      const updatedArticle = await ArticleAPI.edit({
        description_en: article.description_en,
        description_th: article.description_th,
        featured_image: article.featured_image_id.toString(),
        highlight: article.highlight,
        id,
        media_id: article.media ? article.media.map(x => x.id).join(',') : null,
        read_type: article.read_type,
        title_en: article.title_en,
        title_th: article.title_th,
        status: article.status === 1 ? 0 : 1,
        video_url: article.video_url
      })
      this._getArticles()
    } catch (e) {
      console.log(e)
    }
  }

  _toggleHighlight = async (id) => {
    try {
      const { data: { article } } = await ArticleAPI.getById(id)
      const updatedArticle = await ArticleAPI.edit({
        description_en: article.description_en,
        description_th: article.description_th,
        featured_image: article.featured_image_id.toString(),
        highlight: article.highlight === 1 ? 0 : 1,
        id,
        media_id: article.media ? article.media.map(x => x.id).join(',') : null,
        read_type: article.read_type,
        title_en: article.title_en,
        title_th: article.title_th,
        status: article.status,
        video_url: article.video_url
      })
      this._getArticles()
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
          <div className="_fs-8"><span><Link href={`/articles/edit?id=${record.id}`} as={`/articles/edit/${record.id}`}><a>Edit</a></Link></span><span className="_mgh-8px">|</span><span className="_cs-pt" onClick={() => this._openModalRemove(record.id)}>Delete</span>
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
    }, {
      title: 'HIGHLIGHT',
      dataIndex: 'highlight',
      key: 'highlight',
      render: (highlight, record) => <Switch checked={highlight === 1} onChange={() => this._toggleHighlight(record.id)} />,
      width: '10%'
    }]

    const { articles, isLoading, isShowModalRemove } = this.state

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300">
            <div className="_fs-4">บทความ</div>
            <Link href="/articles/add" as="/articles/add">
              <a>
                <Button icon="plus">เพิ่มบทความใหม่</Button>
              </a>
            </Link>
          </div>
          <Table rowKey={record => record.id} dataSource={articles} columns={columns} />
          <ModalRemove isShow={isShowModalRemove} remove={this._remove} closeModalRemove={this._closeModalRemove} isDeleting={isLoading} />
        </div>
      </Layout>
    )
  }
}

export default Article


