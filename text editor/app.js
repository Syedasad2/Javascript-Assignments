var Bold = document.getElementById('bold')
var Underline = document.getElementById('underline')
var Italic = document.getElementById('italic')
var Hr = document.getElementById('hero')


// 1 Button
 Bold.addEventListener('click',function(){
    Hr.style.fontWeight='800'
 })
 Bold.addEventListener('dblclick',function(){
    Hr.style.fontWeight='normal'
 })

//  2 Button
 Underline.addEventListener('click',function(){
    Hr.style.textDecoration='underline'
 })
 Underline.addEventListener('dblclick',function(){
    Hr.style.textDecoration='none'
 })


//  3 button
 Italic.addEventListener('click',function(){
    Hr.style.fontStyle='italic'
 })
 Italic.addEventListener('dblclick',function(){
    Hr.style.fontStyle='normal'
 })