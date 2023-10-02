import { Button, Space, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteSelectedQst } from '../../store/componentsReducer';
import { useGetQstList } from '../../hook/useGetQstList';
import { useDispatch } from 'react-redux';

export interface ToolBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
    const dispatch = useDispatch();
    const { questions } = useGetQstList();
    const handleClear = () => dispatch(deleteSelectedQst());

    return (
        <div className="__ToolBar">
            <Space>
                <Tooltip title="删除">
                    <Button
                        shape="circle"
                        onClick={handleClear}
                        disabled={questions?.length < 1}
                        icon={<DeleteOutlined></DeleteOutlined>}></Button>
                </Tooltip>
            </Space>
        </div>
    );
};
