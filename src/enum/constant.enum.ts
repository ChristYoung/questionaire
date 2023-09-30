import { QInput } from '../components/QuestionComponents/QInput';
import { QTitle } from '../components/QuestionComponents/QTitle';
import { QstType } from '../types';

export const QstTypeMapping: Record<QstType, React.FC<any>> = {
    INPUT: QInput,
    TITLE: QTitle,
} as const;
