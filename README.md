# GitHub-Repos


------ New Info ------
 - window.location = "url"
 - script load before html
 - css override happens in the same property style
 - when you add  2 script files within html they will be merged together as one file
 - NodeList [] : means that you have not selected elments
 - when you render elements using script file consider syncrounse 

----- Errors ----------
[1]
[Error] “Cannot read property ‘addEventListener’ of null”
[Reasone] "tring to access not exist element in dom " => null.adddEventListner

[2]
[Error] "Uncaught SyntaxError: Unexpected end of input"
[Reasone]  "missing to close an element"

[3]
[Error]  [object Object] 
[Reasone]  "when you tring to dispaly object as string"

[4]
[Error] "Uncaught TypeError: Cannot set properties of undefined (setting 'display')"
[Reason] tyring to style undefined element in script  => undefined.style.display = "none


----- Problems------
[1]
- font awsome icons depends on befoe and after elements so dont make anychanges in these elements

::before,
::after {
font-family: monospace;  => font aweosme will not work
}
- make sure that you are using free icons 
- when you use cdn make sure that you are using the last verion of font awesome
- also you can use span =>  <span class="fa-regular fa-heart"></span>

[2]



