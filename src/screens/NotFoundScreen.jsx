import { Result, Button } from 'antd';

const NotFound = () => {
  const titleStyle = { color: "#fff" };
  const buttonStyle = { backgroundColor: "#fff", color: "#000" };
  return (
    <Result
      status="404"
      title={<span style={titleStyle}>404</span>}
      subTitle={<span style={titleStyle}>Извините, страница не найдена или вы не имете доступа</span>}
      extra={
        <Button type="primary" href="/" style={buttonStyle}>
          На главную
        </Button>

      }
    />
  );
};

export default NotFound;