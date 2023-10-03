import { Checkbox, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { QSingleSelectDefaultProps } from './DefaultProps';
import { QSingleSelectProps } from './QSingleSelect';

export const QSingleSelectPanel: React.FC<QSingleSelectProps> = (
    props: QSingleSelectProps,
) => {
    const { disabled, title, direction, value, options, onChange } = props;
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({
            title,
            direction,
            value,
            options,
        });
    }, [title, direction, value, options]);

    return (
        <div className="__QSingleSelectPanel">
            <Form
                layout="vertical"
                form={form}
                onValuesChange={() => {
                    onChange && onChange(form.getFieldsValue());
                }}
                initialValues={{ title, direction, value, options }}
                disabled={disabled}>
                <Form.Item
                    label="标题内容"
                    name="title"
                    rules={[{ required: true, message: '请输入标题内容' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="排列方向"
                    name="direction">
                    <Select
                        value={direction}
                        options={[
                            { value: 'vertical', label: '纵向' },
                            { value: 'horizontal', label: '横向' },
                        ]}></Select>
                </Form.Item>
                <Form.Item
                    label="默认选择"
                    name="value">
                    <Select
                        value={value}
                        options={options}></Select>
                </Form.Item>
            </Form>
        </div>
    );
};

QSingleSelectPanel.defaultProps = {
    ...QSingleSelectDefaultProps,
} as QSingleSelectProps;
