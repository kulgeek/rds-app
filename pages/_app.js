import Header from "./components/Header";
import "../styles/globals.css";
import "../styles/antd.less";

function MyApp({Component, pageProps}) {
	return (
		<>
			<Header></Header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
