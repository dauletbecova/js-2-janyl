const shows = document.querySelectorAll(".show")
for (const show of shows) {
    const div = show.parentElement
    const span = div.children[2]
    span.style.display = 'none'
    show.onclick = () => {
        if (span.style.display === 'none') {
            span.style.display = 'contents'
            show.style.backgroundColor = 'red'
        } else {
            show.style.backgroundColor = 'lime'
            span.style.display = 'none'
        }
    }
}