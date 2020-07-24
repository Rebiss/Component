import React from 'react';
import { useMediaQuery } from 'react-responsive';


const Responsive = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 1224px)'})

    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({query: '(max-device-width: 1224px)'})
   
    return (
      <div>
        <h1>Device Test!</h1>
        {console.log('*********', isDesktopOrLaptop, 'Mobile', isTabletOrMobile, 'Tablet or Mobile', isTabletOrMobileDevice)}
        {isDesktopOrLaptop && <>
          <p>You are a desktop or laptop</p>
          {isBigScreen && <p>You also have a huge screen</p>}
          {isTabletOrMobile && <p>You are sized like a tablet or mobile phone though</p>}
        </>}

        {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}

      </div>
    )
  }

  export default Responsive;