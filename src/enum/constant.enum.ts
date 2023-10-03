import { nanoid } from 'nanoid';
import { QInput } from '../components/QuestionComponents/QInput';
import { QTitle } from '../components/QuestionComponents/QTitle';
import { QTitlePropsPanel } from '../components/QuestionComponents/QTitlePropsPanel';
import { QInputPropsPanel } from '../components/QuestionComponents/QInputPropsPanel';
import { QstGroup, QstType } from '../components/QuestionComponents/types';
import { QParagraph } from '../components/QuestionComponents/QParagraph';
import { QParagraphPanel } from '../components/QuestionComponents/QParagraphPanel';
import { QSingleSelect } from '../components/QuestionComponents/QSingleSelect';
import { QSingleSelectPanel } from '../components/QuestionComponents/QSingleSelectPanel';

export const QstTypeMapping: Record<QstType, React.FC<any>> = {
    INPUT: QInput,
    TITLE: QTitle,
    PARAGRAPH: QParagraph,
    SINGLE_CHOICE: QSingleSelect,
} as const;

export const QstPropsPanelMapping: Record<QstType, React.FC<any>> = {
    INPUT: QInputPropsPanel,
    TITLE: QTitlePropsPanel,
    PARAGRAPH: QParagraphPanel,
    SINGLE_CHOICE: QSingleSelectPanel,
} as const;

export const COMPONENT_GROUP: QstGroup[] = [
    {
        groupName: '文本显示',
        componentList: ['TITLE', 'PARAGRAPH'],
        gId: nanoid(24),
    },
    {
        groupName: '文本输入',
        componentList: ['INPUT'],
        gId: nanoid(24),
    },
    {
        groupName: '选择',
        componentList: ['SINGLE_CHOICE'],
        gId: nanoid(24),
    },
];
