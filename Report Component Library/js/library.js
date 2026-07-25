function copyHTML(componentId) {

    const component = document.getElementById(componentId);

    const html = component.innerHTML.trim();

    navigator.clipboard.writeText(html)
        .then(() => {

            const button = document.querySelector(
                `[data-copy="${componentId}"]`
            );

            const originalText = button.innerText;

            button.innerText = "Copied!";

            setTimeout(() => {
                button.innerText = originalText;
            }, 2000);

        })
        .catch(err => {
            console.error("Copy failed:", err);
        });

}