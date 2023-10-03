import { Form, Input } from 'antd';
import { QInputProps } from './QInput';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { QInputDefaultProp } from './DefaultProps';
import { Required } from '../../enum/validator-rules.enum';

export const QInputPropsPanel: React.FC<QInputProps> = (props: QInputProps) => {
    const { title, placeholder, onChange, disabled } = props;
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({ title, placeholder });
    }, [title, placeholder]);

    return (
        <Form
            form={form}
            onValuesChange={() => {
                onChange && onChange(form.getFieldsValue());
            }}
            className="__QInputPropsPanel"
            layout="vertical"
            disabled={disabled}
            initialValues={{ title, placeholder }}>
            <Form.Item
                label="标题"
                name="title"
                rules={[Required('标题')]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="PlaceHolder"
                name="placeholder">
                <Input />
            </Form.Item>
        </Form>
    );
};

QInputPropsPanel.defaultProps = QInputDefaultProp;
