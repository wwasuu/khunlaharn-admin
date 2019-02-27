import { Button, Form, Input, Switch, DatePicker, Icon } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../../components/common/Layout'
import Gallery from '../../components/modal/gallery'
import { EventAPI } from '../../services'

const FormItem = Form.Item
const { TextArea } = Input

class AddEvent extends React.Component {
  state = {
    isShowGallery: false,
    isLoading: false,
    data: {
      status: false,
      highlight: false
    },
    featuredImage: null,
    errorFeaturedImage: false,
    images: [],
    galleryType: '',
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
      this._createEvent(data)
    });
  }

  _createEvent = async (data) => {
    try {
      let payload = {
        ...data,
        status: this.state.data.status ? 1 : 0,
        highlight: this.state.data.highlight ? 1 : 0,
      }
      if (this.state.featuredImage) {
        payload.featured_image = `${this.state.featuredImage.id}`
      }
      if (this.state.images.length) {
        payload.media_id = this.state.images.map(x => x.id).join(',')
      }
      const res = await EventAPI.create(payload)
      Router.push({
        pathname: '/events',
      })
    } catch (e) {
      console.log(e)
    }
  }


  _changeStatus = () => {
    this.setState({
      data: {...this.state.data, status: !this.state.data.status}
    })
  }

  _changeHighlight = () => {
    this.setState({
      data: {...this.state.data, highlight: !this.state.data.highlight}
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
    const { isShowGallery, isLoading , data: { status, highlight }, featuredImage, images, galleryType } = this.state

    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-white" style={{backgroundColor: '#001529'}}>
            <div className="_fs-4">เพิ่มกิจกรรม</div>
            <div>
            <Button loading={isLoading} icon="save" className="_mgr-8px" form="form" key="submit" htmlType="submit">บันทึก</Button>
            <Link href="/events">
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
                  label="เนื้อหา"
                  colon={false}
                >
                  {getFieldDecorator('description_th', {
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
                    rules: [{ required: true }],
                  })(
                    <TextArea rows={4}  />
                  )}
                </FormItem>
                <FormItem
                  label="URL Video (Youtube only)"
                  colon={false}
                >
                  {getFieldDecorator('video_url')(
                    <Input />
                  )}
                </FormItem>
                {/* <FormItem
                  label="สถานที่"
                  colon={false}
                >
                  {getFieldDecorator('place_th', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  label="Place"
                  colon={false}
                >
                  {getFieldDecorator('place_en', {
                    rules: [{ required: true }],
                  })(
                    <Input />
                  )}
                </FormItem> */}
                <FormItem
                  label="Date"
                  colon={false}
                >
                  {getFieldDecorator('date', {
                    rules: [{ required: true }],
                  })(
                    <DatePicker
                      className="_w-100pct"
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                    />
                  )}
                </FormItem>
              </Form>
              <div className="_pdl-8px">
                <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Public</label>
                  </div>
                  <Switch checked={status} onChange={this._changeStatus} />
                </div>
                {/* <div className="ant-row ant-form-item ant-form-item-no-colon">
                  <div className="ant-form-item-label">
                    <label>Highlight</label>
                  </div>
                  <Switch checked={highlight} onChange={this._changeHighlight} />
                </div> */}
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
                    images.length ?
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

export default Form.create()(AddEvent)