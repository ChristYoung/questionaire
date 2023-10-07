import { Tabs } from 'antd';
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { PropsSetting } from './PropsSetting';
import { PagesSetting } from './PagesSetting';
import { useGetQstList } from '../../hook/useGetQstList';
import { useEffect, useState } from 'react';

export interface RightPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RightPanel: React.FC<RightPanelProps> = (
    props: RightPanelProps,
) => {
    const [activeKey, setActiveKey] = useState<string>('2_get_layers');
    const { selectedId } = useGetQstList();

    useEffect(() => {
        if (selectedId) {
            setActiveKey('1_get_qst_libs');
        } else {
            setActiveKey('2_get_layers');
        }
    }, [selectedId]);

    const tabItems = [
        {
            key: '2_get_layers',
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <PagesSetting />,
        },
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
    ];
    return (
        <div className="__RightPanel">
            <Tabs
                items={tabItems}
                activeKey={activeKey}
            />
        </div>
    );
};
