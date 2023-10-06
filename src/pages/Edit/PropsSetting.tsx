import { QstPropsPanelMapping } from '../../enum/constant.enum';
import { useGetQstList } from '../../hook/useGetQstList';
import { changeQstProps } from '../../store/componentsReducer/componentsSlice';
import { useDispatch } from 'react-redux';

export const PropsSetting: React.FC = () => {
    const { selectedComponent } = useGetQstList();
    const dispatch = useDispatch();
    const changeProps = (newProps: any) => {
        dispatch(changeQstProps({ id: selectedComponent.id, newProps }));
    };

    if (!selectedComponent) {
        return <div style={{ textAlign: 'center' }}>未选中任何组件</div>;
    } else {
        const ComponentConfig = QstPropsPanelMapping[selectedComponent.qstType];
        return (
            <div className="__PropsSetting">
                <ComponentConfig
                    {...selectedComponent.propsObj}
                    onChange={changeProps}></ComponentConfig>
            </div>
        );
    }
};
