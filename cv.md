# Steshenko Dmitry
*****
## Contacts
*****
*_phone_:+375293301297
*_mail_:[3301297@gmail.com][https://mail.google.com/mail/u/0/#inbox]
*_vk_:[@dimasteshenko][https://vk.com/dimasteshenko]
*_github_:[@Stesho][https://github.com/Stesho?tab=repositories]

## About me
*****
I'm 20. Now i'm studying at the Belarusian State University of Informatics and Radioelectronics (BSUIR). I've been studying js development for six months now.

## Skills
*****
*HTML
*CSS
*JavaScript
*TypeScript
*Figma

## Code example
*****
```
function recycle(array) {
  let bins = [[],[],[],[]];
  let materials = ['paper', 'glass', 'organic', 'plastic'];
  
  for(let i = 0; i < array.length; i++) {
    bins[materials.indexOf(array[i].material)].push(array[i].type);
    if(array[i].secondMaterial) {
      bins[materials.indexOf(array[i].secondMaterial)].push(array[i].type);  
    } 
  }

  return bins;
}
```


