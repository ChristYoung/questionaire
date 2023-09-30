/* eslint-disable prettier/prettier */
import { rest } from 'msw';
import { ApiEnum } from '../enum/api.enum';
import { MOCK_QST_DETAIL } from './data/mock_qst_details';
import { getRandomInt } from '../utils/index'

const DELAY_TIME_RANDOM = [ 1000, 1200, 3000, 200, 500, 300 ];

export const handlers = [
    // 根据id获取问卷中的问题列表
    rest.get(`*/${ApiEnum.QuestionnaireDetail}/:id`, (req, res, ctx) => {
        const randomDelay = DELAY_TIME_RANDOM[ getRandomInt(0, DELAY_TIME_RANDOM.length - 1) ];
        return res(ctx.status(200), ctx.delay(randomDelay), ctx.json(MOCK_QST_DETAIL));
    }),
];
