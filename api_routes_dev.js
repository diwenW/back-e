const express = require('express');
const router = express.Router();

const fs = require('fs');
const { filter } = require("lodash");
let rawdata = fs.readFileSync('./courses.json');
let c = JSON.parse(rawdata); 


// Define routes

router.get('/', (req,res)=>{
    let outputJSON = {
        Courses : c["courses"]
    }
    res.json(outputJSON);
})

router.get('/by_course_code/:qcode', (req,res)=>{
    let query = req.params['qcode']
    filtered_Courses = c["courses"].filter(q => q.course_code.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_title/:qtitle', (req,res)=>{
    let query = req.params['qtitle']
    filtered_Courses = c["courses"].filter(q => q.title.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_instructor/:qname', (req,res)=>{
    let query = req.params['qname']
    filtered_Courses = c["courses"].filter(q => q.instructor.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_level/:qlevel', (req,res)=>{
    var q_level = req.params['qlevel'];
    Course_specific_level = c["courses"].filter(q => q.course_level == q_level);
    res.json(Course_specific_level)
})

router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    var q_name = req.params['qname'];
    var q_level = req.params['qlevel'];
    Combined_Course = c["courses"].filter(
        q => {
            if ((q.instructor == q_name) && (q.course_level == q_level)){
                return true;
            }
            return false
        } 
        );
        res.json(Combined_Course)
})

module.exports = router;