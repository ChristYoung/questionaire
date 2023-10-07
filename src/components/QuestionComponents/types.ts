export const QstTypeMapping = {
    INPUT: '填空题',
    TITLE: '标题展示',
    PARAGRAPH: '段落',
    SINGLE_CHOICE: '单选题',
} as const;
export type QstType = keyof typeof QstTypeMapping;

export interface QstBaseProps {
    isHidden?: boolean;
    disabled?: boolean;
}

export interface QuestionListItem {
    id: string; // from fe.
    qid?: string; // from server
    qstType: QstType;
    title?: string;
    description?: string;
    props?: string; // JSON string
    propsObj?: QstBaseProps; // format JSON string
}

export interface OptItem {
    value: string;
    label: string;
}

export interface QuestionnaireInfo {
    name: string;
    description?: string;
    id: string;
    questions?: QuestionListItem[];
    style?: string;
    script?: string;
    status?: 'PUB' | 'DRAFT';
}

export interface QstGroup {
    groupName: string;
    componentList: QstType[];
    gId: string;
}
