import { Tabs } from 'antd';
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { PropsSetting } from './PropsSetting';

export interface RightPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RightPanel: React.FC<RightPanelProps> = (
    props: RightPanelProps,
) => {
    const tabItems = [
        {
            key: '1_get_qst_libs',
            label: (
                <span>
                    <FileTextOutlined />
                    属性
                </span>
            ),
            children: <PropsSetting />,
        },
        {
            key: '2_get_layers',
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <div>页面设置</div>,
        },
    ];
    return (
        <div className="__RightPanel">
            <Tabs
                items={tabItems}
                defaultActiveKey="1_get_qst_libs"
            />
        </div>
    );
};
