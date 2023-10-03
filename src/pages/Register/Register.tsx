import { Typography, Space, Form, Button, Checkbox, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Required } from '../../enum/validator-rules.enum';
const { Title } = Typography;

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export interface RegisterProps extends React.HTMLAttributes<HTMLDivElement> {}

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
    return (
        <div>
            <div>
                <Space>
                    <Title>
                        <UserAddOutlined></UserAddOutlined>
                    </Title>
                    <Title level={2}>Register</Title>
                </Space>
            </div>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[Required('Username')]}>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[Required('Password')]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type="primary"
                            htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
