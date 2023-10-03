import { Button, Space, Tooltip } from 'antd';
import {
    DeleteOutlined,
    EyeInvisibleOutlined,
    CopyOutlined,
    LockOutlined,
    UnlockOutlined,
} from '@ant-design/icons';
import {
    addQst,
    changeSelectedId,
    deleteSelectedQst,
    hiddenQst,
    lockOrUnLockQst,
} from '../../store/componentsReducer';
import { useGetQstList } from '../../hook/useGetQstList';
import { useDispatch } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export interface ToolBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
    const dispatch = useDispatch();
    const { questions, selectedId, selectedComponent } = useGetQstList();
    const [isLocked, setIsLocked] = useState(
        selectedComponent?.propsObj?.disabled,
    );

    return (
        <div className="__ToolBar">
            <Space>
                <Tooltip title="删除">
                    <Button
                        shape="circle"
                        onClick={() => dispatch(deleteSelectedQst())}
                        disabled={questions?.length < 1 || !selectedId}
                        icon={<DeleteOutlined></DeleteOutlined>}></Button>
                </Tooltip>
                <Tooltip title="隐藏">
                    <Button
                        shape="circle"
                        onClick={() =>
                            dispatch(
                                hiddenQst({ id: selectedId, isHidden: true }),
                            )
                        }
                        disabled={questions?.length < 1 || !selectedId}
                        icon={
                            <EyeInvisibleOutlined></EyeInvisibleOutlined>
                        }></Button>
                </Tooltip>
                <Tooltip title={isLocked ? '解锁' : '锁定'}>
                    <Button
                        shape="circle"
                        onClick={() => {
                            setIsLocked(!isLocked);
                            dispatch(
                                lockOrUnLockQst({
                                    id: selectedId,
                                    disabled: !isLocked,
                                }),
                            );
                        }}
                        disabled={questions?.length < 1 || !selectedId}
                        icon={
                            isLocked ? <UnlockOutlined /> : <LockOutlined />
                        }></Button>
                </Tooltip>
                <Tooltip title="复制">
                    <Button
                        shape="circle"
                        onClick={() => {
                            const newQst = cloneDeep(selectedComponent);
                            newQst.id = nanoid(36);
                            dispatch(addQst(newQst));
                            dispatch(changeSelectedId(newQst.id));
                        }}
                        disabled={questions?.length < 1 || !selectedId}
                        icon={<CopyOutlined></CopyOutlined>}></Button>
                </Tooltip>
            </Space>
        </div>
    );
};
