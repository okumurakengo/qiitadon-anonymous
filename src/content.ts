new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
        const images: NodeListOf<HTMLDivElement> = (mutation.target as HTMLElement)
            .querySelectorAll<HTMLDivElement>("[class^=account__avatar]:not(.account__avatar-overlay)")
        for (const image of images) {
            image.style.backgroundImage = `url("${chrome.extension.getURL("god.png")}")`
        }
    
        const nodeList: NodeListOf<HTMLElement> = (mutation.target as HTMLElement)
            .querySelectorAll<HTMLElement>("[class^=display-name], .notification__display-name, .status__display-name strong")
        for (const node of nodeList) {
            node.textContent = "神ゆえに名はない"
        }
    }
}).observe(document.getElementById("mastodon") as Node, {
    childList: true,
    subtree: true,
})
