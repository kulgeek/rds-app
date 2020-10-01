import {Row, Col, Button} from "antd";

function Header() {
	return (
		<Row>
			<Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
				RED DOT LOGO
			</Col>
			<Col xs={2} sm={4} md={6} lg={18} xl={18}>
				REST OF HEADER
			</Col>
		</Row>
	);
}

export default Header;
