const averageGrade = Math.floor(Math.random() * 100);

if(averageGrade<60){
  console.log("Незадовільно");
}else if(averageGrade<70 && averageGrade>=60){
  console.log("Задовільно");
}else if(averageGrade<80 && averageGrade>=71){
  console.log("Добре");
}else if(averageGrade<90 && averageGrade>=81){
  console.log("Дуже добре");
}else if(averageGrade<100 && averageGrade>=91){
  console.log("Відмінно");
}




//2  switch 


switch(averageGrade){
  case averageGrade<60:
    console.log("Незадовільно");
    break;
  case averageGrade<70 && averageGrade>=60:
    console.log("Задовільно");
    break;
  case averageGrade<80 && averageGrade>=71:
    console.log("Добре");
    break;
  case averageGrade<90 && averageGrade>=81:
    console.log("Дуже добре");
    break;
  case averageGrade<100 && averageGrade>=91:
    console.log("Відмінно");
    break;
}