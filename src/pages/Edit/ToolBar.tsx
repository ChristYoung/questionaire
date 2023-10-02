import { Button, Space, Tooltip } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {
    changeQstProps,
    changeSelectedId,
    deleteSelectedQst,
    hiddenQst,
} from '../../store/componentsReducer';
import { useGetQstList } from '../../hook/useGetQstList';
import { useDispatch } from 'react-redux';

export interface ToolBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
    const dispatch = useDispatch();
    const { questions, selectedId } = useGetQstList();

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
                <Tooltip title="删除">
                    <Button
                        shape="circle"
                        disabled={questions?.length < 1}
                        icon={<DeleteOutlined></DeleteOutlined>}></Button>
                </Tooltip>
            </Space>
        </div>
    );
};
