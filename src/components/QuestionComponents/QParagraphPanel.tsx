import { Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { QParagraphProps } from './QParagraph';
import { QParagraphDefaultProps } from './DefaultProps';
import { Required } from '../../enum/validator-rules.enum';

const { TextArea } = Input;

export const QParagraphPanel: React.FC<QParagraphProps> = (
    props: QParagraphProps,
) => {
    const { text, isCenter, onChange, disabled } = props;
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({ text, isCenter });
    }, [text, isCenter]);
    return (
        <div className="__QParagraphPanel">
            <Form
                form={form}
                onValuesChange={() => {
                    onChange && onChange(form.getFieldsValue());
                }}
                layout="vertical"
                disabled={disabled}
                initialValues={{ text, isCenter }}>
                <Form.Item
                    label="段落内容"
                    name="text"
                    rules={[Required('段落内容')]}>
                    <TextArea />
                </Form.Item>
                <Form.Item
                    name="isCenter"
                    valuePropName="checked">
                    <Checkbox>居中{JSON.stringify(disabled)}</Checkbox>
                </Form.Item>
            </Form>
        </div>
    );
};

QParagraphPanel.defaultProps = { ...QParagraphDefaultProps };
