const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");

    //console.log($selectors);

    let moon = `<i class="fa-solid fa-moon"></i>`;
    let sun = `<i class="fa-solid fa-sun"></i>`;


    const LightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.innerHTML = moon;
        ls.setItem("theme", "light");
    }
    const DarkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.innerHTML = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", (e) => {

        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            //console.log($themeBtn.textContent);

            if ($themeBtn.innerHTML === moon) {
                DarkMode();
            } else {
                LightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        
        if(ls.getItem("theme") === "light") LightMode();

        if(ls.getItem("theme") === "dark") DarkMode();

    });
}