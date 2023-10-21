import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faFirefox, faOpera, faEdge } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let parsedBrowser = '';

    if (userAgent.includes('Firefox')) {
      parsedBrowser = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
      parsedBrowser = 'Chrome';
    } else if (userAgent.includes('Opera')) {
      parsedBrowser = 'Opera';
    } else if (userAgent.includes('Edge')) {
      parsedBrowser = 'Edge';
    } else if (userAgent.includes('Brave')) {
      parsedBrowser = 'Brave';
    }

    setBrowser(parsedBrowser);
  }, []);

  const browserLinks = {
    'Firefox': 'https://addons.mozilla.org/uk/firefox/',
    'Chrome': 'https://chrome.google.com/webstore/',
    'Opera': 'https://chrome.google.com/webstore/',
    'Edge': 'https://chrome.google.com/webstore/',
    'Brave': 'https://chrome.google.com/webstore/',
  };

	return (
		<div className={styles.container}>
			<Head>
				<meta charSet='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='title' content='Open Multiple Urls' />
				<meta name='author' content='fxhxyz' />
				<meta name='description' content='Open Multiple Urls' />
				<meta name='keywords' content='urls, extension, chrome, firefox, open multiple, open urls' />
        <meta name="darkreader" content="NO-DARKREADER-PLUGIN" />
				<meta name='robots' content='index, follow' />
        <link href="https://unpkg.com/modern-normalize@2.0.0/modern-normalize.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
				<title>OMU</title>
			</Head>
      <div className={`${animate__animated} ${animate__fadeIn} ${animate__slower}`}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href='https://github.com/fxhxyz4/OMU' target={'blank'} rel={'noopener, noreferrer'}>
              OMU
            </a>
          </h1>
          <h2 className={styles.download}>Download for {browser}</h2>
          <div className={styles.browsers}>
            <ul className={styles.list}>
            {browser && (
                <li className={styles.item}>
                  <a className={styles.fontbrands} href={browserLinks[browser]} target={'blank'} rel={'noopener, noreferrer'}>
                    {browser === 'Firefox' && <FontAwesomeIcon icon={faFirefox} title='Firefox' />}
                    {browser === 'Chrome' && <FontAwesomeIcon icon={faChrome} title='Google Chrome' />}
                    {browser === 'Opera' && <FontAwesomeIcon icon={faOpera} title='Opera' />}
                    {browser === 'Edge' && <FontAwesomeIcon icon={faEdge} title='Microsoft Edge' />}
                    {browser === 'Brave' && <FontAwesomeIcon icon={faChrome} title='Brave' />}
                  </a>
                </li>
              )}
              <label htmlFor="browserSelect" className={styles.hidden}>Choose a browser:</label>
              <select id="browserSelect" className={styles.select} value={browser} onChange={(e) => setBrowser(e.target.value)}>
                <option value="Firefox">Firefox</option>
                <option value="Chrome">Chrome</option>
                <option value="Opera">Opera</option>
                <option value="Edge">Edge</option>
              </select>
  					</ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

