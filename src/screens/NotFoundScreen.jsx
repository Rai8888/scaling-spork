import { Button, Result } from "antd";

const NotFound = () => {
  const titleStyle = { color: "#000" };
  const buttonStyle = { backgroundColor: "#000", color: "#fff" };
  return (
    <Result
      status='404'
      title={<span style={titleStyle}>404</span>}
      subTitle={<span style={titleStyle}>Извините, страница не найдена или вы не имете доступа</span>}
      extra={
        <Button type='primary' href='/' style={buttonStyle}>
          На главную
        </Button>
      }
    />
  );
};

export default NotFound;

