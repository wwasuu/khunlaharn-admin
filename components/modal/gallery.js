import { Button, Modal, Tabs, Icon } from 'antd'
import Dropzone from 'react-dropzone'
import { FileAPI, MediaAPI } from '../../services'

const TabPane = Tabs.TabPane

class Gallery extends React.Component {
  state = {
    selectedImage: [],
    images: []
  }

  componentDidMount() {
    this._getMedia()
  }

  _getMedia = async () => {
    try {
      const res = await MediaAPI.get()
      this.setState({
        images: res.data.media ? res.data.media : []
      })
    } catch (e) {
      console.log(e)
    }
  }

  _handleUpload = async (files) => {
    try {
      const formData = new FormData()
      files.map((file) => {
        formData.append('myfiles', file)
      });
      const res = await FileAPI.upload(formData)
      this._getMedia()
      this.setState({
        selectedImage: res.data.media
      })
      this._onAccept()
    } catch (e) {
      console.log(e)
    }
  }

  _selectImage = (id) => {
    if (this.props.galleryType !== 'FEATURED_IMAGE') {
      if (this.state.selectedImage.find(x => x.id === id)) {
        this.setState({
          selectedImage: [...this.state.selectedImage.filter(x => x.id !== id)],
        })
        return
      }
      this.setState({
        selectedImage: [...this.state.selectedImage, this.state.images.find(x => x.id === id)],
      })
    } else {
      this.setState({
        selectedImage: [this.state.images.find(x => x.id === id)],
      })
    }
  }

  _onCancel = () => {
    this.setState({
      selectedImage: []
    })
    this.props.closeGallery()
  }

  _onAccept = () => {
    this.props.setImages(this.state.selectedImage)
    this.setState({
      selectedImage: []
    })
    this.props.closeGallery()
  }

  _renderSelectedIcon = (id) => {
    return this.state.selectedImage.find(x => x.id === id) ? <Icon className="selected _pst-asl _cl-positive _fs-4 _t-0px _r-0px" type="check-square" /> : null;
  }

  _renderFooter = () => (
    <div>
      <Button>ยกเลิก</Button>
      <Button>ตกลง</Button>
    </div>
  )

  render() {
    const { isShowGallery, closeGallery, galleryType } = this.props
    const { images } = this.state

    return (
      <Modal
        visible={isShowGallery}
        onCancel={this._onCancel}
        onOk={this._onAccept}
        cancelText="ยกเลิก"
        okText="ตกลง"
        width={760}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="picture" />Gallery</span>} key="1">
            {
              images.length
              ?
              <div className="gallery">
                {
                  images.map(x =>
                    <div key={x.id} className="_pst-rlt _cs-pt" onClick={() => this._selectImage(x.id)}>
                      {
                        this._renderSelectedIcon(x.id)
                      }
                      <img width="100%" src={`${x.media_url}`} />
                    </div>
                  )
                }
              </div>
              : <div className="gallery" />
            }
          </TabPane>
          <TabPane tab={<span><Icon type="upload" />Upload</span>} key="2">
          <div className="dropzone">
            <Dropzone
              multiple={galleryType === 'IMAGE' ? true : false }
              onDrop={this._handleUpload}
              className="_w-100pct _h-256px _bdcl-warning-hover _bdcl-gray-300 _bdw-1px _dp-f _alit-ct _jtfct-ct _bdrd-4px"
              style={{borderStyle: 'dashed'}}
            >
              <div className="_tal-ct">
                <Button className="_mgbt-8px" icon="upload">เลือกไฟล์ที่ต้องการอัพโหลด</Button>
                <p className="_fw-600">ขนาดไฟล์สูงสุด 2mb</p>
              </div>
            </Dropzone>
          </div>
          </TabPane>
        </Tabs>
        <style jsx>{`
        .gallery {
          min-height: 360px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 8px;
        }
        .gallery > div > img {
          border-radius: 4px;
          height: 120px;
          object-fit: cover;
        }
      `}</style>
      </Modal>
    )
  }
}

export default Gallery