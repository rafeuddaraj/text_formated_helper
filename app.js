const text = document.getElementById('text_id')
const shower = document.getElementById('shower')
addEventListener('keypress', (e) => {
    if (e.charCode === 13) {
        col_text = text.value.split(" ").join('_').replace(':','')
        shower.textContent = col_text
        text.value = col_text
        text.select()
        document.execCommand('copy')
        // text.value =
    }
})
