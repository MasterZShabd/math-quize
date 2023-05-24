var player1_score=0;
var player2_score=0;
player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn-"+player1;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2;

function send(){
   no_1=document.getElementById("no_1").value;
   no_2=document.getElementById("no_2").value;
   word=parseInt(no_1)*parseInt(no_2);
   question_number = "<h4>" + no_1 + " X "+ no_2+"</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row =  question_number + input_box + check_button ; 
   document.getElementById("output").innerHTML = row;
   document.getElementById("no_1").value = "";
   document.getElementById("no_2").value = "";
}
player_question="player1";
player_answer="player2";
function check(){
    get_ans=document.getElementById("input_check_box").value;
    ans=get_ans.toLowerCase();
    if(ans==word){
        if(player_answer=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(player_question=="player1"){
        player_question="player2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2;
    }
    else{
        player_question="player1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1;
    }
    if(player_answer=="player1"){
        player_answer="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2;
    }
    else{
        player_answer="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1;
    }
    document.getElementById("output").innerHTML="";
}