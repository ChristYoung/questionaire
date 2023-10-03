import { Radio, Typography, Space } from 'antd';
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

const { Paragraph } = Typography;

export const QSingleSelect: React.FC<QSingleSelectProps> = (
    props: QSingleSelectProps,
) => {
    const { title, direction, value, options } = props;
    return (
        <div className="__QSingleSelect">
            <Paragraph>{title}</Paragraph>
            <Radio.Group value={value}>
                <Space direction={direction}>
                    {options?.map((opt, _index) => (
                        <Radio
                            value={opt.value}
                            key={_index}>
                            {opt.label}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>
        </div>
    );
};

QSingleSelect.defaultProps = {
    ...QSingleSelectDefaultProps,
} as QSingleSelectProps;
