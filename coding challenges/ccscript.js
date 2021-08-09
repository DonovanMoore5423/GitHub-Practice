var challanges=[
    "Convert Minutes into Seconds",
    "Less Than 100?",
    "Is the Number Less than or Equal to Zero?"
]
var content= $("#content");
(function postContent(){

    for(position=0;position<challanges.length;position++){
    let photoNumber=position+1;
        let newContent=`<h3>
${challanges[position]}
</h3>
<section>
<p> Uncompleted Challange</p>
<img src="setup${photoNumber}.PNG" alt="">
<p> Code</p>
<img src="pass${photoNumber}.PNG" alt="">
<p> Completed Challange</p>
<img src="submit${photoNumber}.PNG" alt="">
</section>
`
content.append(newContent);

console.log(position);
    };

})();