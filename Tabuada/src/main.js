(async function () {
    if (CSS["paintWorklet"] === undefined)
      await import("https://unpkg.com/css-paint-polyfill");
    CSS.paintWorklet.addModule(
      "https://rawcdn.githack.com/CSSHoudini/css-houdini/6979b873e80f9120f52bd481fbdf2d4c60db6b19/src/connections/dist/connections.js"
    );
  })();

function multiplicar() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) 
        tab.innerHTML = ''
        for(let c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}