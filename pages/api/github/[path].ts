
import type { NextApiRequest, NextApiResponse } from 'next'
import { justOne } from '../../../utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // https://github.com/login/oauth/authorize
  const acceptedPaths = ['authorize'];
  const path = justOne(req.query.path);
  if (!path || !acceptedPaths.includes(path)) {
    return res.status(500);
  }
  return res.status(200).redirect(`https://github.com/login/oauth/${path}`);

}
