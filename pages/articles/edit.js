import { Button, Form, Input, Switch, Icon } from 'antd'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/common/Layout'
import Gallery from '../../components/modal/gallery'
import { ArticleAPI } from '../../services'

const FormItem = Form.Item
const { TextArea } = Input

class EditArticles extends React.Component {
  state = {
    article: null,
    isShowGallery: false,
    isLoading: false,
    images: [],
    galleryType: '',
    featuredImage: null,
    errorFeaturedImage: false,
  }

  componentDidMount() {
    this._getArticle()
  }

  _getArticle = async () => {
    try {
      const res = await ArticleAPI.getById(this.props.router.query.id)
      this.setState({
        article: {
          ...res.data.article,
          status: res.data.article.status === 1 ? true : false,
          highlight: res.data.article.highlight === 1 ? true : false,
        },
        images: res.data.article.media,
        featuredImage: (res.data.article.featured_image_id && res.data.article.featured_image) ? {
          media_url: res.data.article.featured_image,
          id: res.data.article.featured_image_id
        } : null
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
      this._storeArticle(data)
    });
  }

  _storeArticle = async (data) => {
    try {
      const payload = {
        ...data,
        read_type: 'article',
        status: this.state.article.status ? 1 : 0,
        highlight: this.state.article.highlight ? 1 : 0,
        id: this.state.article.id
      }
      if (this.state.featuredImage) {
        payload.featured_image = `${this.state.featuredImage.id}`
      }
      if (this.state.images.length) {
        payload.media_id = this.state.images.map(x => x.id).join(',')
      }
      const res = await ArticleAPI.edit(payload)
      Router.push({
        pathname: '/',
      })
    } catch (e) {
      console.log(e)
    }
  }

  _changeStatus = () => {
    this.setState({
      article: {...this.state.article, status: !this.state.article.status}
    })
  }

  _changeHighlight = () => {
    this.setState({
      article: {...this.state.article, highlight: !this.state.article.highlight}
    })
  }

  _openGallery = (type) => {
    this.setState({
      galleryType: type,
      isShowGallery: true
    })
  }

  _closeGallery = () => {
    this.setState({
      isShowGallery: false
    })
  }

  _setImages = (images) => {
    if (this.state.galleryType === 'FEATURED_IMAGE') {
      if (images.length) {
        this.setState({
          featuredImage: images[0],
          galleryType: ''
        })
      }
    } else {
      if ((this.state.images.length + images.length) > 10) {
        Modal.error({
          title: 'สามารถอัพโหลดไฟล์ได้สูงสุด 10 ไฟล์',
        })
        return
      }
      this.setState({
        images: [...this.state.images, ...images],
        galleryType: ''
      })
    }
  }

  _removeSelectedImage = (e) => {
    e.stopPropagation();
    const index = parseInt(e.currentTarget.attributes['data-id'].value)
    this.setState({
      images: this.state.images.filter((x, i) => i !== index ),
    })
  }

  _removeFeaturedImage = (e) => {
    e.stopPropagation();
    this.setState({
      featuredImage: null
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form
    const { isShowGallery, isLoading, article, galleryType, images, featuredImage } = this.state
    if (!article) {
      return null
    }
    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-white" style={{backgroundColor: '#001529'}}>
            <div className="_fs-4">แก้ไขบทความ</div>
            <div>
            <Button loading={isLoading} icon="save" className="_mgr-8px" form="form" key="submit" htmlType="submit">บันทึก</Button>
            <Link href="/articles" as="/">
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
                  label="ชื่อเรื่อง"
                  colon={false}
                >
                  {getFieldDecorator('title_th', {
                    initialValue: article.title_th,
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
                    initialValue: article.title_en,
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="เนื้อหา"
                  colon={false}
                >
                  {getFieldDecorator('description_th', {
                    initialValue: article.description_th,
                    rules: [{ required: true }],
                  })(
                    <TextArea rows={4}  />
                  )}
                </FormItem>
                <FormItem
                  label="Content"
                  colon={false}
                >
                  {getFieldDecorator('description_en', {
                    initialValue: article.description_en,
                    rules: [{ required: true }],
                  })(
                    <TextArea rows={4}  />
                  )}
                </FormItem>
                <FormItem
                  label="URL Video (Youtube only)"
                  colon={false}
                >
                  {getFieldDecorator('video_url', {
                    initialValue: article.video_url,
                  })(
                    <Input />
                  )}
                </FormItem>
                {/* <FormItem
                  label="ผู้เขียน"
                  colon={false}
                >
                  {getFieldDecorator('author_th', {
                    initialValue: article.author_th,
                    rules: [{ required: true }],
                  })(
                    <Input  />
                  )}
                </FormItem>
                <FormItem
                  label="Author"
                  colon={false}
                >
                  {getFieldDecorator('author_en', {
                    initialValue: article.author_en,
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="สถานที่"
                  colon={false}
                >
                  {getFieldDecorator('place_th', {
                    initialValue: article.place_th,
                    rules: [{ required: true }],
                  })(
                    <Input  />
                  )}
                </FormItem>
                <FormItem
                  label="Place"
                  colon={false}
                >
                  {getFieldDecorator('place_en', {
                    initialValue: article.place_en,
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem> */}
              </Form>
              <div className="_pdl-8px">
                <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Public</label>
                  </div>
                  <Switch checked={article.status} onChange={this._changeStatus} />
                </div>
                <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Highlight</label>
                  </div>
                  <Switch checked={article.highlight} onChange={this._changeHighlight} />
                </div>
                <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Featured</label>
                  </div>
                  <span className="_h-256px _bgcl-gray-200 _mgbt-12px _bdrd-4px _dp-f _fdrt-cl _alit-ct _jtfct-ct">
                    <div className={`ant-upload ant-upload-drag${this.state.errorFeaturedImage ? ' -error' : ''}`} onClick={() => this._openGallery('FEATURED_IMAGE')}>
                      {
                        featuredImage ?
                          <div className="_h-256px _pd-12px _pst-asl">
                            <Icon type="close-circle" className="_fs-5 _cl-accent _pst-asl _t-16px _r-16px" onClick={this._removeFeaturedImage} />
                            <img width="100%" height="100%" style={{objectFit: 'cover'}} className="_bdrd-4px" src={`${featuredImage.media_url}`} />
                          </div>
                        :
                        <span className="ant-upload ant-upload-btn">
                          <div className="ant-upload-drag-container">
                            <Button className="_mgbt-8px" icon="picture">เลือกรูปภาพ</Button>
                            <p className="_fw-600">เลือกได้ 1 ภาพ</p>
                          </div>
                        </span>
                      }
                    </div>
                  </span>
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
            <div>
              <div className="ant-form-item-label">
                <label>Gallery</label>
              </div>
              <span className="_bgcl-gray-200 _mgbt-12px _bdrd-4px _dp-f _fdrt-cl _alit-ct _jtfct-ct">
                <div className="_h-256px ant-upload ant-upload-drag _ovf-sc" onClick={() => this._openGallery('IMAGE')}>
                  {
                    images && images.length ?
                    <div className="selected-gallery _pd-24px">
                    {
                      images.map((x, i) => <div key={`${x.id}-${i}`} className="_pst-rlt">
                        <Icon type="close-circle" className="_pst-asl _t-4px _r-4px _fs-5 _cl-accent" data-id={i} onClick={this._removeSelectedImage} />
                        <img width="100%" src={`${x.media_url}`} />
                      </div>)
                    }
                    </div>
                    :
                    <span className="ant-upload ant-upload-btn">
                      <div className="ant-upload-drag-container">
                        <Button className="_mgbt-8px" icon="picture">เลือกรูปภาพ</Button>
                      </div>
                    </span>
                  }
                </div>
              </span>
            </div>
          </div>
        </div>
        <Gallery isShowGallery={isShowGallery} closeGallery={this._closeGallery} setImages={this._setImages} galleryType={galleryType} />
      </Layout>
    )
  }
}

export default Form.create()(withRouter(EditArticles))