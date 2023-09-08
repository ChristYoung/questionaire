import { rest } from 'msw';
import { questionnaireDetail } from '../enum/api.enum';

export const handlers = [
    rest.get(`*/${questionnaireDetail}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
    }),
];
