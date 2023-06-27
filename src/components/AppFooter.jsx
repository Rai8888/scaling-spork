import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f0f2f5" }}>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla velit, vel tempor lorem eleifend non.
            Nulla tincidunt diam sit amet ex vulputate, sed malesuada lacus scelerisque.
          </p>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center" }}>
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
              <LinkedinOutlined className='social-icon' />
            </a>
          </div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: "center",  paddingTop: "1rem" }}>
          <p>© 2023 Your Hotel. All rights reserved.</p>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;

