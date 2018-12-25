const fetch = window.fetch
const marked = window.marked

fetch('./til.md')
  .then(resp => resp.text())
  .then(til => {
    const tokens = marked.lexer(til)
    let curr = []
    const items = tokens
      .reduce((acc, token, i) => {
        if (i > 0 && token['type'] === 'heading' && token['depth'] === 2) {
          curr.links = tokens.links
          acc.push(curr)
          curr = []
        }
        curr.push(token)
        return acc
      }, [])
      .map(token => marked.parser(token))

    const rand = Math.floor(Math.random() * items.length)
    document.querySelector('.til').innerHTML = items[rand]
  })
