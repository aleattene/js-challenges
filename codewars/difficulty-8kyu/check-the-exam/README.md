
## Check the exam
<p align="justify">
The first input array is the key to the correct answers to an exam,   
like ["a", "a", "b", "d"]. 
<br/> 
The second one contains a student's submitted answers.  
<br/><br/>
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.  
<br/><br/>
If the score < 0, return 0. 
<br/> <br/>
For example:  

    > checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
    > checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7 
    > checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
    > checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

To test the solution, type from the CLI:


    >  node .\solution.js

</p>
