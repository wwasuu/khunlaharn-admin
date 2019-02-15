import { Button, Upload, Icon, Modal } from 'antd'
import Dropzone from 'react-dropzone'
import Layout from '../components/common/Layout'
import { FileAPI, MediaAPI } from '../services'

class News extends React.Component {
  state = {
    isShowUpload: false,
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
        images: res.data.media ?  res.data.media : []
      })
    } catch (e) {
      console.log(e)
    }
  }

  _removeMedia = async () => {
    try {
      if (!this.state.selectedImage.length) {
        return
      }
      Modal.confirm({
        title: 'คุณต้องการที่จะลบใช่หรือไม่',
        okText: 'ตกเลิก',
        okType: 'danger',
        cancelText: 'ยกเลิก',
        onOk: async () => {
          const ids = this.state.selectedImage.join(',')
          const res = await MediaAPI.remove({media_ids: ids})
          this._getMedia()
        },
        onCancel() {
        },
      });
    } catch (e) {
      console.log(e)
    }
  }

  _hadleUpload = async (files) => {
    try {
      const formData = new FormData()
      files.map((file) => {
        formData.append('myfiles', file)
      });
      const res = await FileAPI.upload(formData)
      this._getMedia()
    } catch (e) {
      console.log(e)
    }
  }

  _toggleShowUpload = () => {
    this.setState({
      isShowUpload: !this.state.isShowUpload
    })
  }

  _selectImage = (index) => {
    if (this.state.selectedImage.indexOf(index) >= 0) {
      this.setState({
        selectedImage: [...this.state.selectedImage.filter(x => x !== index)],
      })
      return
    }
    this.setState({
      selectedImage: [...this.state.selectedImage, index],
    })
  }

  _clearSelectedImage = () => {
    this.setState({
      selectedImage: []
    })
  }

  _renderSelectedIcon = (index) => {
    return this.state.selectedImage.indexOf(index) >= 0 ? <Icon className="selected _pst-asl _cl-positive _fs-4 _t-0px _r-0px" type="check-square" /> : null;
  }

  render () {
    const { isShowUpload, selectedImage, images } = this.state
    return (
      <Layout>
        <div className="_bgcl-white">
          <div className="_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300">
            <div className="_fs-4">เพิ่มคลังรูปภาพ</div>
          </div>
          <div className="_pd-16px">
            <div className="_dp-f _fdrt-cl _alit-fst _mgbt-12px">
              <Button className="_w-128px" onClick={this._toggleShowUpload}>เพิ่มรูปภาพ</Button>
            </div>
            {
              selectedImage.length > 0
              &&
              <div className="_dp-f _mgbt-12px">
                <Button className="_w-128px _mgr-8px" onClick={this._clearSelectedImage}>ยกเลิก</Button>
                <Button className="_w-128px _bgcl-accent _cl-white _bdcl-accent" onClick={this._removeMedia}>ลบภาพที่เลือก</Button>
              </div>
            }
            {
              isShowUpload
              &&
              <div className="dropzone _mgbt-12px">
                <Dropzone
                  onDrop={this._hadleUpload}
                  className="_w-100pct _h-256px _bdcl-warning-hover _bdcl-gray-300 _bdw-1px _dp-f _alit-ct _jtfct-ct _bdrd-4px"
                  style={{borderStyle: 'dashed'}}
                >
                  <div className="_tal-ct">
                    <Button className="_mgbt-8px" icon="upload">เลือกไฟล์ที่ต้องการอัพโหลด</Button>
                    <p className="_fw-600">ขนาดไฟล์สูงสุด 2mb</p>
                  </div>
                </Dropzone>
              </div>
            }
            {
            images.length ?
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
            : null
            }
            <style jsx>{`
              .gallery {
                min-height: 360px;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                grid-gap: 8px;
              }
              .gallery > div > img {
                border-radius: 4px;
                width: 100%;
                height: 128px;
                object-fit: cover;
              }
            `}</style>
          </div>
        </div>

      </Layout>
    )
  }
}

export default News


