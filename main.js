var images =
["chaitali.jpg","girl.jpg", "me.jpg","profile.jpg"];
var names=["Sourav Jain","Anshika Jain","Lakshya Jain","Akshita Jain"];
var i=0; var numbers_of_family_member_in_array = 4;
function update()
{
    
   
    if (i == 3)
    {
        i=0;
    }
    var updateimage= images[i];
    var updatename= names[i];
    document.getElementById("family_member_image").scr=updateimage;
    document.getElementById("family_member_name").innerHTML=updatename;i++;
}