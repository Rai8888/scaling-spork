import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f0f2f5", marginTop: "4rem" }}>
      <Row justify ='center'>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>About us</h2>
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
            </a>
            <a href='#'>
              <LinkedinOutlined style={{ fontSize: '150%' }}className='social-icon' />
            </a>
          </div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center",  paddingTop: "1.5rem"}}>
          <p>© 2023 Your Hotel. All rights reserved.</p>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;

