import type { AppLocale } from '~/i18n/messages'

const LOCALE_KEY = 'blob-locale'

export function useAppLocale() {
  const raw = useCookie<string>(LOCALE_KEY, {
    default: () => 'en',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  })

  const locale = computed<AppLocale>({
    get() {
      return raw.value === 'zh' ? 'zh' : 'en'
    },
    set(v) {
      raw.value = v
    },
  })

  const otherLocale = computed<AppLocale>(
    () => (locale.value === 'en' ? 'zh' : 'en'),
  )

  function toggleLocale() {
    locale.value = otherLocale.value
  }

  return { locale, otherLocale, toggleLocale, setLocale: (l: AppLocale) => { locale.value = l } }
}
