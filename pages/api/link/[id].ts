// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { justOne } from '../../../utils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const acceptedIds = ['auth'];
  const id = justOne(req.query.id);
  if (!id || !acceptedIds.includes(id)) {
    return res.status(500)
  }

  return res.status(200).redirect(`neutrino://${req.query.id}`);

}
