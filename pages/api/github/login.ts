
import type { NextApiRequest, NextApiResponse } from 'next'
import { GITHUB_SCOPES, REDIRECT_URI_AUTH } from '../../../utils/constants';

export default function login(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const redirect = new URL(`https://github.com/login/oauth/authorize`);
  redirect.searchParams.append('client_id', process.env.GITHUB_CLIENT_ID as string);
  redirect.searchParams.append('scope', GITHUB_SCOPES.toString());
  redirect.searchParams.append('redirect_uri', REDIRECT_URI_AUTH);
  
  return res.status(200).redirect(redirect.toString());

}
