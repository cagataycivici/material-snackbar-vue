export default {
    root: "-translate-x-1/2",
    container:
        "bg-surface-900 text-surface-50 rounded-lg py-2 px-4 min-w-[20rem] dark:bg-surface-100 dark:text-surface-700",
    transition: {
        enterFromClass: "opacity-0 scale-50",
        enterActiveClass: "transition-[transform,opacity] duration-300",
        leaveActiveClass: "transition-[transform,opacity] duration-300",
        leaveToClass: "opacity-0 scale-50",
    },
};
