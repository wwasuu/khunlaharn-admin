
import { Layout, Menu, Button, Icon } from 'antd'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import moment from 'moment'
import 'antd/dist/antd.css'
import 'biomatic/dist/biomatic.min.css'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class MainLayout extends React.Component {
  static getDerivedStateFromProps(props) {
    let pathname = ''
    if (props.router.pathname === '/' || props.router.pathname === '/articles/add') {
      pathname = '/'
    }
    if (props.router.pathname === '/knowledges' || props.router.pathname === '/knowledges/add') {
      pathname = '/knowledges'
    }
    if (props.router.pathname === '/events' || props.router.pathname === '/events/add') {
      pathname = '/events'
    }
    if (props.router.pathname === '/gallery') {
      pathname = '/gallery'
    }
    return {
      selectedKeys: [pathname],
    }
  }

  state = {
    selectedKeys: [],
    auth: {
      username: null,
      token: null,
    }
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (!auth) {
      Router.push({
        pathname: '/signin',
      })
      return
    }
    if (auth.expiredIn <= moment()) {
      this._logout()
      return
    }
    this.setState({
      auth
    })
  }

  _logout() {
    localStorage.removeItem('auth')
    Router.push({
      pathname: '/signin',
    })
  }

  render() {
    const { selectedKeys, auth } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <div className="_dp-f _fdrt-cl _jtfct-ct _alit-ct _fw-600 _pdv-32px _pdh-16px">
            <div className="_fs-5 _mgbt-12px _cl-warning username">{auth.username}</div>
            <Button icon="logout" block className="_bgcl-gray-200" onClick={this._logout}>Logout</Button>
          </div>
          <Menu selectedKeys={selectedKeys} defaultSelectedKeys={['/']} mode="inline">
            <Menu.Item key="/">
              <Link href="/">
                <a>
                  <Icon type="notification" />
                  <span>ข่าว</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/knowledges">
              <Link href="/knowledges">
                <a>
                  <Icon type="read" />
                  <span>ความรู้</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/events">
            <Link href="/events">
              <a>
                <Icon type="trophy" />
                <span>กิจกรรม</span>
              </a>
            </Link>
            </Menu.Item>
            <Menu.Item key="/gallery">
            <Link href="/gallery">
              <a>
                <Icon type="picture" />
                <span>คลังรูปภาพ</span>
              </a>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="_pd-16px">
            {this.props.children}
          </Content>
          <Footer className="_tal-ct">
            Khulaharn Admin
          </Footer>
        </Layout>
        <style jsx>{`
          .username {
            width: 160px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-y: hidden;
          }
        `}</style>
        <style jsx global>{`
          .ant-layout-sider {
            background-color: #fff;
          }
          .ant-switch-checked {
            background-color: #f5b83d !important;
          }
          .ant-pagination-item-active {
            border-color: #f5b83d !important;

          }
          .ant-pagination-item-active > a {
            color: #f5b83d !important;
          }
          .ant-menu-item-selected {
            background-color: #f5b83d !important;
          }
          .ant-menu-item-selected > a {
            color: #fff;
          }
          .ant-menu-item:after {
            border: none !important;
          }
          .ant-menu-item-selected > a:hover {
            color: #fff !important;
          }
          .ant-menu-item > a:hover {
            color: #f5b83d;
          }
          .ant-btn:hover, .ant-btn:focus {
            color: #f5b83d;
            border-color: #f5b83d !important;
          }
          .ant-input:hover, .ant-input:focus {
            border-color: #f5b83d !important;
            box-shadow: 0 0 0 2px rgba(245, 184, 61, 0.2);
          }
          .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover  {
            border-color: #f5b83d !important;
          }
          .ant-btn-primary {
            border-color: #f5b83d !important;
            background-color: #f5b83d !important;
            color: #fff !important;
          }
          .ant-btn-primary:hover {
            color: #fff !important;
          }
          a {
            color: rgba(0, 0, 0, 0.65) !important;
          }
          .ant-tabs-nav .ant-tabs-tab:hover {
            color: #f5b83d !important;
          }
          .ant-tabs-nav .ant-tabs-tab-active {
            color: #f5b83d !important;
          }
          .ant-tabs-ink-bar {
            background-color: #f5b83d !important;
          }
          .ant-select-selection:hover {
            border-color: #f5b83d !important;
          }
          .ant-select-open .ant-select-selection, .ant-select-focused .ant-select-selection {
            border-color: #f5b83d !important;
            box-shadow: 0 0 0 2px rgba(245, 184, 61, 0.2);
          }
          .ant-calendar-selected-date .ant-calendar-date, .ant-calendar-selected-start-date .ant-calendar-date, .ant-calendar-selected-end-date .ant-calendar-date {
            background-color: #f5b83d !important;
          }
          .ant-calendar-today .ant-calendar-date {
            border-color: #f5b83d !important;
            color: #f5b83d !important;
          }
          .ant-calendar-selected-day .ant-calendar-date, .ant-calendar-date:hover {
            background-color: rgba(245, 184, 61, 0.2);
          }
          .ant-calendar .ant-calendar-ok-btn {
            border-color: #f5b83d !important;
            background-color: #f5b83d !important;
            color: #fff !important;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withRouter(MainLayout)