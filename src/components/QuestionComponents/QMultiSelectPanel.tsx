export interface QMultiSelectPanelProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const QMultiSelectPanel: React.FC<QMultiSelectPanelProps> = (
    props: QMultiSelectPanelProps,
) => {
    return (
        <div className="__QMultiSelectPanel">
            QMultiSelectPanel component works!
        </div>
    );
};
