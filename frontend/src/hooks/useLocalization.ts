import { LANGUAGE } from "../languages";

export function useLocalization() {
  return {
    currentLanguage: LANGUAGE,
    setLanguage: () => {},
  };
}
