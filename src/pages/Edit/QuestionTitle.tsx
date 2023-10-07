import Title from 'antd/es/typography/Title';
import { useSelector, useDispatch } from 'react-redux';
import {
    questionnaireInfoSelector,
    changeQuestionnaireName,
} from '../../store/questionnaireInfoReducer/questionnaireInfoSlice';
import { Space, Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const QuestionTitle: React.FC = () => {
    const { name } = useSelector(questionnaireInfoSelector);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    return (
        <>
            {edit ? (
                <Input
                    value={name}
                    onPressEnter={() => setEdit(false)}
                    onBlur={() => setEdit(false)}
                    onChange={e =>
                        dispatch(changeQuestionnaireName(e.target.value))
                    }
                />
            ) : (
                <Space>
                    <Title
                        className="__QuestionTitle"
                        level={5}
                        style={{ marginBottom: 0 }}>
                        {name ? name : '...'}
                    </Title>
                    {name && (
                        <Button
                            icon={<EditOutlined></EditOutlined>}
                            type="text"
                            onClick={() => {
                                setEdit(true);
                            }}
                        />
                    )}
                </Space>
            )}
        </>
    );
};
