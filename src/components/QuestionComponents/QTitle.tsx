import { Typography } from 'antd';
import { QTitleDefaultProps } from './DefaultProps';
import { QstBaseProps } from '../../types';

export interface QTitleProps
    extends QstBaseProps,
        React.HTMLAttributes<HTMLDivElement> {
    text?: string;
    level?: 1 | 2 | 3 | 4 | 5;
    isCenter?: boolean;
}

const { Title } = Typography;

export const QTitle: React.FC<QTitleProps> = (props: QTitleProps) => {
    const { text, level, isCenter, style } = props;
    const getFontSize = (level: 1 | 2 | 3 | 4 | 5) => 32 - level * 4;
    return (
        <Title
            className="__QTitle"
            level={level}
            style={{
                textAlign: isCenter ? 'center' : 'start',
                marginBottom: '0',
                fontSize: getFontSize(level),
                ...style,
            }}>
            {text}
        </Title>
    );
};

QTitle.defaultProps = QTitleDefaultProps;
