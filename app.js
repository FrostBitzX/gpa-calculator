function gradeCalculate(){
    document.getElementById("grade-list").innerHTML = '' //เคลียข้อมูลเก่า
    let sumCredit = 0
    let sumScore = 0

    let subject_qty = prompt("กรุณาระบุจำนวณวิชา:")

    for(let i=1;i<=subject_qty;i++){
        let subject = prompt("ระบุชื่อวิชาที่ " + i)
        let credit = parseInt(prompt("ระบุหน่วยกิตของวิชาที่ " + i))
        let grade = parseFloat(prompt("ระบุเกรดของวิชาที่ " + i))
        document.getElementById("grade-list").innerHTML += "วิชา " + subject  + " หน่วยกิต " + credit + " ได้เกรด " + grade + "<br>"

        sumCredit += credit
        sumScore += (credit*grade)
    }
    console.log(sumCredit)
    console.log(sumScore)


    let gpa = sumScore / sumCredit
    document.getElementById("result").innerHTML = "GPA ของคุณคือ: " + gpa.toFixed(2)
}