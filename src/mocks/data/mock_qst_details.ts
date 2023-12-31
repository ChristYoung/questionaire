import { QInputProps } from '../../components/QuestionComponents/QInput';
import { QParagraphProps } from '../../components/QuestionComponents/QParagraph';
import { QTitleProps } from '../../components/QuestionComponents/QTitle';
import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { nanoid } from 'nanoid';

export const MOCK_QST_DETAIL: QuestionnaireInfo = {
    name: '测试问卷1',
    description: '测试问卷1描述$$$$$$',
    id: 'Xx6nlUfI97gcV1',
    status: 'DRAFT',
    questions: [
        {
            id: nanoid(36),
            title: '问题1',
            qstType: 'TITLE',
            props: JSON.stringify({
                text: '测试标题',
                level: 5,
                isCenter: true,
            } as QTitleProps),
        },
        {
            id: nanoid(36),
            title: '问题2',
            qstType: 'INPUT',
            props: JSON.stringify({
                title: '千秋万代',
                placeholder: '请输入...',
            } as QInputProps),
        },
        {
            id: nanoid(36),
            title: '问题2',
            qstType: 'INPUT',
            props: JSON.stringify({
                title: '而他结合',
                placeholder: '请输入...',
            } as QInputProps),
        },
        {
            id: nanoid(36),
            title: '问题2',
            qstType: 'INPUT',
            props: JSON.stringify({
                title: '疯狂赶紧恢复光滑',
                placeholder: '请输入...',
            } as QInputProps),
        },
        {
            id: nanoid(36),
            title: '问题1',
            qstType: 'TITLE',
            props: JSON.stringify({
                text: 'sdf的爽肤水',
                level: 5,
                isCenter: true,
            } as QTitleProps),
        },
        {
            id: nanoid(36),
            title: '问题6',
            qstType: 'PARAGRAPH',
            props: JSON.stringify({
                text: '段落',
                isCenter: false,
            } as QParagraphProps),
        },
    ],
};
