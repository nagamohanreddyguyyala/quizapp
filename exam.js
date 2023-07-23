var answersData={
  "1":"",
  "2":"",
  "3":"",
  "4":"",
  "5":"",
  "6":"",
  "7":"",
  "8":"",
  "9":"",
  "10":""

}
var savelaterQuestions={};
var currrentQuestion=1;
var fiveMinutes = 120 * 1
$(document).ready(function(){
 console.log(gridColumns)
 disablePrevAndNext(1)
 startTimer(fiveMinutes);
 bindQuestionButtons(gridColumns);
 bindQuestion(currQuestion=1);
 $("#1").addClass("button-select");
 $("#btnSave").click(function(){
  //var currrentQuestion=1;
  let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
  //currrentQuestion=$(".button-select").text();
  let currQuesNum=currrentQuestion;
  answersData[currQuesNum]=currCheckAnsw;
  // need to add toaster
  removeFromsavefromlaterObj(currrentQuestion);
  $("#"+currQuesNum).addClass('btn btn-success').addClass('saved');
 })

 $("#btnpreviewlater").click(function(){
      let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
      let currQuesNum=currrentQuestion
      savelaterQuestions[currQuesNum]=currCheckAnsw;
      answersData[currQuesNum]=currCheckAnsw;
      removeFromsavefromlaterObj(currrentQuestion);
      $("#"+currrentQuestion).addClass("btn btn-danger").addClass("savelater");
      
 })

 $("#btnNext").click(function(){
    let nextQuestion=parseInt(currrentQuestion)+1;
    $("#centerdiv").remove();
    $(".cmnbtn").removeClass('button-select');
    currrentQuestion=nextQuestion;
    $("#"+currrentQuestion).addClass("button-select");
    disablePrevAndNext(currrentQuestion);
    bindQuestion(nextQuestion);
    saveForLaterStyling(currrentQuestion);
 })
 $("#btnprevious").click(function(){
      let prevQuestion=parseInt(currrentQuestion)-1;
      $("#centerdiv").remove();
      $(".cmnbtn").removeClass('button-select');
      currrentQuestion=prevQuestion;
      $("#"+currrentQuestion).addClass("button-select");
      disablePrevAndNext(currrentQuestion);
      bindQuestion(prevQuestion);
      saveForLaterStyling(currrentQuestion);
 })
 $("#btnSubmit").click(function(e){
    //let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
    //let currQuesNum=currrentQuestion;
    //answersData[currQuesNum]=currCheckAnsw;
    let score=caluculateScore(answersData);
    $("#examQuesDiv").hide();
    $("#resultModal").show();
    $("#correctAnswers").append(score);
    $(".showResult").trigger('click');
   
    
    //location.href="startpage.html"
  
 })

 $(".cmnbtn").click(function(){
        $("#centerdiv").remove();
        let currQuestion=$(this).attr("id");
        currrentQuestion=parseInt(currQuestion);
        disablePrevAndNext(currQuestion);
        $(".cmnbtn").removeClass('button-select');
        $(this).addClass("button-select");
        bindQuestion(currQuestion);
 })

 $("#btn").click(function(){
  location.href="exam.html"
 })
 $("#close").click(function(){
  location.href="startpage.html"
 })
 
  

//  $("button").click(function(){
//   if($(this).text()=="Save & Next"){
//     let nextQuestion=currrentQuestion+1;
//     let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
//     let currQuesNum=currrentQuestion;
//     answersData[currQuesNum]=currCheckAnsw;
//     $("#centerdiv").remove();
//     $(".cmnbtn").removeClass('button-select');
//     currrentQuestion=nextQuestion;
//     removeFromsavefromlaterObj(currrentQuestion);
//     disablePrevAndNext(currrentQuestion);
//     bindQuestion(nextQuestion);
//     saveForLaterStyling(currrentQuestion);
    
//   }else if($(this).text()=="Previous"){
//       let prevQuestion=currrentQuestion-1;
//       let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
//       let currQuesNum=currrentQuestion;
//       answersData[currQuesNum]=currCheckAnsw;
//       $("#centerdiv").remove();
//       $(".cmnbtn").removeClass('button-select');
//       currrentQuestion=prevQuestion;
//       //$("#"+currrentQuestion).addClass("button-select");
//       disablePrevAndNext(currrentQuestion);
//       bindQuestion(prevQuestion);
//       saveForLaterStyling(currrentQuestion);
//   }else if($(this).text()=="Save For Later"){
//     let nextQuestion=currrentQuestion+1;
//     let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
//     let currQuesNum=currrentQuestion
//     savelaterQuestions[currQuesNum]=currCheckAnsw;
//     answersData[currQuesNum]=currCheckAnsw;
//     $("#centerdiv").remove();
//     $(".cmnbtn").removeClass('button-select');
//     $("#"+currrentQuestion).addClass("btn btn-danger");
//     currrentQuestion=nextQuestion;
//     $("#"+currrentQuestion).addClass("button-select");
//     disablePrevAndNext(currrentQuestion);
//     if(!(nextQuestion>10)){
//       bindQuestion(nextQuestion);
//     }else{
//       bindQuestion(10);
//       $("#btnforward").text("Save");
//     }


   
//   }else if($(this).text()=="Save"){
//     let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
//     let currQuesNum=currrentQuestion;
//     answersData[currQuesNum]=currCheckAnsw;
//   }
//   else{
//       let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
//       let currQuesNum=$(".button-select").text();
//       answersData[currQuesNum]=currCheckAnsw;
//       $("#centerdiv").remove();
//       let currQuestion=$(this).attr("id");
//       currrentQuestion=parseInt(currQuestion);
//       disablePrevAndNext(currrentQuestion);
//       $(".cmnbtn").removeClass('button-select');
//       $(this).addClass("button-select");
//       if($(this).text()=="SUBMIT"){
//         let score=caluculateScore(answersData);
//         location.href="result.html?score="+score+""
//       }
//       bindQuestion(currQuestion);
//   }
  
//  })

})

var gridColumns={
  "1":{
      "question":" What is HTML?",
      "A":"HTML describes the structure of a webpage",
      "B":"HTML is the standard markup language mainly used to create web pages",
      "C":"HTML consists of a set of elements that helps the browser how to view the content",
      "D":"All of the mentioned"
  },
  "2":{
      "question":"Who is the father of HTML?",
      "A":"Rasmus Lerdorf",
      "B":"Tim Berners-Lee",
      "C":"Brendan Eich",
      "D":"Sergey Brin"
  },
  "3":{
       "question":"HTML stands for?",
       "A":"HyperText Markup Language",
       "B":"HyperText Machine Language",
       "C":"HyperText Marking Language",
       "D":"HighText Marking Language"
   }, 
   "4":{
    "question":"What is the correct syntax of doctype in HTML5?",
    "A":"< /doctype html >",
    "B":"< doctype html >",
    "C":"< doctype html! >",
    "D":"< !doctype html >"
  },"5":{
    "question":"Which of the following is used to read an HTML page and render it?",
    "A":"Web server",
    "B":"Web network",
    "C":"Web browser",
    "D":"Web matrix"
  },"6":{
    "question":"Which of the following tag is used for inserting the largest heading in HTML?",
    "A":"head",
    "B":"< h1 >",
    "C":"< h6 >",
    "D":"heading"
  },"7":{
    "question":"What is DOM in HTML?",
    "A":"Language dependent application programming",
    "B":"Hierarchy of objects in ASP.NET",
    "C":"Application programming interface",
    "D":"Convention for representing and interacting with objects in html documents"
  }
  ,"8":{
    "question":"How do we write comments in HTML?",
    "A":"< /……. >",
    "B":"< !…… >",
    "C":"< /……/ >",
    "D":"< …….! >"
  },"9":{
    "question":" Which of the following elements in HTML5 defines video or movie content?",
    "A":"< video >",
    "B":"< movie >",
    "C":"< audio >",
    "D":"< media >"
  },"10":{
    "question":"Which element is used for or styling HTML5 layout?",
    "A":"CSS",
    "B":"jQuery",
    "C":"JavaScript",
    "D":"PHP"
  }
}

var answers={
  "1":"1D",
  "2":"2B",
  "3":"3A",
  "4":"4D",
  "5":"5C",
  "6":"6B",
  "7":"7D",
  "8":"8B",
  "9":"9A",
  "10":"10A"
}
function bindQuestionButtons(gridColumns){
let firstDiv="<div>"
for(let i in gridColumns){
console.log(gridColumns[i])
firstDiv+="<button selectans='' btnQue="+'btn'+i+" class='button-unselect cmnbtn' id="+i+">"+i+"</button><br>"
}
$("#questionNums").html(firstDiv);
}
function bindQuestion(ques=1){
 
  let quesDiv="<div class='card' style='background-color:white;width: 55rem;border-radius:15px;padding:15px' id=centerdiv><div id='divQues'>"
  let quesandans=gridColumns[ques]
  for(let i in quesandans){
  if(i=="question"){
    quesDiv+="<label><b>"+ques+"</b>.</label><span><b>"+gridColumns[ques][i]+"</b></span><br>"
  }else{
    quesDiv+="<span><input class='btnradio'type='radio' value='"+ques+i+"'name='answer'>"+gridColumns[ques][i]+"</span><br>"
  }
  
  //quesDiv+="<span>"+gridColumns[i].question+"</span><br><label><input type='checkbox'value='1A'></label><br><label><input type='checkbox'value='1A'>mohan</label><br><label><input type='checkbox'value='1A'>mohan</label><br><label><input type='checkbox'value='1A'>mohan</label>"
  }
  quesDiv=quesDiv+"</div></div>"
  $("#quesDiv").append(quesDiv)
  if(![""," ",undefined].includes(answersData[ques])){
    $("input[name=answer][value=" + answersData[ques] + "]").prop('checked', true);
  }
}
function startTimer(duration) {
  var timer = duration, minutes, seconds;
  var storeTimeInterval=setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      $('#time').text(minutes + ":" + seconds);
      if (--timer < 0) {
         // timer = duration;
          $("#lblinfo").text("")
          $('#time').text("UR EXAM DONE!");
          let score=caluculateScore(answersData);
          $("#examQuesDiv").hide();
          $("#resultModal").show();
          $("#correctAnswers").append(score);
          $(".showResult").trigger('click');
          clearInterval(storeTimeInterval);
      }
  }, 1000);
}

function disablePrevAndNext(currrentQuestion){
  if(currrentQuestion==10){
    $("#btnNext").prop("disabled",true);
    $("#btnprevious").prop("disabled",false);
  }else if(currrentQuestion==1){
      
      $("#btnprevious").prop("disabled",true)
      $("#btnNext").prop("disabled",false);
      $("#btnpreviewlater").prop("disabled",false);
  }else{
    $("#btnprevious").prop("disabled",false);
    $("#btnNext").prop("disabled",false);
    $("#btnpreviewlater").prop("disabled",false);
  }
}
function selectedQuestions(){
  if(![""," ",undefined].includes(currCheckAnsw)){
    $("this").addClass("button-select");
  }
}
function saveForLaterStyling(currrentQuestion){
  $(".cmnbtn").removeClass('btn btn-danger');
  $(".cmnbtn").removeClass('btn btn-select');
  $(".cmnbtn").removeClass('btn btn-success');
    for(let que in answersData){
      if(que==currrentQuestion){
        $("#"+currrentQuestion).addClass("btn button-select");
      }else if($("#"+que).hasClass("saved")){
            $("#"+que).addClass("btn btn-success");
      }else{
        if( $("#"+que).hasClass("savelater")){
          $("#"+que).addClass("btn btn-danger")
        }
      }
      
    }
} 

function    removeFromsavefromlaterObj(currrentQuestion){
  let que=parseInt(currrentQuestion)
    if($("#"+que).hasClass("savelater")){
      let conToStr=String(que)
      delete savelaterQuestions[conToStr];
     $("#"+que).removeClass("savelater btn-danger")
    $("#"+que).addClass('btn btn-success');
    }else{
      if($("#"+que).hasClass("saved")){
        let conToStr=String(que)
        delete savelaterQuestions[conToStr];
        $("#"+que).removeClass("btn-success saved ")
        $("#"+que).addClass('btn btn-danger');
      }
    }
 
}
function caluculateScore(answersObj){
    let count=0;
    for (let ques in answersObj){
      if(ques in savelaterQuestions){
        continue;
      }else{
        let k=ques;
        if(answersObj[k]==answers[k]){
          count++;
        }
      }
    }
    console.log(count)
    return count;        
  }