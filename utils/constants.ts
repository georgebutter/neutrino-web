export const DOMAIN = "https://neutrino-web-five.vercel.app";
export const DEEPLINK_PROTOCOL = "neutrino://";
export const GITHUB_SCOPES = [
  'user',
  'repo',
  'repo:status',
  'read:repo_hook',
  'read:org',
  'read:public_key',
  'read:gpg_key',
];

export const REDIRECT_URI = `${DOMAIN}/api/github/login`;