import React from 'react'
import { IntlProvider, FormattedNumber } from 'react-intl';

const FormatPrice = ({price}) => {
          const pricedosara = price / 100;
  return (
          <IntlProvider locale='ind' defaultLocale='en'>
          <FormattedNumber value={pricedosara} style='currency' currency='INR'/>
          </IntlProvider>
  )
}

export default FormatPrice