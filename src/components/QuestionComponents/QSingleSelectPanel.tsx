export interface QSingleSelectPanelProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const QSingleSelectPanel: React.FC<QSingleSelectPanelProps> = (
    props: QSingleSelectPanelProps,
) => {
    return (
        <div className="__QSingleSelectPanel">
            QSingleSelectPanel component works!
        </div>
    );
};
