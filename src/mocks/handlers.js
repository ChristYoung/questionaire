import { rest } from 'msw';
import { questionnaireDetail } from '../enum/api.enum';
import { MOCK_QST_DETAIL } from './data/mock_qst_details';

export const handlers = [
    // 根据id获取问卷中的问题列表
    rest.get(`*/${questionnaireDetail}/:id`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_QST_DETAIL));
    }),
];
