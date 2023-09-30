export type ValueOf<T> = T[keyof T];

export const QstTypeMapping = { INPUT: '填空题', TITLE: '标题展示' } as const;
export type QstType = keyof typeof QstTypeMapping;

export interface QuestionListItem {
    id: string;
    qstType: QstType;
    title?: string;
    description?: string;
    props?: string; // JSON string
    propsObj?: any; // format JSON string
    component?: any;
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
