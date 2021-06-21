student_name_array=[];
function submit(){
   for (var j=1;j<=4;j++){
       var student_name=document.getElementById("name_of_the_student_"+j).value;
       console.log(student_name);
       student_name_array.push(student_name);
   } 
   console.log(student_name_array);
   var student_array_length=student_name_array.length;
   console.log(student_array_length);
   var student_array_display=[];
   for (var k=0;k<student_array_length;k++){
student_array_display.push("<h4>Name -"+student_name_array[k]+"</h4>");
console.log(student_array_display);
   }
   console.log(student_array_display);
   document.getElementById("display_name_with_commas").innerHTML=student_array_display;

   var remove_commas=student_array_display.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;

   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    var student_array_display_sorting=[];
    var student_array_length=student_name_array.length;
   console.log(student_array_length);
   for (var k=0;k<student_array_length;k++){
student_array_display_sorting.push("<h4>Name -"+student_name_array[k]+"</h4>");
console.log(student_array_display_sorting);
   }
   console.log(student_array_display_sorting);
   document.getElementById("display_name_with_commas").innerHTML=student_array_display_sorting;

   var remove_commas=student_array_display_sorting.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}