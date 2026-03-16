(function () {
    const THEME_KEY = "personal_site_theme";
    const body = document.body;
    const buttons = document.querySelectorAll(".theme-switcher__button");

    // 保存済みのテーマがあれば復元
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    if (savedTheme && /^theme-[a-e]$/.test(savedTheme)) {
        body.className = body.className
            .split(" ")
            .filter((c) => !/^theme-[a-e]$/.test(c))
            .concat(savedTheme)
            .join(" ");

        buttons.forEach((btn) => {
            btn.classList.toggle(
                "is-active",
                btn.dataset.theme && `theme-${btn.dataset.theme}` === savedTheme
            );
        });
    }

    // クリックで切り替え
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const t = btn.dataset.theme;
            if (!t) return;
            const themeClass = `theme-${t}`;

            body.className = body.className
                .split(" ")
                .filter((c) => !/^theme-[a-e]$/.test(c))
                .concat(themeClass)
                .join(" ");

            buttons.forEach((b) =>
                b.classList.toggle("is-active", b === btn)
            );

            window.localStorage.setItem(THEME_KEY, themeClass);
        });
    });
})();

// フッターの年表示（index.htmlから移動）
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
