/**
 * Vant 4 兼容层。
 *
 * Vant 4 移除了 v2/v3 的 Toast、Dialog 命令式对象，改为 showToast / showConfirmDialog 等函数。
 * 这里保留原组件中使用的调用方式，避免在大量页面中重复改造；内部全部使用 Vant 4 API。
 */
import {
    closeToast,
    Dialog as VanDialog,
    showConfirmDialog,
    showDialog,
    showFailToast,
    showLoadingToast,
    showSuccessToast,
    showToast,
} from 'vant';

type ToastOptions = string | Record<string, any>;

const normalize = (options: ToastOptions) =>
    typeof options === 'string' ? {message: options} : options;

export const Toast = Object.assign(
    (options: ToastOptions) => showToast(normalize(options) as any),
    {
        success: (options: ToastOptions) => showSuccessToast(normalize(options) as any),
        fail: (options: ToastOptions) => showFailToast(normalize(options) as any),
        loading: (options: ToastOptions) =>
            showLoadingToast({...normalize(options), duration: 0, forbidClick: true} as any),
        clear: () => closeToast(),
    },
);

export const Dialog = {
    confirm: showConfirmDialog,
    alert: showDialog,
    Component: VanDialog,
};
