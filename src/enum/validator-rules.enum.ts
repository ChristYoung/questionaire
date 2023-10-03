// 表单验证规则
export const Required = (target: string, customMessage?: string) => {
    return {
        required: true,
        message: customMessage || `${target}不能为空`,
    };
};
