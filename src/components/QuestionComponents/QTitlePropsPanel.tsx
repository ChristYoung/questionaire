import { useForm } from 'antd/es/form/Form';
import { QTitleProps } from './QTitle';
import { Form, Input, Checkbox, Select } from 'antd';
import { useEffect } from 'react';
import { QTitleDefaultProps } from './DefaultProps';

export const QTitlePropsPanel: React.FC<QTitleProps> = (props: QTitleProps) => {
    const { text, level, isCenter, style, onChange, id } = props;
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({ text, level, isCenter });
    }, [text, level, isCenter]);

    return (
        <div className="__QTitlePropsPanel">
            <Form
                onValuesChange={() => {
                    onChange && onChange(form.getFieldsValue());
                }}
                form={form}
                layout="vertical"
                initialValues={{ text, level, isCenter }}>
                <Form.Item
                    label="标题内容"
                    name="text"
                    rules={[{ required: true, message: '请输入标题内容' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="层级"
                    name="level">
                    <Select
                        options={[
                            { value: 1, label: '一级标题' },
                            { value: 2, label: '二级标题' },
                            { value: 3, label: '三级标题' },
                            { value: 4, label: '四级标题' },
                            { value: 5, label: '五级标题' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="isCenter"
                    valuePropName="checked">
                    <Checkbox checked>居中</Checkbox>
                </Form.Item>
            </Form>
        </div>
    );
};

QTitlePropsPanel.defaultProps = QTitleDefaultProps;
