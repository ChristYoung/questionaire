import { QuestionnaireInfo } from '../../types/index';
import { nanoid } from 'nanoid';

export const MOCK_QST_DETAIL: QuestionnaireInfo = {
    name: '测试问卷1',
    description: '测试问卷1描述',
    questions: [
        {
            id: nanoid(16),
            title: '问题1',
            qstType: 'QTitle',
            props: '',
        },
        {
            id: nanoid(16),
            title: '问题2',
            qstType: 'QInput',
            props: '',
        },
    ],
};
