import { useParams } from 'react-router-dom';

export interface EditProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
    const { id } = useParams<{ id: string }>();
    return <div>我是编辑问卷界面{id}</div>;
};
