function hacker_message() {
    alert("تم تهكير الصفحة")
}

function display_my_message(message) {
   console.log(message);
    alert(message)
}
function showPrayesPage(){
    window.open("prayers.html", "_blank");
}
function openLocalWebpage(filePath) {
    // window.location.href = filePath;
    window.open(filePath, "_blank");
}
function testReaderOnThisWebpage(pagename) {
    if (pagename == "eating.html") {
        correct_answer = "الحمد لله";
        answer = prompt("ما هو الذكر اللذي نقوله بعد الانتهاء من الطعام؟");
        if (answer == correct_answer) {
            alert("الجواب صحيح");
        } else {
            alert("الجواب خطأ");
        }
    } else if (pagename == "prayers.html") {
        correct_answer = "سبحان ربي العظيم";
        answer = prompt("ما هو الذكر اللذي نقوله في الركوع؟");
        if (answer == correct_answer) {
            alert("الجواب صحيح");
        } else {
            alert("الجواب خطأ");
        }
    } else if (pagename == "morning-evening.html") {
        correct_answer = "سبحان الله وبحمده";
        answer = prompt("ما هو الذكر اللذي نقوله 100 مرة حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ؟");
        if (answer == correct_answer) {
            alert("الجواب صحيح");
        } else {
            alert("الجواب خطأ");
        }
    }
}