/* eslint-disable prettier/prettier */
import { rest } from 'msw';
import { ApiEnum } from '../enum/api.enum';
import { MOCK_QST_DETAIL } from './data/mock_qst_details';
import { getRandomInt } from '../utils/index'

const DELAY_TIME_RANDOM = [ 1000, 1200, 3000, 200, 500, 300 ];
// const DELAY_TIME_RANDOM = [ 200, 300 ];


export const handlers = [
    // 根据id获取问卷中的问题列表
    rest.get(`*/${ApiEnum.QuestionnaireDetail}/:id`, (req, res, ctx) => {
        const randomDelay = DELAY_TIME_RANDOM[ getRandomInt(0, DELAY_TIME_RANDOM.length - 1) ];
        const dataFromSession = sessionStorage.getItem('mock__questionnaireInfo') ? JSON.parse(sessionStorage.getItem('mock__questionnaireInfo')) : MOCK_QST_DETAIL;
        console.log('dataFromSession', dataFromSession)
        return res(ctx.status(200), ctx.delay(randomDelay), ctx.json({
            status: 'success',
            data: dataFromSession
        }));
    }),

    // 保存问卷
    rest.post(`*/${ApiEnum.SaveQuestionnaire}`, async (req, res, ctx) => {
        const reqBody = await req.json();
        sessionStorage.setItem('mock__questionnaireInfo', JSON.stringify(reqBody));
        return res(ctx.status(200), ctx.delay(1000), ctx.json({
            status: 'success',
            data: null
        }));
    })
];
