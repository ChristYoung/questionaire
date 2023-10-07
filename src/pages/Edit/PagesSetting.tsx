export interface PagesSettingProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const PagesSetting: React.FC<PagesSettingProps> = (
    props: PagesSettingProps,
) => {
    return <div className="__PagesSetting">PagesSetting component works!</div>;
};
