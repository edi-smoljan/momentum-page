function selectLanguage(lang) {
    document.querySelectorAll("[lang]").forEach(el => {
        if (el.attributes.lang.value == lang)
            el.style.display = "initial";
        else
            el.style.display = "none";
    });
}

selectLanguage("hr");