import { QInputProps } from './QInput';
import { QTitleProps } from './QTitle';

export const QTitleDefaultProps: QTitleProps = {
    level: 5,
    isCenter: false,
    text: '一行标题',
};

export const QInputDefaultProp: QInputProps = {
    title: '输入框标题',
    placeholder: '请输入',
};

export const QParagraphDefaultProps = {
    text: '一段文字(可以换行)',
    isCenter: false,
};

export const QSingleSelectDefaultProps = {
    title: '单选题',
    options: [
        {
            label: '选项1',
            value: '1',
        },
        {
            label: '选项2',
            value: '2',
        },
    ],
    direction: 'vertical',
    value: '1',
};
