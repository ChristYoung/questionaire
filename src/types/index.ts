export type ValueOf<T> = T[keyof T];

export const QstTypeMapping = { QInput: '填空题', QTitle: '标题展示' } as const;

export interface QuestionListItem {
    id: string;
    title?: string;
    description?: string;
    qstType: keyof typeof QstTypeMapping;
    props: string; // JSON string
}

export interface QuestionnaireInfo {
    name: string;
    description?: string;
    questions: QuestionListItem[];
}
