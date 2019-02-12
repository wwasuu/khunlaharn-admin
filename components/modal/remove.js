import { Button, Modal, Icon } from 'antd'


class Remove extends React.Component {

  render() {
    const { isShow, isDeleting, remove, closeModalRemove } = this.props

    return (
      <Modal
        visible={isShow}
        footer={null}
        width={320}
      >
        <div className="_dp-f _alit-ct _mgt-24px"><Icon type="exclamation-circle" className="_cl-warning _fs-4 _mgr-24px" /><span className="_fs-5">คุณต้องการลบใช่หรือไม่</span></div>
        <div className="_mgt-24px _dp-f _jtfct-fe">
          <Button className="_mgr-12px" onClick={closeModalRemove}>
            ยกเลิก
          </Button>
          <Button loading={isDeleting} onClick={remove} className="_bgcl-warning _cl-white _bdcl-warning">
            ตกลง
          </Button>
        </div>

      </Modal>
    )
  }
}

export default Remove