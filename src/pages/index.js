import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { css, Global } from '@emotion/core'

import App from '../components/app'
import NotMobile from '../components/notMobile'

export default () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if(!navigator.userAgent.match(/iPhone|Android/i)) {
      setIsMobile(false);
    }
  }, [])

  return (
    <React.Fragment>
    <Helmet>
      <title>Countdown</title>
      <link rel="shortcut icon" href="https://emojicdn.elk.sh/🎯" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />

      <link href="/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
    </Helmet>

    <Global
      styles={css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, Roboto, system-ui, sans-serif;
          color: black;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          padding: 0;
          outline: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          appearance: none;
        }

        :root {
          --brand: hsl(357, 73%, 45%);

          --gray: hsl(357, 8%, 55%);
        }
      `}
    />

    {isMobile ? <App /> : <NotMobile />}
  </React.Fragment>
  )
}