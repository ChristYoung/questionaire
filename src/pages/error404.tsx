import { Button, Result } from 'antd';

export interface Error404Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Error404: React.FC<Error404Props> = (props: Error404Props) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}></Result>
    );
};
