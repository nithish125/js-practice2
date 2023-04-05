// var names=document.querySelector('#name').value
var names1=document.getElementById("name")
const names2=document.getElementById('number')
const submits=document.getElementById('submit')
var h=document.querySelector(".nm")
submits.addEventListener('click',(e)=>{
    // alert("")
    a=names1.value;
    c=names2.value
    console.log(a)
    console.log(c)
    var g=["Friend","Love","Affection","Married","Enemy","Sister"]
a.length>c.length ?(b=a,v=c):(b=c,v=a)
s=b.split('')
d=v.split('')
for(i=0;i<s.length;i++){
    for(j=0;j<d.length;j++){
        if(s[i]==d[j]){
            s.splice(i,1);
            d.splice(j,1)
        }
    }
}
q=d.length+s.length
while(g.length>1){
    console.log("hjh")
    n=q%g.length
    g.splice(n,1)
}
console.log(g)
h.innerHTML=(g[0])

    // console.log(names.split(''))
    // names.split('').splice(0,2,2)
    // console.log(names.value)

    e.preventDefault();
//     for(i=0;i<names.length;i++){
//    var a= (numbers.value).includes(names[i])
//    if(!a){
//         // console.log(i)
//    }
//     } 
    
})


