import { QstBaseProps } from '../../types';

export interface QParagraphProps
    extends QstBaseProps,
        React.HTMLAttributes<HTMLDivElement> {}

export const QParagraph: React.FC<QParagraphProps> = (
    props: QParagraphProps,
) => {
    return <div className="__QParagraph">QParagraph component works!</div>;
};
