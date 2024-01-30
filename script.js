const ball = document.querySelector(".ball");
const modify_part = document.querySelector(".modify_part");
const answer = document.querySelector(".answer");
const eight = document.querySelector(".eight");
let ball_state = 0;
ball.addEventListener('click', function () {
    if (ball_state == 0) {
        answer.classList.add("show");
        eight.classList.add("hide");
        ball.classList.add("shake");
        modify_part.classList.add("shake");
        ball_state = 1;
        answer_result();
    }
    else {
        answer.classList.remove("show");
        eight.classList.remove("hide");
        ball.classList.remove("shake");
        modify_part.classList.remove("shake");
        ball_state = 0;
    }
})
const adt = document.getElementById("opt_adt");
const fut = document.getElementById("opt_fut");
const boj = document.getElementById("opt_boj");
let adt_state = 0;
let fut_state = 0;
let boj_state = 0;
adt.addEventListener("click", () => adt_start());
fut.addEventListener("click", () => fut_start());
boj.addEventListener("click", () => boj_start());
function adt_start() {
    adt_state = 1;
    fut_state = 0;
    boj_state = 0;
    adt.style.border = "2px solid white";
    adt.classList.remove("grayscale");
    fut.style.border = "unset";
    fut.classList.add("grayscale");
    boj.style.border = "unset";
    boj.classList.add("grayscale");
}
function fut_start() {
    adt_state = 0;
    fut_state = 1;
    boj_state = 0;
    fut.style.border = "2px solid white";
    fut.classList.remove("grayscale");
    adt.style.border = "unset";
    adt.classList.add("grayscale");
    boj.style.border = "unset";
    boj.classList.add("grayscale");
}
function boj_start() {
    adt_state = 0;
    fut_state = 0;
    boj_state = 1;
    boj.style.border = "2px solid white";
    boj.classList.remove("grayscale");
    adt.style.border = "unset";
    adt.classList.add("grayscale");
    fut.style.border = "unset";
    fut.classList.add("grayscale");
}
// 
const fut_array_answer = [
    ["<p>“О, подожди, ты серьезно. Позволь мне смеяться еще сильнее”. – Bender</p>", "img/fut/bender.png"],
    ["<p> Dr. Zoidberg: “Я доктор Зойдберг. Я очень важная персона”. </p>", "img/fut/dr-zo.png"],
    ["<p>“На долю секунды мой здравый смысл был подавлен жалостью”. – Leela</p>", "img/fut/leela.png"],
    ["<p>“Эй, когда ты так хорошо выглядишь, тебе не нужно ничего знать”. - Philip J. Fry</p>", "img/fut/fry.png"]
];
const adt_array_answer = [
    ["<p>“Что-то странное может быть просто чем-то знакомым, увиденным под другим углом”. – Мама Марселин  </p>", "img/adt/Elisa.png"],
    ["<p>“Эй, все в порядке. Люди совершают ошибки. Все это часть взросления, и ты никогда по-настоящему не прекращаешь расти”. – Герцог чокнутый  </p>", "img/adt/Prince-of-nuts.png"],
    ["<p>“Ты позволяешь своему мозгу увеличить громкость своего страха”. – Финн Человек. </p>", "img/adt/Finn.png"],
    ["<p>“Быть сумасшедшим тяжело. Ты зацикливаешься, зацикливаешься на воображаемых проблемах. Ты должен сосредоточиться на том, что реально, чувак ”. – Пес Джейк </p>", "img/adt/Jake.png"],
    ["<p>“Люди устроены по-разному. Нам не нужно разбираться в этом, нам просто нужно уважать это”. – Принцесса жвачка </p>", "img/adt/Bubbleprincess.png"],
    ["<p>“От плохого печенья пекарь разоряется, братан”. – Пес Джейк. </p>", "img/adt/Jake.png"],
    ["<p>“Девушки как лошади — когда ты падаешь, важно, чтобы ты снова сел на другую лошадь”. – Пес Джейк </p>", "img/adt/Jake.png"],
    ["<p>“Ты содержишь в себе память души о миллионах мертвых звезд”. – Солнце </p>", "img/adt/sun.png"],
    ["<p>“Все, что нас ждет впереди, совершенно неизвестно”. – Джейк младшая. </p>", "img/adt/JakeJr.png"],
    ["<p>“Вы не сможете сказать, будет ли все совсем наперекосяк”. – BMO </p>", "img/adt/bmo.png"]
];
const boj_array_answer = [
    ["<p>“Ты ужасный человек, и то, что ты не понимаешь, что ты ужасный человек, не делает тебя менее ужасным человеком”. – BoJack Horseman</p>", "img/boj/BoJack.png"],
    ["<p>Только после того, как ты откажешься от всего, ты сможешь начать находить способ быть счастливым”. – Fuzzy Whiskers </p>", "img/boj/Fuzzy-Whiskers.png"],
    ["<p> “Требуется много времени, чтобы осознать, насколько ты по-настоящему несчастен, и еще больше, чтобы понять, что так не должно быть”. – Fuzzy Whiskers</p>", "img/boj/Fuzzy-Whiskers.png"],
    ["<p>“Иногда жизнь - сука, и тогда ты продолжаешь жить”. – Diane Nguyen</p>", "img/boj/Diane-Nguyen.png"],
    ["<p>“У тебя когда-нибудь возникало чувство, что знать тебя больше - значит любить тебя меньше?” – BoJack Horseman </p>", "img/boj/BoJack.png"],
    ["<p>“Зачем тебе вообще облегчать жизнь, когда вместо этого ты можешь все невероятно усложнить?” – Princess Carolyn </p>", "img/boj/Princess-Carolyn.png"],
    ["<p>“Он такой глупый, что не понимает, каким несчастным он должен быть”. – BoJack Horseman</p> ", "img/boj/BoJack.png"],
    ["<p> “Вселенная – это жестокая, безразличная пустота”. - Mr. Peanutbutter </p>", "img/boj/Mr-Peanutbutter.png"]
];
// 
function random_answer(array) {
    const a = Math.floor(Math.random() * array.length);
    console.log(a, fut_array_answer[a][0]);
    answer_p.innerHTML = array[a][0];
    answer_img.src = array[a][1];
}
// 
let answer_p = document.getElementById("answer_p");
let answer_img = document.getElementById("answer_img");
function answer_result() {
    if (adt_state == 1) { random_answer(adt_array_answer);console.log("result adt"); }
    if (fut_state == 1) { random_answer(fut_array_answer); console.log("result fut"); }
    if (boj_state == 1) { random_answer(boj_array_answer); console.log("result boj"); }
    else { console.log("error") }
}
// 
let input = document.getElementById("question");
let add_question = document.getElementById("add_question");
function in_question() {
    add_question.innerHTML = input.value;
    console.log(input.value);
    input.value = '';
}
