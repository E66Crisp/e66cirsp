import { messages } from '~/i18n/messages'
import type { AppLocale } from '~/i18n/messages'

export function useAppI18n() {
  const { locale, otherLocale, toggleLocale, setLocale } = useAppLocale()
  const m = computed(() => messages[locale.value as AppLocale])
  return { locale, otherLocale, toggleLocale, setLocale, m }
}
