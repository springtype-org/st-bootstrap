export const importBootstrap = async (importLibraries = false) => {

    if (importLibraries) {
        (window as any).$ = ((await import("jquery")) as any).default;
        await import("bootstrap");
        // for tooltips etc. to work
        await import("popper.js");
    }
}