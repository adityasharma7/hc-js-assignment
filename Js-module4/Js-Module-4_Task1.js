"use strict";
// 1. Implement code to deep clone any object using JSON methods

const school = {
        schoolname: "ABC Acadmy",
        address: "ABC colony indore",
        student: {
            fname: "prashant",
            lname: "rathore",
            rollno: 27,
            marks: 94
        }
    }
    /*const clonschool = Object.assign({}, school); //clone object using object.assign()
    clonschool.schoolname = "new acadmy";//it change the schoolname only in clonschool  
    clonschool.student.rollno = 10;//but in case of nested property, it change in cloneschool as well as school's properties
    console.log(clonschool);
    console.log(school);*/

// to solve this above problem we use JSON
const schoolstr = JSON.stringify(school);
const clonschool = JSON.parse(schoolstr);

clonschool.schoolname = "new acadmy";
clonschool.student.rollno = 10;
console.log(clonschool);
console.log(school);
//now school is perfectly deep cloned