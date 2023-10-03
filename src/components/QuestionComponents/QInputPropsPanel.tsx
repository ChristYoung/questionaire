import { Form, Input } from 'antd';
import { QInputProps } from './QInput';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { QInputDefaultProp } from './DefaultProps';

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
                rules={[{ required: true, message: '请输入标题' }]}>
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
