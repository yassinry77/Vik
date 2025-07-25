<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>موقع الربح من المهام</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>💰 موقع الربح من المهام</h1>

  <div class="task">
    <span>🎬 مشاهدة فيديو لمدة 30 ثانية</span>
    <button onclick="earnPoints(10)">اكسب</button>
  </div>

  <div class="task">
    <span>🔗 زيارة رابط</span>
    <button onclick="earnPoints(5)">اكسب</button>
  </div>

  <div class="task">
    <span>📱 متابعة صفحة على إنستغرام</span>
    <button onclick="earnPoints(15)">اكسب</button>
  </div>

  <p class="balance">رصيدك الحالي: <span id="points">0</span> body {
  font-family: Arial, sans-serif;
  background: #fff;
  color: #222;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 30px;
}

.task {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 15px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
}

.task button {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.balance {
  margin-top: 30px;
  font-weight: bold;
}

.withdraw {
  margin-top: 30px;
  background: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.withdraw input {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
}

.withdraw button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: let points = 0;

function earnPoints(amount) {
  points += amount;
  document.getElementById("points").innerText = points;
  alert(`تمت إضافة ${amount} نقطة إلى رصيدك!`);
}

function withdraw() {
  const number = document.getElementById("withdrawInput").value;
  if (number.length < 8) {
    alert("الرجاء إدخال رقم صالح.");
    return;
  }
  if (points < 50) {
    alert("يجب أن تمتلك 50 نقطة على الأقل لسحب الأرباح.");
    return;
  }
  alert(`✅ تم إرسال طلب السحب إلى الرقم: ${number}`);
  points = 0;
  document.getElementById("points").innerText = points;
  document.getElementById("withdrawInput").<div class="task">
  <span>🎥 مشاهدة فيديو يوتيوب لمدة 10 ثواني</span>
  <button onclick="watchVideo()">شاهد</button>
</div>

<div id="videoContainer" style="display:none; margin-top:20px;">
  <iframe id="ytplayer" width="300" height="200"
    src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
    frameborder="0" allow="autoplay; encrypted-media" let points = 0;

function earnPoints(amount) {
  points += amount;
  document.getElementById("points").innerText = points;
  alert(`تمت إضافة ${amount} نقطة إلى رصيدك!`);
}

function withdraw() {
  const number = document.getElementById("withdrawInput").value;
  if (number.length < 8) {
    alert("الرجاء إدخال رقم صالح.");
    return;
  }
  if (points < 50) {
    alert("يجب أن تمتلك 50 نقطة على الأقل لسحب الأرباح.");
    return;
  }
  alert(`✅ تم إرسال طلب السحب إلى الرقم: ${number}`);
  points = 0;
  document.getElementById("points").innerText = points;
  document.getElementById("withdrawInput").value = "";
}

function watchVideo() {
  document.getElementById("videoContainer").style.display = "block";
  let seconds = 10;
  const timerEl = document.getElementById("timer");

  const countdown = setInterval(() => {
    seconds--;
    timerEl.innerText = `الانتظار: ${seconds} ثواني...`;

    if (seconds === 0) {
      clearInterval(countdown);
      earnPoints(10); // أضف 10 نقاط
      timerEl.innerText = "✅ تم احتساب النقاط!";
    }
  }, 1000);
}
>
  </iframe>
  <p id="timer">الانتظار: 10 ثواني...</p>
</div>
 = "";
}

</p>

  <div class="withdraw">
    <h2>سحب الأرباح</h2>
    <input type="text" id="withdrawInput" placeholder="رقم زين كاش أو بطاقة كارد كارد">
    <button onclick="withdraw()">سحب</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
