  // 問題番号
var no = 0;
// 正解数
var score = 0;
// 単語リスト
var wordList = [
    {
        japanese: "電話",
        english: "Phone"
    },
    {
        japanese: "歴史",
        english: "History"
    },
    {
        japanese: "社会",
        english: "Society"
    },
    {
        japanese: "世代",
        english: "Generation"
    },
    {
        japanese: "知識",
        english: "Knowledge"
    }
];

// 問題を表示する
function showQuestion() {
    if(no < wordList.length) {
    // 次の問題がある場合は、表示する
        document.getElementById("question").innerHTML = wordList[no].japanese;
    } else {
        // 全問終了したら、成績を発表する
        document.getElementById("question").innerHTML = score + "/" + wordList.length;
        document.getElementById("answerForm").style.display = "none";
        if(score == wordList.length) {
            // 全問正解の場合
            document.getElementById("resultMessage").innerHTML = "全問正解！よくできました！ ";
            document.getElementById("resultImage").src = "gold.png";
        } else if(score >= wordList.length * 0.6) {
            // 6 割以上正解の場合
            document.getElementById("resultMessage").innerHTML = "惜しい！あともう一歩でした！";
            document.getElementById("resultImage").src = "silver.png";
        } else {
            // 6 割未満の場合
            document.getElementById("resultMessage").innerHTML = "もう少しがんばりましょう。";
            document.getElementById("resultImage").src = "bronze.png";
        }
    }
}


// 入力された回答の正誤判定を行う
function judge() {
    var answer = document.getElementById("answer").value;
    if(answer == wordList[no].english) {
        alert(" 正解です！ ");
        score++;
    } else {
        alert(" 残念！不正解です。");
    }
    // 次の問題を表示
    no++;
    showQuestion();
    var answer = document.getElementById("answer").value = "";
}
