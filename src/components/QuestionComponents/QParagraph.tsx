import { QstBaseProps } from '../../types';
import { QParagraphDefaultProps } from './DefaultProps';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export interface QParagraphProps
    extends QstBaseProps,
        React.HTMLAttributes<HTMLDivElement> {
    text?: string;
    isCenter?: boolean;
}

export const QParagraph: React.FC<QParagraphProps> = (
    props: QParagraphProps,
) => {
    return (
        <div
            className="__QParagraph"
            style={{ ...props.style }}>
            <Paragraph
                style={{
                    textAlign: props.isCenter ? 'center' : 'start',
                    marginBottom: '0',
                }}>
                {props.text.split('\n').map((item, index) => (
                    <span key={index}>
                        {item}
                        <br />
                    </span>
                ))}
            </Paragraph>
        </div>
    );
};

QParagraph.defaultProps = { ...QParagraphDefaultProps };
