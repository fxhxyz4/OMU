import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faFirefox, faOpera, faEdge } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';

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
    }

    setBrowser(parsedBrowser);
  }, []);

  const browserLinks = {
    'Firefox': 'https://addons.mozilla.org/uk/firefox/',
    'Chrome': 'https://chrome.google.com/webstore/',
    'Opera': 'https://chrome.google.com/webstore/',
    'Edge': 'https://chrome.google.com/webstore/',
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
                    {browser === 'Firefox' && <FontAwesomeIcon icon={faFirefox} alt="Firefox icon" title='Firefox' />}
                    {browser === 'Chrome' && <FontAwesomeIcon icon={faChrome} alt="Chrome icon" title='Google Chrome' />}
                    {browser === 'Opera' && <FontAwesomeIcon icon={faOpera} alt="Opera icon" title='Opera' />}
                    {browser === 'Edge' && <FontAwesomeIcon icon={faEdge} alt="Ms Edge icon" title='Microsoft Edge' />}
                  </a>
                </li>
              )}
              <label htmlFor="browserSelect" className={styles.hidden}>Choose a browser:</label>
              <select id="browserSelect" className={styles.select} value={browser} onChange={(e) => setBrowser(e.target.value)}>
                <option value="" disabled>Select a browser</option>
                <option value="Firefox">Mozilla Firefox</option>
                <option value="Chrome">Google Chrome</option>
                <option value="Opera">Opera</option>
                <option value="Edge">Microsoft Edge</option>
              </select>
  					</ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

