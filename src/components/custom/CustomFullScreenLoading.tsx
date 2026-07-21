
export const CustomFullScreenLoading = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-white dark:bg-neutral-950">
            <div className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500/40" />
                <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-indigo-500/60 [animation-delay:150ms]" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-indigo-600" />
            </div>

            <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-medium tracking-wide text-neutral-700 dark:text-neutral-200">
                    Cargando...
                </p>
                <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                </div>
            </div>
        </div>
    )
}