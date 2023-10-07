import { useSelector, useDispatch } from 'react-redux';
import {
    questionnaireInfoSelector,
    resetQuestionnaireInfo,
} from '../../store/questionnaireInfoReducer/questionnaireInfoSlice';
import { Form, Input } from 'antd';
import { useEffect } from 'react';
import { Required } from '../../enum/validator-rules.enum';

const { TextArea } = Input;

export const PagesSetting: React.FC = () => {
    const dispatch = useDispatch();
    const { description, name, id, style, script } = useSelector(
        questionnaireInfoSelector,
    );
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ description, name, style, script });
    }, [description, name, style, script]);

    return (
        <div className="__PagesSetting">
            <Form
                form={form}
                layout="vertical"
                initialValues={{ description, name, style, script }}
                onValuesChange={() => {
                    dispatch(
                        resetQuestionnaireInfo({
                            ...form.getFieldsValue(),
                            id,
                        }),
                    );
                }}>
                <Form.Item
                    label="问卷标题"
                    name="name"
                    rules={[Required('问卷标题')]}>
                    <Input placeholder="请输入问卷标题" />
                </Form.Item>
                <Form.Item
                    label="描述"
                    name="description">
                    <TextArea placeholder="请输入问卷描述" />
                </Form.Item>
                <Form.Item
                    label="描述"
                    name="style">
                    <TextArea placeholder="请输入样式代码" />
                </Form.Item>
                <Form.Item
                    label="脚本代码"
                    name="script">
                    <TextArea placeholder="请输入脚本代码" />
                </Form.Item>
            </Form>
        </div>
    );
};
