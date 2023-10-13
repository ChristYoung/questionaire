import { ReactElement } from 'react';

export interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {
    cardIcon?: ReactElement;
    cardTitle?: string;
    cardSubtitle?: string;
    description?: string;
    actionUrl?: string;
}

export const MenuCard: React.FC<MenuCardProps> = (props: MenuCardProps) => {
    return <div className="__MenuCard">MenuCard component works!</div>;
};
