import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f0f2f5", marginTop: "4rem" }}>
      <Row justify ='center'>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>About us</h2>
    <Footer style={{ backgroundColor: "#f0f2f5" }}>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>About</h2>
          <p>
          An international and dynamic <strong>Your Hotel Group</strong> . Ten distinctive brands. More than 1,160 hotels in operation and under development in JSRS and ACAP.
          </p>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Follow us on social media</h2>
          <div>
            <a href='#'>
              <FacebookOutlined style={{ fontSize: '150%' }} 
              className='social-icon' />
            </a>
            <a href='#'>
              <TwitterOutlined style={{ fontSize: '150%' }}className='social-icon' />
            </a>
            <a href='#'>
              <InstagramOutlined style={{ fontSize: '150%' }}className='social-icon'/>
          <h2>Connect with Us</h2>
          <div>
            <a href='#'>
              <FacebookOutlined className='social-icon' style={{ marginRight: "0.5rem" }}  />
            </a>
            <a href='#'>
              <TwitterOutlined className='social-icon' style={{ marginRight: "0.5rem" }} />
            </a>
            <a href='#'>
              <InstagramOutlined className='social-icon' style={{ marginRight: "0.5rem" }} />
            </a>
            <a href='#'>
              <LinkedinOutlined style={{ fontSize: '150%' }}className='social-icon' />
            </a>
          </div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center",  paddingTop: "1.5rem"}}>
        <Col span={24} style={{ textAlign: "center",  paddingTop: "1rem" }}>
          <p>© 2023 Your Hotel. All rights reserved.</p>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;

