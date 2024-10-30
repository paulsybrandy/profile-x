import { dev } from '$app/environment';

// general site settings
export const siteUrl = dev ? 'http://localhost:5173' : 'https://loopsandvariables.com'; // local + live urls
export const siteName = '@loopsvariables';
export const siteTagline = 'In 2003 I figured out I could get paid to build stuff on the www. Thanks Tim!'; // Used in default title tag etc
export const siteDescription = 'In 2003 I figured out I could get paid to build stuff on the www. Thanks Tim!'; // Used in meta description, og tags, etc
export const logoUrl = siteUrl + '/images/logo.svg';
export const pwaThemeColor = '#000000'; // Used in PWA manifest

// open graph
export const twitterHandle = 'loopsvariables';
