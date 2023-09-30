export interface PropsSettingProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const PropsSetting: React.FC<PropsSettingProps> = (
    props: PropsSettingProps,
) => {
    return <div className="__PropsSetting">PropsSetting component works!</div>;
};
