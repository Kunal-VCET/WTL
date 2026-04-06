const questions = [
{
    question:"Which language runs in the browser?",
    options:["Java","C","Python","JavaScript"],
    answer:3
},
{
    question:"Which keyword declares a variable?",
    options:["var","int","string","float"],
    answer:0
},
{
    question:"Which company developed JavaScript?",
    options:["Google","Netscape","Microsoft","Apple"],
    answer:1
},
{
    question:"Which symbol is used for comments in JavaScript?",
    options:["//","<!-- -->","#","**"],
    answer:0
},
{
    question:"Which method prints output to the browser console?",
    options:["console.print()","print()","console.log()","log.console()"],
    answer:2
}
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion(){

    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    for(let i=0;i<4;i++){
        const btn = document.getElementById("opt"+i);
        btn.innerText = q.options[i];
        btn.classList.remove("correct","wrong");
        btn.disabled = false;
    }
}

function checkAnswer(index){

    if(answered) return;

    answered = true;

    const correct = questions[currentQuestion].answer;

    for(let i=0;i<4;i++){
        const btn = document.getElementById("opt"+i);
        btn.disabled = true;

        if(i === correct){
            btn.classList.add("correct");
        }
    }

    if(index === correct){
        score++;
    }else{
        document.getElementById("opt"+index).classList.add("wrong");
    }
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    }
    else{
        showResult();
    }
}

function showResult(){

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("score").innerText =
    score + " / " + questions.length;
}

loadQuestion();