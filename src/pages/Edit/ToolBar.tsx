import {
    CopyOutlined,
    DeleteOutlined,
    EyeInvisibleOutlined,
    LockOutlined,
    UnlockOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { copyQstAction } from '../../store/componentsReducer/componentsSaga';
import {
    deleteSelectedQst,
    getQstListSelector,
    hiddenQst,
    lockOrUnLockQst,
} from '../../store/componentsReducer/componentsSlice';

export interface ToolBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
    const dispatch = useDispatch();
    const { questions, selectedId, selectedComponent } =
        useSelector(getQstListSelector);
    const isLocked = !!selectedComponent?.propsObj?.disabled;

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
                            dispatch(copyQstAction());
                        }}
                        disabled={questions?.length < 1 || !selectedId}
                        icon={<CopyOutlined></CopyOutlined>}></Button>
                </Tooltip>
            </Space>
        </div>
    );
};
