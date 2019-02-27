
import { Layout, Menu, Button, Icon } from 'antd'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import moment from 'moment'
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core';
import 'antd/dist/antd.css'
import 'biomatic/dist/biomatic.min.css'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class MainLayout extends React.Component {
  static getDerivedStateFromProps(props) {
    let pathname = ''
    if (props.router.pathname === '/articles' || props.router.pathname === '/articles/add' || props.router.pathname === '/articles/edit') {
      pathname = '/'
    }
    if (props.router.pathname === '/knowledges' || props.router.pathname === '/knowledges/add' || props.router.pathname === '/knowledges/edit') {
      pathname = '/knowledges'
    }
    if (props.router.pathname === '/events' || props.router.pathname === '/events/add' || props.router.pathname === '/events/edit') {
      pathname = '/events'
    }
    if (props.router.pathname === '/worksheets' || props.router.pathname === '/worksheets/add' || props.router.pathname === '/worksheets/edit') {
      pathname = '/worksheets'
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
    },
    pageLoading: false
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (!auth) {
      Router.push({
        pathname: '/signin',
      })
      return
    }
    if (moment(auth.expiredIn) <= moment()) {
      this._logout()
      return
    }
    this.setState({
      auth
    })

    const router = Router.router;

    router.events.on('routeChangeStart', () => {
      this._loadPageStart();
    });
    router.events.on('routeChangeComplete', () => {
      this._loadPageComplete();
    });
    router.events.on('routeChangeError', () => {
      this._loadPageComplete();
    });
  }

  componentWillUnmount() {
    
  }

  _loadPageStart = () => {
    this.setState({ pageLoading: true });
  };

  _loadPageComplete = () => {
    this.setState({ pageLoading: false });
  };

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
              <Link href="/articles" as="/">
                <a>
                  <Icon type="notification" />
                  <span>ข่าว</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/knowledges">
              <Link href="/knowledges" as="/knowledges">
                <a>
                  <Icon type="read" />
                  <span>ความรู้</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/events">
            <Link href="/events" as="/events">
              <a>
                <Icon type="trophy" />
                <span>กิจกรรม</span>
              </a>
            </Link>
            </Menu.Item>
            <Menu.Item key="/worksheets">
            <Link href="/worksheets" as="/worksheets">
              <a>
                <Icon type="file-text" />
                <span>ใบงาน</span>
              </a>
            </Link>
            </Menu.Item>
            <Menu.Item key="/gallery">
            <Link href="/gallery" as="/gallery">
              <a>
                <Icon type="picture" />
                <span>คลังรูปภาพ</span>
              </a>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {
            this.state.pageLoading &&
            <div className="overlay-loading">
              <BounceLoader
                sizeUnit={"px"}
                size={64}
                color={'#f5b83d'}
                loading={true}
              />
            </div>
          }
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
          .overlay-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, .2);
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