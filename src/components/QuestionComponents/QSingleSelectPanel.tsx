import { Button, Form, Input, Select, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { QSingleSelectDefaultProps } from './DefaultProps';
import { QSingleSelectProps } from './QSingleSelect';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Required } from '../../enum/validator-rules.enum';

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
                    rules={[Required('标题内容')]}>
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
                <Form.Item label="选项">
                    <Form.List name="options">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((item, _index) => {
                                    return (
                                        <Space
                                            key={item.key}
                                            align="baseline">
                                            <Form.Item
                                                name={[item.name, 'label']}
                                                rules={[
                                                    Required(
                                                        '',
                                                        '请输入选项文字',
                                                    ),
                                                ]}>
                                                <Input
                                                    placeholder="输入选项文字"
                                                    onChange={e => {
                                                        options?.[_index] &&
                                                            (options[
                                                                _index
                                                            ].label =
                                                                e.target.value);
                                                    }}
                                                />
                                            </Form.Item>
                                            {_index > 1 && (
                                                <MinusCircleOutlined
                                                    onClick={() =>
                                                        remove(item.name)
                                                    }
                                                />
                                            )}
                                        </Space>
                                    );
                                })}
                                <Form.Item>
                                    <Button
                                        type="link"
                                        block
                                        icon={<PlusOutlined />}
                                        onClick={() =>
                                            add({ label: '', value: '' })
                                        }>
                                        添加选项
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
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
