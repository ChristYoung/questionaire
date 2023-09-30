import { nanoid } from 'nanoid';
import { QInput } from '../components/QuestionComponents/QInput';
import { QTitle } from '../components/QuestionComponents/QTitle';
import { QstGroup, QstType } from '../types';

export const QstTypeMapping: Record<QstType, React.FC<any>> = {
    INPUT: QInput,
    TITLE: QTitle,
} as const;

export const COMPONENT_GROUP: QstGroup[] = [
    { groupName: '文本显示', componentList: ['TITLE'], gId: nanoid(24) },
    { groupName: '文本输入', componentList: ['INPUT'], gId: nanoid(24) },
];
