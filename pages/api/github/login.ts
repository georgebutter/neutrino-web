
import type { NextApiRequest, NextApiResponse } from 'next'
import { justOne } from '../../../utils/array';
import { DEEPLINK_PROTOCOL, GITHUB_SCOPES, REDIRECT_URI } from '../../../utils/constants';

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const code = justOne(req.query.code);

    if (code) {
      const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
      if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
        throw new Error('No client id or secret');
      }
      if (!code) {
        throw new Error('No code was provided')
      }
      const tokenUrl = new URL('https://github.com/login/oauth/access_token');
      tokenUrl.searchParams.append('client_id', GITHUB_CLIENT_ID);
      tokenUrl.searchParams.append('client_secret', GITHUB_CLIENT_SECRET);
      tokenUrl.searchParams.append('code', code);
      tokenUrl.searchParams.append('redirect_uri', REDIRECT_URI);
      
      const githubRes = await fetch(tokenUrl.toString(), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      });
      const { access_token } = await githubRes.json();
        
      return res.status(200).redirect(`${DEEPLINK_PROTOCOL}/auth?token=${access_token}`);
    }
    
    const redirect = new URL(`https://github.com/login/oauth/authorize`);
    redirect.searchParams.append('client_id', process.env.GITHUB_CLIENT_ID as string);
    redirect.searchParams.append('scope', GITHUB_SCOPES.toString());
    redirect.searchParams.append('redirect_uri', REDIRECT_URI);
    
    return res.status(200).redirect(redirect.toString());
    
  } catch {
    return res.status(500);
  }
}
