import {Route, Switch, useHistory} from "react-router-dom";
import React, {useState} from "react";
import Home from "./pages/home-page/homepage";
import University from "./pages/Universities/universities";
import CounsellorProfile from "./pages/counsellors/counsellors";
import UniSearchPage from "./pages/uni-search/uni-search.page";
import Login from "./pages/login/login";
import CounsellorHome from "./pages/dashboard-home/dashboardHome";
import {Button, Col, Drawer, Row} from "antd";
import {BarsOutlined} from "@ant-design/icons";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import './App.css';
import 'rsuite/dist/rsuite.css'
import Meeting from "./pages/meeting/meeting";
import CounsellorSearchPage from "./pages/counsellor-search/counsellor-search.page";
import UploadPicture from "./pages/upload picture/upload picture";
import Testing from "./pages/testing";
import Demo from "./pages/appointment/test";




function App() {
  const router = useHistory();

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (

    <Layout>
      <div className="head">
        <Header style={{
          position: 'sticky',
          margin: '0',
          width: '100%',
          backgroundColor: '#3F0858',
          height: '30%',
          paddingTop: '1%'
        }}>
          <Row>
            <Col xs={{span: 5, offset: 0}} md={{span: 3, offset: 1}} lg={{span: 6, offset: 2}}>
              <h1>
                <a href="/"> Trucareer</a>
              </h1>
            </Col>
            <Col xs={{span: 0}} md={{span: 13, offset: 7}} lg={{span: 9, offset: 7}}>
              <Row>
                <Col xs={{span: 0}} md={{span: 3, offset: 2}} lg={{span: 3}}>
                  <h2 onClick={() => {
                    router.push("/")
                  }}>
                    Home
                  </h2>
                </Col>
                <Col xs={{span: 0}} md={{span: 3, offset: 2}} lg={{span: 4, offset: 1}}>
                  <h2 onClick={() => {
                    router.push("/uni-search")
                  }}>
                    Universities
                  </h2>
                </Col>
                <Col xs={{span: 0}} md={{span: 3, offset: 5}} lg={{span: 4, offset: 2}}>
                  <h2 onClick={() => {
                    router.push("/counsellor-search")
                  }}>
                    Counsellors
                  </h2>
                </Col>
                <Col xs={{span: 0}} md={{span: 3, offset: 3}} lg={{span: 4, offset: 2}}>
                  <h2 className="mobile-test" onClick={() => {
                    router.push("/login")
                  }}>
                    Login
                  </h2>
                </Col>
              </Row>
            </Col>
            <Col xs={{span: 9, offset: 10}} md={{span: 0, offset: 0}} lg={{span: 0, offset: 0}}>
              <Button style={{marginLeft: "85%", marginTop: "25%"}} onClick={showDrawer}>
                <BarsOutlined/>
              </Button>

              <Drawer
                placement={"right"}
                width={200}
                onClose={onClose}
                visible={visible}
              >
                <div className="drawer-text">
                  <p onClick={() => {
                    router.push("/")
                  }}>Home</p>
                  <hr className="solid"/>
                  <Button onClick={() => {
                    router.push("/university")
                  }}>Universities</Button>
                  <hr className="solid"/>
                  <p>Counsellors</p>
                  <hr className="solid" onClick={() => {
                    router.push("/login")
                  }}/>
                  <p>Login</p>
                </div>
              </Drawer>
            </Col>
          </Row>
        </Header>
      </div>
      <Content>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route exact path={"/university-profile"}>
            <University/>
          </Route>
          <Route exact path={"/counsellor-profile"}>
            <CounsellorProfile/>
          </Route>

          <Route exact path={"/uni-search"}>
            <UniSearchPage/>
          </Route>
          <Route exact path={"/counsellor-search"}>
            <CounsellorSearchPage/>
          </Route>
          <Route exact path={"/login"}>
            <Login/>
          </Route>
          <Route exact path={"/dashboard-counsellor-home"}>
            <CounsellorHome/>
          </Route>
          <Route exact path={"/start-meeting"}>
            <Meeting/>
          </Route>
          <Route exact path={"/upload-picture"}>
            <UploadPicture/>
          </Route>
          <Route exact path={"/student-profile"}>
            <Testing/>
          </Route>
        </Switch>
      </Content>

    </Layout>
  );
}

export default App;
