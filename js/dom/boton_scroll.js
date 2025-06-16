const d = document;
const w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    
    

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 1200) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        
        //console.log(w.pageYOffset, d.documentElement.scrollTop); sirve para mostrar la cantidad de px desde el top del window, comentado porque era solo para mostrar valores como ejemplo
    });

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }

    });
}