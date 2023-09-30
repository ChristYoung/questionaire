import { Tabs } from 'antd';
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons';
import { ComponentLibs } from './ComponentLibs';

export interface LeftPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LeftPanel: React.FC<LeftPanelProps> = (props: LeftPanelProps) => {
    const tabItems = [
        {
            key: '1_get_qst_libs',
            label: (
                <span>
                    <AppstoreAddOutlined />
                    组件库
                </span>
            ),
            children: <ComponentLibs />,
        },
        {
            key: '2_get_layers',
            label: (
                <span>
                    <BarsOutlined />
                    图层
                </span>
            ),
            children: <div>图层</div>,
        },
    ];
    return (
        <Tabs
            items={tabItems}
            defaultActiveKey="1_get_qst_libs"
            className="__leftPanel"
        />
    );
};
