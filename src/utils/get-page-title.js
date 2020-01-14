import defaultSettings from '@/settings'

const title = defaultSettings.title || '中博信CRM系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
