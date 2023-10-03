// 表单验证规则

// 必填
export const Required = (target: string, customMessage?: string) => {
    return {
        required: true,
        message: customMessage || `${target}不能为空`,
    };
};

// 多个选项不能重复
// export const Repeat = (target: string, customMessage?: string) => {};
