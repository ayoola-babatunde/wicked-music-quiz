document.getElementById("date").innerHTML = new Date().toDateString();

var question_count = 1
var length_count = 1

var wrapper = document.getElementById("wrapper"); 

var data = [["Track_Number", "Track_Length", "SC_Link", "Track_Name"], 
            [1, 1, "Link1_1", "Dancing Through Life"], 
            [1, 2, "Link1_2", "Dancing Through Life"], 
            [1, 3, "Link1_3", "Dancing Through Life"], 
            [1, 4, "Link1_4", "Dancing Through Life"], 
            [2, 1, "Link2_1", "Defying Gravity"], 
            [2, 2, "Link2_2", "Defying Gravity"], 
            [2, 3, "Link2_3", "Defying Gravity"], 
            [2, 4, "Link2_4", "Defying Gravity"], 
            [3, 1, "Link3_1", "One Short Day"], 
            [3, 2, "Link3_2", "One Short Day"], 
            [3, 3, "Link3_3", "One Short Day"], 
            [3, 4, "Link3_4", "One Short Day"]]

wrapper.addEventListener("click", function(event){
  var isButton = event.target.nodeName === "BUTTON"; 
  if(!isButton){
    return
  }
  var track_number = event.target.id.slice(-1);

  if(track_number == question_count){
    question_count++;
    length_count = 1;
    document.getElementById("status").innerText = "Correct";
    display(question_count, length_count, data);
  }

  else{
    document.getElementById("status").innerText = "No Try Again, Longer Length this time";
    length_count++;
    display(question_count, length_count, data);
  }
  
})

function display(track_number, track_length, database){
  console.log(track_number, track_length)
  var data_row = database.filter(row => (row[0] == track_number) && (row[1] == track_length))[0]
  document.getElementById("link").innerText = data_row[2]
}

