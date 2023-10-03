export type ValueOf<T> = T[keyof T];

export const QstTypeMapping = {
    INPUT: '填空题',
    TITLE: '标题展示',
    PARAGRAPH: '段落',
} as const;
export type QstType = keyof typeof QstTypeMapping;

export interface QstBaseProps {
    isHidden?: boolean;
    disabled?: boolean;
    [x: string]: any;
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

export interface QuestionnaireInfo {
    name: string;
    description?: string;
    questions: QuestionListItem[];
}

export interface QstGroup {
    groupName: string;
    componentList: QstType[];
    gId: string;
}
