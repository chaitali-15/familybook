var images =
["girl.jpeg","chaitali.jpg", "me.jpg","profile.jpg"];
var names=["Member1","Member2","Member3","Member4"];
var i=1; var numbers_of_family_member_in_array = 4;
function update()
{
    
   
    if (i == 4)
    {
        i=0;
    }
   
    var updateimage= images[i];
    var updatename= names[i];
    document.getElementById("family_member_image").src=updateimage;
    document.getElementById("family_member_name").innerHTML=updatename;i++;
}