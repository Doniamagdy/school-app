const fs = require('fs')
const yargs = require('yargs')
const students = require('./student')

yargs.command({
    command:'add',
    describe:'Add new student',
    builder:{   
        id:{
            describe:'This is student id in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is student name in add command',
            demandOption:true,
            type:'string'
        },
        comment:{
            describe:'This is comment in add command',
            type:'string'
        },
        degree:{
        describe:'This is degrees in add command',
        demandOption:true,
        type:'array'
        }
// Kindly enter 3 degrees
},
    handler:()=>{
    students.addNewStudent(yargs.argv.id,yargs.argv.name,yargs.argv.comment,yargs.argv.degree)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete student',
    builder:{
        id:{
            describe:'This is id in delete command',
            demandOption:true,
            type:'number'
        }
    },

    handler:()=>{
        students.deleteStudent(yargs.argv.id)
    }
})

yargs.command({
    command:'read',
    describe:'Read students names',
    builder:{
        name:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'This is degrees in read command',
            demandOption:true,
            type:'array'
            }
       
    },
    handler:()=>{
       students.readStudentNames(yargs.argv.name,yargs.argv.degree)
       sum =0 
       sum +=parseInt(yargs.argv.degree)+ parseInt(yargs.argv.degree) + parseInt(yargs.argv.degree)
       console.log(sum)
    }
})

yargs.command({
    command:'list',
    describe:'List students command',
    handler:()=>{
        students.listStudents()
    }
})

yargs.parse()
