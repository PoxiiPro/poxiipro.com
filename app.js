const copyButtons = document.querySelectorAll('.tile-copy-button')
console.log(copyButtons)

async function copyText(e) {
// allow the copy button to copy link to clipboard instead of opening the link in a tab
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

copyButtons.forEach(copyButtons =>
    copyButtons.addEventListener('click', copyText))

