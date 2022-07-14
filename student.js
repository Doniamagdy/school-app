const fs = require("fs");
//fs.writeFileSync('student.json','be')
const addNewStudent= (id,name,comment,degree) => { 
    const students = loadStudents();

    const duplicateId = students.find((el) => { 
        return el.id === id;
    });

    if (!duplicateId) {
        students.push({
          id,
          name,
          comment, 
          degree

        });
        saveStudents(students);
        console.log(" Student Saved Successfully");
      } else {
        console.log("Error duplicate id");
      }
    };


    const loadStudents = () => {       
        try {
          const data = fs.readFileSync("student.json").toString(); 
          return JSON.parse(data); 
        } catch (e) {
          return [];
        }
      };
      
      const saveStudents = (students) => {
        const saveData = JSON.stringify(students); 
        
        fs.writeFileSync("student.json",saveData);
      };


      const deleteStudent = (id) =>{
        const students = loadStudents();
        const studentToKeep = students.filter((el)=>{
          return el.id !== id  
        })
        if(students.length !== studentToKeep.length)
        {
        saveStudents(studentToKeep)
        console.log(' Student deleted sucessfully')
        }
        else {
        console.log('No id is found')
        }
    }


    const readStudentNames = (name) =>{
      const students = loadStudents();
      const student = students.find((el)=>{
          
          return el.name === name
      })
  
      if(student){
          console.log(student.name)
      }
      else {
          console.log('Not found')
      }
  }

  const listStudents = () =>{
    const students = loadStudents();
    students.forEach((el)=>{
        console.log(el.name)
    })
}

  
      module.exports = {
        addNewStudent,
        deleteStudent,
        readStudentNames,
        listStudents
      };
