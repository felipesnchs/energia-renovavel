//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var EnergiaRenovavelquestions=[

    {
        question: "De onde vem a energia solar?",
        choices: ["Do petróleo","Do vento","Do Sol","Gás Natural"],
        answer: 3
    
    },
    {
        question: "Qual é a fonte de energia mais poluente?",
        choices: ["Energia Eólica","Energia Solar","Carvão","Hidrelétrica"],
        answer: 3
    
    },
    {
        question: "Qual é o principal combustível utilizado para gerar energia limpa?",
        choices: ["Gasolina","Carvão","Óleo","Sol"],
        answer: 4
    
    },
    {
        question: "Qual é uma fonte de energia renovável?",
        choices: ["Vento","Petróleo","Carvão","Gás Natural"],
        answer: 1
    
    },
    {/*5*/
        question: "De onde vem a energia eólica?",
        choices: ["Do mar","Das nuvens","Do vento","Do sol"],
        answer: 3
    
    },
    {
        question: "Qual é a fonte de energia que vem de rios e quedas d'água?",
        choices: ["Energia Geotérmica","Energia Térmica","Energia Hidrelétrica","Energia Nuclear"],
        answer: 3
    
    }, 
    {
        question: "Qual é a fonte de energia que vem da queima de madeira, resíduos agrícolas e outros materiais orgânicos?",
        choices: ["Energia Solar","Energia Eólica","Energia de Biomassa","Energia Nuclear"],
        answer: 3
    
    }, 
    {
        question: "Qual destes é um benefício da energia renovável?",
        choices: ["Maior poluição do ar","Dependência de combustíveis fósseis","Emissões de gases de efeito estufa","Redução da poluição do ar e dos gases de efeito estufa"],
        answer: 4
    
    }, 
    {
        question: "Qual é a principal fonte de energia renovável no Brasil?",
        choices: ["Energia Eólica","Energia Solar","Energia Hidrelétrica","Energia Geotérmica"],
        answer: 3
    
    }, 
    {/*10*/
        question: "Qual dessas opções é uma fonte de energia renovável?",
        choices: ["Carvão","Gás Natural","Vento","Petróleo"],
        answer: 1
    
    }
                
];

var CSSquestions=[
    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: [
            "<img src='img10.jpg' width='45px' class='rounded-circle'>",
            "text",
            "class",
            "name"
        ],
        answer: 1
    },
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: [
            "margin",
            "clear",
            "float",
            "padding"
        ],
        answer: 2
    },
    // Outras perguntas...
];

var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ['url("10440723.jpg")',"1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];




//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".quiz-2").style.display="none";
document.querySelector(".final-result").style.display="none";



$(document).ready(function(){
    $('.choose-lang').click(function(){
        var selectedOption = $('#language').val();
        if (selectedOption === 'memoria') {
            $('#jogo-da-memoria').show(); // Mostra a div jogo-da-memoria
            $('.quiz').hide(); // Oculta a div quiz
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('#jogo-da-memoria').offset().top
                }, 1000);
            }, 500); // Atraso de 500 milissegundos
        } else {
            $('#jogo-da-memoria').hide(); // Oculta a div jogo-da-memoria se a opção não for "memoria"
            $('.quiz').show(); // Mostra a div quiz se a opção for "memoria"
            $('html, body').animate({
                scrollTop: $('.quiz').offset().top
            }, 1000);
        }
    });
});






document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Questão : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Pontuação : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Pontuação : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Questão : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="Você resolveu "+(countQues+1)+" questões de "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" estavam certos e "+((countQues+1)-correct)+" estavam errados!";
    
    document.getElementById("display-final-score").innerHTML="Sua pontuação final é: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Observação: Excelente! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Observação: Bom, continue melhorando..";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Observação: Satisfatório, Saiba Mais.";
    }else{
        document.querySelector(".remark").innerHTML="Observação: Insatisfatório, tente novamente.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    // alert("Quiz Website Project Created By Digvijay Singh");
    // <iframe width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe> 
    $('#ModalLongoExemplo').on('shown.bs.modal', function () {
        $('#ModalLongoExemplo').trigger('focus')
      })
});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
