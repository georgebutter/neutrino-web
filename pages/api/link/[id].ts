// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { justOne } from '../../../utils/array';
import { DEEPLINK_PROTOCOL } from '../../../utils/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const acceptedIds = [''];
  const id = justOne(req.query.id);
  if (!id || !acceptedIds.includes(id)) {
    return res.status(404)
  }

  return res.status(200).redirect(`${DEEPLINK_PROTOCOL}${req.query.id}`);

}
