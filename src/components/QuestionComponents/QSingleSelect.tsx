import { Radio } from 'antd';
import { OptItem, QstBaseProps } from './types';
import { QSingleSelectDefaultProps } from './DefaultProps';

export interface QSingleSelectProps
    extends QstBaseProps,
        React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    direction?: 'vertical' | 'horizontal';
    options?: OptItem[];
    value?: string;
}

export const QSingleSelect: React.FC<QSingleSelectProps> = (
    props: QSingleSelectProps,
) => {
    return (
        <div className="__QSingleSelect">QSingleSelect component works!</div>
    );
};

QSingleSelect.defaultProps = {
    ...QSingleSelectDefaultProps,
} as QSingleSelectProps;
