import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../styles/global.css';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
}

export default MyApp;
