import { memoize } from './utils/discount_lodash';
export const isFirefox = memoize(() => /firefox/i.test(navigator.userAgent));
export const isSafari = memoize(() => Boolean(window.safari));
