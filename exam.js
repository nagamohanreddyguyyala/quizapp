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
var local=location.origin;
var count=0;
let currrentQuestion=1;
$(document).ready(function(){
 console.log(gridColumns)
 disablePrevAndNext(1)
 var fiveMinutes = 120 * 1
 startTimer(fiveMinutes);
 bindQuestionButtons(gridColumns)
 bindQuestion(currQuestion=1);
 $("#1").addClass("button-select");

 $("#btn").click(function(){
  location.href=local+"/exam.html"
 })
 
 $("#close").click(function(){
  close();
  //location.href = location.origin+"/startpage.html";
})

 $("button").click(function(){
  if($(this).text()=="Next"){
    let nextQuestion=currrentQuestion+1;
    let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
    
    let currQuesNum=currrentQuestion;
    answersData[currQuesNum]=currCheckAnsw;
    $("#centerdiv").remove();
    $(".cmnbtn").removeClass('button-select');
    currrentQuestion=nextQuestion;

    $("#"+currrentQuestion).addClass("button-select");
    disablePrevAndNext(currrentQuestion);
    bindQuestion(nextQuestion);
  }else if($(this).text()=="Previous"){
      let prevQuestion=currrentQuestion-1;
      let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
      let currQuesNum=currrentQuestion;
      answersData[currQuesNum]=currCheckAnsw;
      $("#centerdiv").remove();
      $(".cmnbtn").removeClass('button-select');
      currrentQuestion=prevQuestion;
      $("#"+currrentQuestion).addClass("button-select");
      disablePrevAndNext(currrentQuestion);
      bindQuestion(prevQuestion);
  }else{
      let currCheckAnsw=$('input[type="radio"][name="answer"]:checked').val();
      let currQuesNum=$(".button-select").text();
      answersData[currQuesNum]=currCheckAnsw;
      $("#centerdiv").remove();
      let currQuestion=$(this).attr("id");
      currrentQuestion=parseInt(currQuestion);
      disablePrevAndNext(currrentQuestion);
      $(".cmnbtn").removeClass('button-select');
      $(this).addClass("button-select");
      if($(this).text()=="SUBMIT"){
        let score=caluculateScore(answersData);
        location.href=local+"/result.html?score="+score+""
      }
      bindQuestion(currQuestion);
  }
 
 })
  
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
 
  let quesDiv="<div id=centerdiv><div id='divQues'>"
  let quesandans=gridColumns[ques]
  for(let i in quesandans){
  if(i=="question"){
    quesDiv+="<label>"+ques+".</label><span>"+gridColumns[ques][i]+"</span><br>"
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
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      $('#time').text(minutes + ":" + seconds);
      if (--timer < 0) {
         // timer = duration;
          $("#lblinfo").text("")
          $('#time').text("UR EXAM DONE!");
          $("#btnSubmit").trigger("click");
      }
  }, 1000);
}
function caluculateScore(answersObj){
  for (let ques in answersObj){
    let k=ques;
  if(answersObj[k]==answers[k])
  count++;
  }
  console.log(count)
  return count;   
}
function disablePrevAndNext(currrentQuestion){
  if(currrentQuestion==10){
    $("#btnforward").prop("disabled",true);
    $("#btnprevious").prop("disabled",false)
  }else if(currrentQuestion==1){
      
      $("#btnprevious").prop("disabled",true)
      $("#btnforward").prop("disabled",false);
    
  }else{
    $("#btnprevious").prop("disabled",false);
    $("#btnforward").prop("disabled",false);
  }
}
function selectedQuestions(){
  if(![""," ",undefined].includes(currCheckAnsw)){
    $("this").addClass("button-select");
  }
}