import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = 'en'

  return {
    locale,
    messages: (await import(`app/i18n/messages/${locale}.json`)).default,
  }
})
