import { Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { QSingleSelectDefaultProps } from './DefaultProps';

export interface QSingleSelectPanelProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const QSingleSelectPanel: React.FC<QSingleSelectPanelProps> = (
    props: QSingleSelectPanelProps,
) => {
    const [form] = useForm();
    return (
        <div className="__QSingleSelectPanel">
            QSingleSelectPanel component works!
        </div>
    );
};

QSingleSelectPanel.defaultProps = {
    ...QSingleSelectDefaultProps,
} as QSingleSelectPanelProps;
