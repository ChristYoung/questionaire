export type ValueOf<T> = T[keyof T];

export const QstTypeMapping = { INPUT: '填空题', TITLE: '标题展示' } as const;
export type QstType = keyof typeof QstTypeMapping;

export interface QuestionListItem {
    id: string;
    title?: string;
    description?: string;
    qstType: QstType;
    props: string; // JSON string
}

export interface QuestionnaireInfo {
    name: string;
    description?: string;
    questions: QuestionListItem[];
}
