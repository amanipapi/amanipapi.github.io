document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");
    const contentParagraphs = document.querySelectorAll("[data-lang]");
    const languageTitle = document.getElementById("language-title");
    const siteTitle = document.getElementById("site-title");

    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        contentParagraphs.forEach(function (paragraph) {
            const lang = paragraph.getAttribute("data-lang");
            if (lang === selectedLanguage) {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });

        // Update the title and language title based on the selected language
        if (selectedLanguage === "am") {
            languageTitle.textContent = "የፋውንዴሽን ትምህርት";
            siteTitle.textContent = "የፋውንዴሽን ትምህርት";
        } else {
            languageTitle.textContent = "Foundation Notes";
            siteTitle.textContent = "Foundation Notes";
        }
    });

    // Set the initial language and title based on the dropdown selection
    languageSelect.dispatchEvent(new Event("change"));

    // Collapsible functionality
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            collapsible.classList.toggle("active");
            const content = collapsible.nextElementSibling;
            //const chapter = findChapterElement(collapsible); // Use a function to find the .chapter element

            const isCollapsed = !collapsible.classList.contains("active");

            if (isCollapsed) {
                content.style.maxHeight = null;
                // if (chapter) {
                //     chapter.style.maxHeight = null;
                // }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                // if (chapter) {
                //     chapter.style.maxHeight = chapter.scrollHeight + "px";
                // }
            }
        });
    });

});

    // // Function to find the .chapter element, traversing up or down the DOM
    // function findChapterElement(element) {
    //     let currentElement = element.parentElement;

    //     // Check if .chapter is a direct child
    //     if (currentElement.classList.contains("chapter")) {
    //         return currentElement;
    //     }

    //     // Check if .chapter is a direct parent
    //     const chapterElement = currentElement.querySelector(".chapter");
    //     if (chapterElement) {
    //         return chapterElement;
    //     }

    //     // If not found, traverse up the DOM to find .chapter
    //     while (currentElement) {
    //         if (currentElement.classList.contains("chapter")) {
    //             return currentElement;
    //         }
    //         currentElement = currentElement.parentElement;
    //     }

    //     return null; // Return null if .chapter is not found
    // }
