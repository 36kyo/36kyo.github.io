# mermaid test

* \`\`\`mermaid と \`\`\`の間に書く

```txt
sequenceDiagram
  actor me
  participant hoge
  
  me -->+ hoge : hello
  hoge -->- me : bye
```

```mermaid
sequenceDiagram
  actor me
  participant hoge
  
  me --> hoge : hello
  hoge --> me : bye
```
