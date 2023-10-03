import { Typography, Input } from 'antd';
import { QInputDefaultProp } from './DefaultProps';
import { QstBaseProps } from '../../types';

const { Paragraph } = Typography;

export interface QInputProps
    extends QstBaseProps,
        React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    placeholder?: string;
}

export const QInput: React.FC<QInputProps> = (props: QInputProps) => {
    const { title, placeholder } = props;
    return (
        <div className="__QInput">
            <Paragraph strong>{title}</Paragraph>
            <div>
                <Input placeholder={placeholder} />
            </div>
        </div>
    );
};

QInput.defaultProps = QInputDefaultProp;
