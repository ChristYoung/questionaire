import { QstPropsPanelMapping } from '../../enum/constant.enum';
import { useGetQstList } from '../../hook/useGetQstList';

export interface PropsSettingProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const PropsSetting: React.FC<PropsSettingProps> = (
    props: PropsSettingProps,
) => {
    const { selectedComponent } = useGetQstList();
    if (!selectedComponent) {
        return <div style={{ textAlign: 'center' }}>未选中任何组件</div>;
    } else {
        const ComponentConfig = QstPropsPanelMapping[selectedComponent.qstType];
        return (
            <div className="__PropsSetting">
                <ComponentConfig
                    {...selectedComponent.propsObj}></ComponentConfig>
            </div>
        );
    }
};
