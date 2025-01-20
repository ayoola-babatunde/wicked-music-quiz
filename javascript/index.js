var wrapper = document.getElementById("wrapper"); 

var data1 = [["Question Number", "Song Name", "Track Length", "SC ID", "Difficulty"], 
            [1, "Popular", 1, 2009633787, 1], 
            [1, "Popular", 2, 2009633823, 1], 
            [1, "Popular", 3, 2009633687, 1], 
            [1, "Popular", 4, 2009633679, 1], 
            [2, "Dancing Through Life", 1, 2009633643, 1], 
            [2, "Dancing Through Life", 2, 2009633815, 1], 
            [2, "Dancing Through Life", 3, 2009633775, 1], 
            [2, "Dancing Through Life", 4, 2009633843, 1], 
            [3, "I'm Not That Girl", 1, 2009633635, 1], 
            [3, "I'm Not That Girl", 2, 2009633587, 1], 
            [3, "I'm Not That Girl", 3, 2009633743, 1], 
            [3, "I'm Not That Girl", 4, 2009633879, 1], 
            [4, "One Short Day", 1, 2009633799, 1], 
            [4, "One Short Day", 2, 2009633647, 1], 
            [4, "One Short Day", 3, 2009633831, 1], 
            [4, "One Short Day", 4, 2009633707, 1], 
            [5, "No One Mourns The Wicked", 1, 2009633651, 2], 
            [5, "No One Mourns The Wicked", 2, 2009633675, 2], 
            [5, "No One Mourns The Wicked", 3, 2009633691, 2], 
            [5, "No One Mourns The Wicked", 4, 2009633715, 2], 
            [6, "The Wizard And I", 1, 2009633731, 2], 
            [6, "The Wizard And I", 2, 2009633667, 2], 
            [6, "The Wizard And I", 3, 2009633723, 2], 
            [6, "The Wizard And I", 4, 2009633827, 2], 
            [7, "What Is This Feeling?", 1, 2010334447, 1], 
            [7, "What Is This Feeling?", 2, 2010334423, 1], 
            [7, "What Is This Feeling?", 3, 2010334427, 1], 
            [7, "What Is This Feeling?", 4, 2010334435, 1], 
            [8, "Dancing Through Life", 1, 2009633859, 1], 
            [8, "Dancing Through Life", 2, 2009633599, 1], 
            [8, "Dancing Through Life", 3, 2009633655, 1], 
            [8, "Dancing Through Life", 4, 2009633855, 1], 
            [9, "No One Mourns The Wicked", 1, 2009633779, 2], 
            [9, "No One Mourns The Wicked", 2, 2009633839, 2], 
            [9, "No One Mourns The Wicked", 3, 2009633803, 2], 
            [9, "No One Mourns The Wicked", 4, 2009633603, 2], 
            [10, "Defying Gravity", 1, 2009633615, 2], 
            [10, "Defying Gravity", 2, 2009633639, 2], 
            [10, "Defying Gravity", 3, 2009633739, 2], 
            [10, "Defying Gravity", 4, 2009633783, 2]]

var data2 = [["Question Number", "Song Name", "Track Length", "SC ID", "Difficulty"], 
            [1, "One Short Day", 1, 2009633863, 2], 
            [1, "One Short Day", 2, 2009633751, 2], 
            [1, "One Short Day", 3, 2009633659, 2], 
            [1, "One Short Day", 4,  2009633867, 2], 
            [2, "I'm Not That Girl", 1, 2009633611, 2], 
            [2, "I'm Not That Girl", 2, 2009633835, 2], 
            [2, "I'm Not That Girl", 3, 2009633719, 2], 
            [2, "I'm Not That Girl", 4,  2009633771, 2], 
            [3, "Defying Gravity", 1, 2009633607, 3], 
            [3, "Defying Gravity", 2, 2009633591, 3], 
            [3, "Defying Gravity", 3, 2009633623, 3], 
            [3, "Defying Gravity", 4,  2009633747, 3], 
            [4, "What Is This Feeling?", 1, 2010334443, 3], 
            [4, "What Is This Feeling?", 2, 2010334431, 3], 
            [4, "What Is This Feeling?", 3, 2010334419, 3], 
            [4, "What Is This Feeling?", 4,  2010334439, 3], 
            [5, "Dancing Through Life", 1, 2009633819, 5], 
            [5, "Dancing Through Life", 2, 2009633727, 5], 
            [5, "Dancing Through Life", 3, 2009633755, 5], 
            [5, "Dancing Through Life", 4,  2009633735, 5], 
            [6, "No One Mourns The Wicked", 1, 2009633663, 5], 
            [6, "No One Mourns The Wicked", 2, 2009633811, 5], 
            [6, "No One Mourns The Wicked", 3, 2009633683, 5], 
            [6, "No One Mourns The Wicked", 4,  2009633763, 5], 
            [7, "One Short Day", 1, 2009633619, 2], 
            [7, "One Short Day", 2, 2009633759, 2], 
            [7, "One Short Day", 3, 2009633699, 2], 
            [7, "One Short Day", 4,  2009633595, 2], 
            [8, "Defying Gravity", 1, 2009633703, 3], 
            [8, "Defying Gravity", 2, 2009633847, 3], 
            [8, "Defying Gravity", 3, 2009633767, 3], 
            [8, "Defying Gravity", 4,  2009633627, 3], 
            [9, "Popular", 1, 2009633807, 5], 
            [9, "Popular", 2, 2009633851, 5], 
            [9, "Popular", 3, 2009633791, 5], 
            [9, "Popular", 4,  2009633671, 5], 
            [10, "The Wizard And I", 1, 2009633711, 5], 
            [10, "The Wizard And I", 2, 2009633631, 5], 
            [10, "The Wizard And I", 3, 2009633695, 5], 
            [10, "The Wizard And I", 4,  2009633795, 5]]

var active_data = data1
var active_data_name = "data1"

var score_count = 0
var question_count = 1
var length_count = 1
var correct_track_name = active_data[question_count][1]

document.getElementById("sc link").src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${active_data[question_count][3]}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`

wrapper.addEventListener("click", function(event){
  var isButton = event.target.nodeName === "BUTTON"; 
  if(!isButton){
    return
  }
  var track_name = event.target.id;

  if(track_name == correct_track_name){
    score_count += length_count
    question_count++;
    length_count = 1;
    document.getElementById("status").innerText = "Correct";
    setTimeout(function() {}, 1000);

    if(question_count > 10){
      end_quiz(); 
    }
    else{
      display(question_count, length_count, active_data);
    }
  }

  else if(length_count==4){
    document.getElementById("status").innerText = `Incorrect, it was ${correct_track_name}. Next track...`;
    score_count += 5
    question_count++;
    length_count = 1; 
    setTimeout(function() {}, 1000);

    if(question_count > 10){
      end_quiz(); 
    }
    else{
      display(question_count, length_count, active_data);
    }

  }

  else{
    document.getElementById("status").innerText = "Try Again, longer clip this time";
    length_count++;
    setTimeout(function() {}, 1000);

    if(question_count > 10){
      end_quiz(); 
    }
    else{
      display(question_count, length_count, active_data);
    }
  }
  
})

function display(track_number, track_length, database){
  var data_row = database.filter(row => (row[0] == track_number) && (row[2] == track_length))[0]
  correct_track_name = data_row[1]
  document.getElementById("sc link").src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data_row[3]}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`
  
}

function end_quiz(){

  if(active_data_name == "data1"){
    document.getElementById("final score").innerText = `Great job, you hit ${score_count} on par 15`
    document.getElementById("go again prompt").innerHTML = `<button id="click to go again">
          Go Again? (slightly harder questions)
        </button>`
    
    var new_button = document.getElementById("go again"); 

    new_button.addEventListener("click", function(event){
      var isButton2 = event.target.nodeName === "BUTTON"; 
      if(!isButton2){
        return
      }

      active_data = data2
      active_data_name = "data2"
      score_count = 0
      question_count = 1
      length_count = 1
      correct_track_name = active_data[question_count][1]
      
      document.getElementById("sc link").src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${active_data[question_count][3]}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`


      document.getElementById("go again prompt").innerHTML = ""
      document.getElementById("final score").innerText = ""
    })}

  else if(active_data_name = "data2"){
    document.getElementById("final score").innerText = `Great job, you hit ${score_count} on par 40. That's all, thanks for playing! `
  }
};

