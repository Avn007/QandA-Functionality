import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item2 } from "../../models/item/item.model";
import { Item3 } from "../../models/item2.model";

@Injectable()
export class CRUDService{
    private questionListRef = this.db.list<Item2>("qs");
    private answerListRef = this.db.list<Item3>("as");
    count = 0;
    
    constructor( private db:AngularFireDatabase ){

    }

    getQuestion(){
        return this.questionListRef;
    }

    addQuestion(item: Item2){
        item.qnum = this.count + 1;
        this.count += 1;
        item.qid = 71*100000 + (item.phase*10000) + item.qnum;
        return this.questionListRef.push(item);
    }

    getAnswer(){
        return this.answerListRef;
    }

    addAnswer(item2: Item3){
      return this.answerListRef.push(item2);
    }
    
    deleteQuestion(item: Item2){
      item.qnum = this.count - 1;
      this.count -= 1;
      return this.questionListRef.remove(item.key);
    }

    deleteAns(item2: Item3){
      return this.answerListRef.remove(item2.key);
      // return this.db.list("/as/").remove(item2.key);
    }

    updateQuestion(item: Item2){
      return this.questionListRef.update(item.key, item);
    }


public tryData:any ={
    "questions" : {
      "7110156" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110156,
        "question" : "ADL",
        "type" : "20"
      },
      "7110001" : {
        "hint" : "Choose the most suitable option to ask for permission",
        "phase" : 1,
        "ques_id" : 7110001,
        "question" : "  ___________________ inform your parents about your health condition?Time",
        "type" : "01"
      },
      "7110002" : {
        "hint" : "Choose the most suitable option to ask for permission",
        "phase" : 1,
        "ques_id" : 7110002,
        "question" : "  ________________ confirm the appointment with the chief surgeon.Length",
        "type" : "01"
      },
      "7110003" : {
        "hint" : "Choose the most suitable option to ask for permission",
        "phase" : 1,
        "ques_id" : 7110003,
        "question" : " ____________________ I post pone your next visit to the hospital because Dr. Jack will not be available for two weeks.Width",
        "type" : "01"
      },
      "7110004" : {
        "hint" : "Choose the most suitable option to ask for permission",
        "phase" : 1,
        "ques_id" : 7110004,
        "question" : " _______________ for you to come again in the eveningDegrees",
        "type" : "01"
      },
      "7110005" : {
        "hint" : "Choose the most suitable option to ask for permission",
        "phase" : 1,
        "ques_id" : 7110005,
        "question" : " __________________ come back to you a little later, I need to go to the operation theatre now.",
        "type" : "01"
      },
      "7110006" : {
        "hint" : "Choose the most suitable option to give permission",
        "phase" : 1,
        "ques_id" : 7110006,
        "question" : " Can I ask you something?",
        "type" : "02"
      },
      "7110007" : {
        "hint" : "Choose the most suitable option to give permission",
        "phase" : 1,
        "ques_id" : 7110007,
        "question" : "May I please take the insulin myself?",
        "type" : "02"
      },
      "7110008" : {
        "hint" : "Choose the most suitable option to give permission",
        "phase" : 1,
        "ques_id" : 7110008,
        "question" : " Will you mind if I administer the tablet into my rectum myself?",
        "type" : "02"
      },
      "7110009" : {
        "hint" : "Choose the most suitable option to give permission",
        "phase" : 1,
        "ques_id" : 7110009,
        "question" : " Will I be able to walk on my own soon?",
        "type" : "02"
      },
      "7110010" : {
        "hint" : "Choose the most suitable option to give permission",
        "phase" : 1,
        "ques_id" : 7110010,
        "question" : " Can I ask the doctor to explain the reasons for the health  complications  I face?",
        "type" : "2"
      },
      "7110011" : {
        "hint" : "Choose the best option",
        "phase" : 1,
        "ques_id" : 7110011,
        "question" : " Can I have some spicy food at least today? ",
        "type" : "03"
      },
      "7110012" : {
        "hint" : "Choose the best option",
        "phase" : 1,
        "ques_id" : 7110012,
        "question" : "Will I be able to take the treatment without having to undergo endoscopy?",
        "type" : "03"
      },
      "7110013" : {
        "hint" : "Choose the best option",
        "phase" : 1,
        "ques_id" : 7110013,
        "question" : " Can I take a walk without any support?",
        "type" : "03"
      },
      "7110014" : {
        "hint" : "Choose the best option",
        "phase" : 1,
        "ques_id" : 7110014,
        "question" : " Can I request the doctor to let me go home today",
        "type" : "03"
      },
      "7110015" : {
        "hint" : "Choose the best option",
        "phase" : 1,
        "ques_id" : 7110015,
        "question" : "I want to stop taking insulin, its painful.",
        "type" : "03"
      },
      "7110016" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110016,
        "question" : ". age ",
        "type" : "04"
      },
      "7110017" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110017,
        "question" : "weight",
        "type" : "04"
      },
      "7110018" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110018,
        "question" : "height",
        "type" : "04"
      },
      "7110019" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110019,
        "question" : "date",
        "type" : "04"
      },
      "7110020" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110020,
        "question" : "time",
        "type" : "04"
      },
      "7110021" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110021,
        "question" : "length",
        "type" : "4"
      },
      "7110022" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110022,
        "question" : "width",
        "type" : "04"
      },
      "7110023" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110023,
        "question" : "degrees",
        "type" : "04"
      },
      "7110024" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110024,
        "question" : "percentage",
        "type" : "04"
      },
      "7110025" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110025,
        "question" : "number",
        "type" : "04"
      },
      "7110026" : {
        "hint" : "Choose the best word that suits the vocabulary used in graphs and charts",
        "phase" : 1,
        "ques_id" : 7110026,
        "question" : "duration",
        "type" : "04"
      },
      "7110027" : {
        "hint" : "Choose the best sentence that suits the lead sentence",
        "phase" : 1,
        "ques_id" : 7110027,
        "question" : " Is everything all right? There’s nothing wrong there?",
        "type" : "05"
      },
      "7110028" : {
        "hint" : "Choose the best sentence that suits the lead sentence",
        "phase" : 1,
        "ques_id" : 7110028,
        "question" : " I feel silly being so worried. I’m not normally like this.",
        "type" : "05"
      },
      "7110029" : {
        "hint" : "Choose the best sentence that suits the lead sentence",
        "phase" : 1,
        "ques_id" : 7110029,
        "question" : "There won’t be lots of blood, will there? I can’t stand the sight of blood",
        "type" : "05"
      },
      "7110030" : {
        "hint" : "Choose the best sentence that suits the lead sentence.",
        "phase" : 1,
        "ques_id" : 7110030,
        "question" : "Will you want to have a helper at the toilet?",
        "type" : "05"
      },
      "7110031" : {
        "hint" : "Choose the best sentence that suits the lead sentence",
        "phase" : 1,
        "ques_id" : 7110031,
        "question" : " When will the chief surgeon arrive?",
        "type" : "05"
      },
      "7110032" : {
        "hint" : "Complete the following strategies for allaying anxiety in a patient using the words in the bold,involve    rapport    normal     reassuring   avoid",
        "phase" : 1,
        "ques_id" : 7110032,
        "question" : "It is important to establish a ____________with the patient, as this helps to decrease the feeling of isolation.",
        "type" : "06"
      },
      "7110033" : {
        "hint" : "Complete the following strategies for allaying anxiety in a patient using the words in the bold,involve    rapport    normal     reassuring   avoid",
        "phase" : 1,
        "ques_id" : 7110033,
        "question" : "Use a calm, __________approach.",
        "type" : "06"
      },
      "7110034" : {
        "hint" : "Complete the following strategies for allaying anxiety in a patient using the words in the bold,involve    rapport    normal     reassuring   avoid",
        "phase" : 1,
        "ques_id" : 7110034,
        "question" : "Explain that anxiety is a ___________reaction.",
        "type" : "06"
      },
      "7110035" : {
        "hint" : "Complete the following strategies for allaying anxiety in a patient using the words in the bold,involve    rapport    normal     reassuring   avoid",
        "phase" : 1,
        "ques_id" : 7110035,
        "question" : " Try to ___________words which increase anxiety; for examples, use discomfort rather than pain",
        "type" : "06"
      },
      "7110036" : {
        "hint" : "Complete the following strategies for allaying anxiety in a patient using the words in the bold,involve    rapport    normal     reassuring   avoid",
        "phase" : 1,
        "ques_id" : 7110036,
        "question" : " 5. Try to _________the patient in decision-making wherever possible, as this decreases the sense of loss of control.",
        "type" : "06"
      },
      "7110037" : {
        "hint" : "Complete the following nurse’s sentences to patients.",
        "phase" : 1,
        "ques_id" : 7110037,
        "question" : "Are you allergic ………………….. any medications.",
        "type" : "09"
      },
      "7110038" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110038,
        "question" : "Where do you go ………………… regular health check up.",
        "type" : "09"
      },
      "7110039" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110039,
        "question" : "There ………………. the medicines to be taken",
        "type" : "09"
      },
      "7110040" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110040,
        "question" : ".This ……………… the medicine you must take",
        "type" : "09"
      },
      "7110041" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110041,
        "question" : "Please go …………… room 13 for blood test",
        "type" : "09"
      },
      "7110042" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110042,
        "question" : " The doctor …………….. arrive anytime.",
        "type" : "09"
      },
      "7110043" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110043,
        "question" : "Your mother said ……………. will come to see you at 4 pm.",
        "type" : "09"
      },
      "7110044" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110044,
        "question" : "This is the report that …………. the details of the medication",
        "type" : "09"
      },
      "7110045" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110045,
        "question" : "You are allergic to salt. Hence take …………………. salt less diet",
        "type" : "09"
      },
      "7110046" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110046,
        "question" : "Your cooperation …………….. extremely important",
        "type" : "09"
      },
      "7110047" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110047,
        "question" : "Did you ………………. symptoms of vomiting",
        "type" : "09"
      },
      "7110048" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110048,
        "question" : ".……………… you lost weight",
        "type" : "09"
      },
      "7110049" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110049,
        "question" : "If you …………………any discomfort, please let me know",
        "type" : "09"
      },
      "7110050" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110050,
        "question" : "………. you come alone to the hospital?",
        "type" : "09"
      },
      "7110051" : {
        "hint" : "Complete the following nurse’s sentences to patients",
        "phase" : 1,
        "ques_id" : 7110051,
        "question" : "Your cooperation plays a major role ….. your recovery",
        "type" : "09"
      },
      "7110052" : {
        "hint" : "Fill in the sentences with either to be good at or to relax a bit",
        "phase" : 1,
        "ques_id" : 7110052,
        "question" : "You need ……………….. following the advice of the doctors",
        "type" : "11"
      },
      "7110053" : {
        "hint" : "Fill in the sentences with either to be good at or to relax a bit",
        "phase" : 1,
        "ques_id" : 7110053,
        "question" : " Nurses need …………………… communication",
        "type" : "11"
      },
      "7110054" : {
        "hint" : "Fill in the sentences with either to be good at or to relax a bit",
        "phase" : 1,
        "ques_id" : 7110054,
        "question" : "It is important ………………. before taking up medical tests",
        "type" : "11"
      },
      "7110055" : {
        "hint" : "Fill in the sentences with either to be good at or to relax a bit",
        "phase" : 1,
        "ques_id" : 7110055,
        "question" : "Nurses must ……………………. understanding patients needs",
        "type" : "11"
      },
      "7110056" : {
        "hint" : "Fill in the sentences with either to be good at or to relax a bit",
        "phase" : 1,
        "ques_id" : 7110056,
        "question" : "It is good for nurses ………… before they start their daily tasks",
        "type" : "11"
      },
      "7110057" : {
        "hint" : "Fill in the sentences withthe best option",
        "phase" : 1,
        "ques_id" : 7110057,
        "question" : "There is ………………  in the number of patients due to the flu",
        "type" : "12"
      },
      "7110058" : {
        "hint" : "Fill in the sentences withthe best option",
        "phase" : 1,
        "ques_id" : 7110058,
        "question" : "The intake of patients at fitness centre’s have ………………….",
        "type" : "12"
      },
      "7110059" : {
        "hint" : "Fill in the sentences withthe best option",
        "phase" : 1,
        "ques_id" : 7110059,
        "question" : "Nurses are at demand because there is …………. In the number of student’s opting for nursing",
        "type" : "12"
      },
      "7110060" : {
        "hint" : "Fill in the sentences withthe best option",
        "phase" : 1,
        "ques_id" : 7110060,
        "question" : "The patient must be rushed to the hospital if there is ………….. in their blood pressure",
        "type" : "12"
      },
      "7110061" : {
        "hint" : "Fill in the sentences withthe best option",
        "phase" : 1,
        "ques_id" : 7110061,
        "question" : "The nurses in Tamil Nadu demand for ………… in salary.",
        "type" : "12"
      },
      "7110062" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110062,
        "question" : "Last ………… the doctor was away.",
        "type" : "13"
      },
      "7110063" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110063,
        "question" : "Do you eat ……….. . Well I suggest its best to stay away from it as you are under medication",
        "type" : "13"
      },
      "7110064" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110064,
        "question" : "You need to ……….. some more medicines ",
        "type" : "13"
      },
      "7110065" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110065,
        "question" : "Since you are asthmatic you must keep away from all hairy animals like cats, ……… and hairy dogs ",
        "type" : "13"
      },
      "7110066" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110066,
        "question" : "The doctor will come by an….... late",
        "type" : "13"
      },
      "7110067" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110067,
        "question" : "You must always wear  ……….clothes post surgery.",
        "type" : "13"
      },
      "7110068" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110068,
        "question" : "Since you had an amputation you need to use a walking stick for support but don’t hit the walking stick too hard on the ground, it may eventually ………. ",
        "type" : "13"
      },
      "7110069" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110069,
        "question" : "You need to stay away from using ……… as the ointment on your skin may cause an infection",
        "type" : "13"
      },
      "7110070" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110070,
        "question" : "You have turned out to be obese because of thyroid and you need to exercise to reduce………",
        "type" : "13"
      },
      "7110071" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110071,
        "question" : "You came to the hospital at the ……….. ",
        "type" : "13"
      },
      "7110072" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110072,
        "question" : "You should not eat even a ……… of cake",
        "type" : "13"
      },
      "7110073" : {
        "hint" : "Fill in the best word",
        "phase" : 1,
        "ques_id" : 7110073,
        "question" : "You need to …… the chief surgeon tomorrow",
        "type" : "13"
      },
      "7110074" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110074,
        "question" : "ONE    -   ___ ___ N",
        "type" : "14"
      },
      "7110075" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110075,
        "question" : "PARE – P___ ___ ___",
        "type" : "14"
      },
      "7110076" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110076,
        "question" : "TWO-  ___ O ____",
        "type" : "14"
      },
      "7110077" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110077,
        "question" : "WAISTE – W ___  ____  ____  _____  _____",
        "type" : "14"
      },
      "7110078" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110078,
        "question" : "SAIL - ___ A ___    ____",
        "type" : "14"
      },
      "7110079" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110079,
        "question" : ".HERE – H __   ____    ____",
        "type" : "14"
      },
      "7110080" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110080,
        "question" : "SEEN -  ___ E ___     ____",
        "type" : "14"
      },
      "7110081" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110081,
        "question" : "TAIL – T ____     ____  _____",
        "type" : "14"
      },
      "7110082" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110082,
        "question" : "MADE - ____ A  ____ D",
        "type" : "14"
      },
      "7110083" : {
        "hint" : "On the right are words that are spoken in the same way as words on the left but have different spelling. Complete the incomplete words",
        "phase" : 1,
        "ques_id" : 7110083,
        "question" : "MEET -___      _____     ____ T",
        "type" : "14"
      },
      "7110084" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110084,
        "question" : "As the patient behaved hysterically the doctor walked out of the ward",
        "type" : "15"
      },
      "7110085" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110085,
        "question" : "If the hemorrhoid around the anus area bleeds ………, then it is internal hemorrhoids and must be treated immediately",
        "type" : "15"
      },
      "7110086" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110086,
        "question" : "The nurse advised the patient to speak …… to the doctor",
        "type" : "15"
      },
      "7110087" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110087,
        "question" : "The doctor remarked that the nurse’s notes were written",
        "type" : "15"
      },
      "7110088" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110088,
        "question" : "The patient assured the doctor that she would follow the instruction ",
        "type" : "15"
      },
      "7110089" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110089,
        "question" : "The patient complained that he …………. ate spicy food",
        "type" : "15"
      },
      "7110090" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110090,
        "question" : "The nurse had to shout ……….. at the patient’s relatives as they were very annoying",
        "type" : "15"
      },
      "7110091" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110091,
        "question" : "Post-surgery the patient walked out of the hospital",
        "type" : "15"
      },
      "7110092" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110092,
        "question" : "The patient answered ………….. to all the questions of the doctor and this impressed everyone around",
        "type" : "15"
      },
      "7110093" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110093,
        "question" : "After starving for twelve hours, the patient ate",
        "type" : "15"
      },
      "7110094" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110094,
        "question" : "As soon as the nurse gave the discharge summary the patient walked out",
        "type" : "15"
      },
      "7110095" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110095,
        "question" : "……………, this patient is at the end-of-life and hence we need to be very empathetic",
        "type" : "15"
      },
      "7110096" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110096,
        "question" : "The cardiologist ……….. explained the procedure of the suggested surgery",
        "type" : "15"
      },
      "7110097" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110097,
        "question" : "On successfully completing the surgery, the patient’s relatives……….. thanked the doctors",
        "type" : "15"
      },
      "7110098" : {
        "hint" : "Use the most suitable adverbs",
        "phase" : 1,
        "ques_id" : 7110098,
        "question" : "The nurse removed the needle form the patient’s neck very ………… so as to ensure that the needle does not break",
        "type" : "15"
      },
      "7110099" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110099,
        "question" : "play",
        "type" : "16"
      },
      "7110100" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110100,
        "question" : "take",
        "type" : "16"
      },
      "7110101" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110101,
        "question" : "leave",
        "type" : "16"
      },
      "7110102" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110102,
        "question" : "smell",
        "type" : "16"
      },
      "7110103" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110103,
        "question" : "cut",
        "type" : "16"
      },
      "7110104" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110104,
        "question" : "wear",
        "type" : "16"
      },
      "7110105" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110105,
        "question" : "quarrel",
        "type" : "16"
      },
      "7110106" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110106,
        "question" : "break",
        "type" : "16"
      },
      "7110107" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110107,
        "question" : "stand",
        "type" : "16"
      },
      "7110108" : {
        "hint" : "Write the correct form of the verb in the blanks below",
        "phase" : 1,
        "ques_id" : 7110108,
        "question" : "dream",
        "type" : "16"
      },
      "7110109" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110109,
        "question" : "The banana  …………… a good source of fibre. You must eat it dail",
        "type" : "17"
      },
      "7110110" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110110,
        "question" : "The nurse asked the patient “ ……… you ready",
        "type" : "17"
      },
      "7110111" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110111,
        "question" : "I ….. your nurse for today",
        "type" : "17"
      },
      "7110112" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110112,
        "question" : "Do you …….. to take other medication",
        "type" : "17"
      },
      "7110113" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110113,
        "question" : "Yesterday I …… morning shift so I will …….. morning shift again next week",
        "type" : "17"
      },
      "7110114" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110114,
        "question" : "You will be discharged by the end of this month. You ………to wait",
        "type" : "17"
      },
      "7110115" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110115,
        "question" : "Today, you …….. to go for blood test",
        "type" : "17"
      },
      "7110116" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110116,
        "question" : "All the nurses ------- at a meeting last night",
        "type" : "17"
      },
      "7110117" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110117,
        "question" : "the chief surgeons ………. from Italy",
        "type" : "17"
      },
      "7110118" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110118,
        "question" : "Oranges ……. recommended as a part of your diet",
        "type" : "17"
      },
      "7110119" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110119,
        "question" : "The patient …….. diabetic",
        "type" : "17"
      },
      "7110120" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110120,
        "question" : "The nurse………… inexperienced in wound dressing",
        "type" : "17"
      },
      "7110121" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110121,
        "question" : "The doctor ……. five major surgeries to do next week",
        "type" : "17"
      },
      "7110122" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110122,
        "question" : "The patient informed the nurse that he ……… piles in the past",
        "type" : "17"
      },
      "7110123" : {
        "hint" : "Fill in the blanks with is, are, was, were, has, have, had in the following sentences",
        "phase" : 1,
        "ques_id" : 7110123,
        "question" : "If I ……… the patient I will make every effort to reduce weight by exercising rather than going in for a surgery",
        "type" : "17"
      },
      "7110124" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110124,
        "question" : "The patient was the ……….. of all",
        "type" : "18"
      },
      "7110125" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110125,
        "question" : "After surgery, the patient’s face appeared",
        "type" : "18"
      },
      "7110126" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110126,
        "question" : "The sugar levels are ………. than usual",
        "type" : "18"
      },
      "7110127" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110127,
        "question" : "The hemorrhoids appear …… after the treatment",
        "type" : "18"
      },
      "7110128" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110128,
        "question" : "The doctor advised the patient that he must be ",
        "type" : "18"
      },
      "7110129" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110129,
        "question" : "The patient suffered from skin rashes and also said that the climate was the ……. of all times",
        "type" : "18"
      },
      "7110130" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110130,
        "question" : "The doctor advised the patient to place her feet into a …….. vessel of warm water",
        "type" : "18"
      },
      "7110131" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110131,
        "question" : "The doctor made the ………… decision of delaying surgery until the blood pressure of the patient returns to normalcy",
        "type" : "18"
      },
      "7110132" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110132,
        "question" : "The patient was so……. And hence could not even afford to buy toothbrush",
        "type" : "18"
      },
      "7110133" : {
        "hint" : "Read the adjectives given in the box and fill in with the blanks with the most suitable adjective",
        "phase" : 1,
        "ques_id" : 7110133,
        "question" : "The patient with arthritis walked the ……….. in the walking race organized by the Youth –Health society",
        "type" : "18"
      },
      "7110134" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110134,
        "question" : "Instead of ordering, try ……….. Avoid using a sharp ton",
        "type" : "19"
      },
      "7110135" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110135,
        "question" : "Be open to listening go the patient. When they refuse to follow instruction, find out why. ………if they have a valid reason",
        "type" : "19"
      },
      "7110136" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110136,
        "question" : "Use mm, hm to show you are l",
        "type" : "19"
      },
      "7110137" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110137,
        "question" : "………. your head",
        "type" : "19"
      },
      "7110138" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110138,
        "question" : "………….eye contact",
        "type" : "19"
      },
      "7110139" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110139,
        "question" : "Be ……….if required",
        "type" : "19"
      },
      "7110140" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110140,
        "question" : "Use ……..: That’s right, I agree, Is it so? I understand, I see, My heart goes out to you",
        "type" : "19"
      },
      "7110141" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110141,
        "question" : "Use a level of language which can be ……… by the listener",
        "type" : "19"
      },
      "7110142" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110142,
        "question" : "Give instructions in steps, for example …….., etc. You could count the step on your secondly; fingers to make sure your patient understands you",
        "type" : "19"
      },
      "7110143" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110143,
        "question" : "……………instructions on the relevant piece of equipment",
        "type" : "19"
      },
      "7110144" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110144,
        "question" : "Always give a ………….for your instructions",
        "type" : "19"
      },
      "7110145" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110145,
        "question" : "………to them that it is important the patients to obey",
        "type" : "19"
      },
      "7110146" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110146,
        "question" : "Never use a sharp …… unnecessarily",
        "type" : "19"
      },
      "7110147" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningful",
        "phase" : 1,
        "ques_id" : 7110147,
        "question" : "Try to listen to them ……you speak",
        "type" : "19"
      },
      "7110148" : {
        "hint" : "Fill in with the most suitable word to make the sentences meaningfu",
        "phase" : 1,
        "ques_id" : 7110148,
        "question" : "….. the instruction if possible",
        "type" : "19"
      },
      "7110149" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110149,
        "question" : "OOB",
        "type" : "20"
      },
      "7110150" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110150,
        "question" : "HRF",
        "type" : "20"
      },
      "7110151" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110151,
        "question" : "OINT",
        "type" : "20"
      },
      "7110152" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110152,
        "question" : "PT",
        "type" : "20"
      },
      "7110153" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110153,
        "question" : "S/W",
        "type" : "20"
      },
      "7110154" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110154,
        "question" : "V/U",
        "type" : "20"
      },
      "7110155" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110155,
        "question" : "NPO",
        "type" : "20"
      },
      "7110157" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110157,
        "question" : "CO",
        "type" : "20"
      },
      "7110158" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110158,
        "question" : "SOB",
        "type" : "20"
      },
      "7110159" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110159,
        "question" : "RESP",
        "type" : "20"
      },
      "7110160" : {
        "hint" : "Expand the given abbreviation ",
        "phase" : 1,
        "ques_id" : 7110160,
        "question" : "Will cont",
        "type" : "20"
      },
      "7120091" : {
        "hint" : "Find the adjective in the first sentence and fill the gap with the adverb",
        "phase" : 2,
        "ques_id" : 7120091,
        "question" : "The patient is happy. He smiles ",
        "type" : "03"
      },
      "7120092" : {
        "hint" : "Find the adjective in the first sentence and fill the gap with the adverb",
        "phase" : 2,
        "ques_id" : 7120092,
        "question" : "The doctor is loud. He usually speaks",
        "type" : "03"
      },
      "7120093" : {
        "hint" : "Find the adjective in the first sentence and fill the gap with the adverb",
        "phase" : 2,
        "ques_id" : 7120093,
        "question" : "The patient is fluent in German. She speaks German ",
        "type" : "03"
      },
      "7120094" : {
        "hint" : "Find the adjective in the first sentence and fill the gap with the adverb",
        "phase" : 2,
        "ques_id" : 7120094,
        "question" : "The doctor was angry. He spoke to the patient’s relatives",
        "type" : "03"
      },
      "7120095" : {
        "hint" : "Find the adjective in the first sentence and fill the gap with the adverb",
        "phase" : 2,
        "ques_id" : 7120095,
        "question" : "The nurse was careless. Most often she …………discharges her duties",
        "type" : "03"
      },
      "7120096" : {
        "hint" : "Fill in the blanks with suitable adverbs from the box",
        "phase" : 2,
        "ques_id" : 7120096,
        "question" : "Patients who are positive……………… say thank you",
        "type" : "04"
      },
      "7120097" : {
        "hint" : "Fill in the blanks with suitable adverbs from the box",
        "phase" : 2,
        "ques_id" : 7120097,
        "question" : "The patient wanted to ………… know about the liver transplant",
        "type" : "04"
      },
      "7120098" : {
        "hint" : "Fill in the blanks with suitable adverbs from the box",
        "phase" : 2,
        "ques_id" : 7120098,
        "question" : "The doctor will come tomorrow …………..",
        "type" : "04"
      },
      "7120099" : {
        "hint" : "Fill in the blanks with suitable adverbs from the box",
        "phase" : 2,
        "ques_id" : 7120099,
        "question" : "The patient got ready to go home……..",
        "type" : "04"
      },
      "7120100" : {
        "hint" : "Fill in the blanks with suitable adverbs from the box",
        "phase" : 1,
        "ques_id" : 7120100,
        "question" : "She tried to read her medical reports ………..",
        "type" : "04"
      },
      "7120108" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120108,
        "question" : "I'm here to change your __________________________. (= the container used by bedridden patients to go to the bathroom)",
        "type" : "06"
      },
      "7120109" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120109,
        "question" : "Turn __________________________ please. I have to wash your back",
        "type" : "06"
      },
      "7120110" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120110,
        "question" : "We need to move you into a __________________________ room. (= a room with no other patients)",
        "type" : "06"
      },
      "7120111" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120111,
        "question" : "I need to  __________________________ your blood pressure",
        "type" : "06"
      },
      "7120112" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120112,
        "question" : "We have to __________________________ (= clean/disinfect) your wound.",
        "type" : "06"
      },
      "7120113" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120113,
        "question" : "To help a patient put on his/her clothes = (To ___________________________ a patient)",
        "type" : "06"
      },
      "7120114" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120114,
        "question" : "Yes, Mr. Banu was _________________________ to the hospital ( = checked in to the hospital) yesterday",
        "type" : "06"
      },
      "7120115" : {
        "hint" : "Choose the best response for each one",
        "phase" : 2,
        "ques_id" : 7120115,
        "question" : "Your mother was taken to the  ___________________________. ( = the part of the hospital that deals with patients with acute  illnesses)",
        "type" : "06"
      },
      "7120116" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120116,
        "question" : "I have a terrible rash on my arms and legs. I think I'm allergic to dairy food. I need to meet a ………. ",
        "type" : "07"
      },
      "7120117" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120117,
        "question" : "I just took a home pregnancy test at home, and it came out positive. I need to meet a ……….",
        "type" : "07"
      },
      "7120118" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120118,
        "question" : "I still can't walk and it's been six months since my accident. I hate being stuck in a wheelchair. I need to meet a ………. ",
        "type" : "07"
      },
      "7120119" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120119,
        "question" : "The test results show that I have to undergo a surgery but I don’t want to experience pain. I need to meet a ……….",
        "type" : "07"
      },
      "7120120" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120120,
        "question" : "My left eye has an infection and my vision is blurry now. I need to meet a ……….    ",
        "type" : "07"
      },
      "7120121" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120121,
        "question" : "I am unable to put my right foot on the ground since of late. I need to meet a ………………… ",
        "type" : "07"
      },
      "7120122" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120123,
        "question" : "I am having major chest pain. I'm also having trouble breathing. I need to meet a ………….",
        "type" : "07"
      },
      "7120123" : {
        "hint" : "Choose the correct Medical Specialization",
        "phase" : 2,
        "ques_id" : 7120123,
        "question" : "My baby is not developing properly. She hasn't put on any weight in two years. I need to meet a ………….",
        "type" : "07"
      },
      "7120124" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120124,
        "question" : "To absorb blood/clean wounds  ",
        "type" : "08"
      },
      "7120125" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120125,
        "question" : "Collect urine sample",
        "type" : "08"
      },
      "7120126" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120126,
        "question" : "Get a blood sample",
        "type" : "08"
      },
      "7120127" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120127,
        "question" : "To test for deafness and to categorize it",
        "type" : "08"
      },
      "7120128" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120128,
        "question" : "Feed with liquids",
        "type" : "08"
      },
      "7120129" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120129,
        "question" : "Find out  blood pressure",
        "type" : "08"
      },
      "7120130" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120130,
        "question" : "Examine the patient in private",
        "type" : "08"
      },
      "7120131" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120131,
        "question" : "Check vision",
        "type" : "08"
      },
      "7120132" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120132,
        "question" : "Remove foreign bodies from ear/nose",
        "type" : "08"
      },
      "7120133" : {
        "hint" : "Match the comments with the supplies that are needed",
        "phase" : 2,
        "ques_id" : 7120133,
        "question" : "A tray for instruments/gauze etc",
        "type" : "08"
      },
      "7120134" : {
        "hint" : "Fill in the blanks with the best option: ",
        "phase" : 2,
        "ques_id" : 7120134,
        "question" : "As a team leader, you must be _______________ about your job",
        "type" : "11"
      },
      "7120135" : {
        "hint" : "Fill in the blanks with the best option: ",
        "phase" : 2,
        "ques_id" : 7120135,
        "question" : "Nurses are _____________ to render their services to the sick empathetically",
        "type" : "11"
      },
      "7120136" : {
        "hint" : "Fill in the blanks with the best option: ",
        "phase" : 2,
        "ques_id" : 7120136,
        "question" : "Nurses should also be _____________ not reactive",
        "type" : "11"
      },
      "7120137" : {
        "hint" : "Fill in the blanks with the best option: ",
        "phase" : 2,
        "ques_id" : 7120137,
        "question" : "Does all the wards in this hospital have _________ nurses",
        "type" : "11"
      },
      "7120138" : {
        "hint" : "Fill in the blanks with the best option: ",
        "phase" : 2,
        "ques_id" : 7120138,
        "question" : "A positive ________________ produces positive results",
        "type" : "11"
      },
      "7120139" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120139,
        "question" : "doctor’s assistant",
        "type" : "12"
      },
      "7120140" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120140,
        "question" : "treats food and environmental allergies   ",
        "type" : "12"
      },
      "7120141" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120141,
        "question" : "provides pain prevention during surgery ",
        "type" : "12"
      },
      "7120142" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120142,
        "question" : "heart specialist  ",
        "type" : "12"
      },
      "7120143" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120143,
        "question" : "tooth specialist   ",
        "type" : "12"
      },
      "7120144" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120144,
        "question" : "skin specialist",
        "type" : "12"
      },
      "7120145" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120145,
        "question" : "specializes in women’s needs   ",
        "type" : "12"
      },
      "7120146" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120146,
        "question" : "helps women deliver babies  ",
        "type" : "12"
      },
      "7120147" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120147,
        "question" : "brain specialist    ",
        "type" : "12"
      },
      "7120148" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120148,
        "question" : "tumour specialist",
        "type" : "12"
      },
      "7120149" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120149,
        "question" : "deals with eye diseases",
        "type" : "12"
      },
      "7120150" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120150,
        "question" : "treats babies and children",
        "type" : "12"
      },
      "7120151" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120151,
        "question" : "specializes in the body’s movement",
        "type" : "12"
      },
      "7120152" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120152,
        "question" : "mental health specialist ",
        "type" : "12"
      },
      "7120153" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120153,
        "question" : "specializes in imaging tests (x-ray, etc.)",
        "type" : "12"
      },
      "7120154" : {
        "hint" : "Fill in the gap with the missing word by choosing word from the box",
        "phase" : 2,
        "ques_id" : 7120154,
        "question" : "We don't need to take Lilly to the hospital. She has only hurt her toe",
        "type" : "13"
      },
      "7120155" : {
        "hint" : "Fill in the gap with the missing word by choosing word from the box",
        "phase" : 2,
        "ques_id" : 7120155,
        "question" : "You can use these tablets to ………….. your temperature and get out of bed soon",
        "type" : "13"
      },
      "7120156" : {
        "hint" : "Fill in the gap with the missing word by choosing word from the box",
        "phase" : 2,
        "ques_id" : 7120156,
        "question" : "The nurse told the patient to stay ………………… because of the flu",
        "type" : "13"
      },
      "7120157" : {
        "hint" : "Fill in the gap with the missing word by choosing word from the box",
        "phase" : 2,
        "ques_id" : 7120157,
        "question" : "The patient wanted the nurse to check her ___________ to see if her temperature is raised",
        "type" : "13"
      },
      "7120158" : {
        "hint" : "Fill in the gap with the missing word by choosing word from the box",
        "phase" : 2,
        "ques_id" : 7120158,
        "question" : "The __________ was successful",
        "type" : "13"
      },
      "7120159" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120159,
        "question" : "Cranium",
        "type" : "14"
      },
      "7120160" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120160,
        "question" : "Mandible",
        "type" : "14"
      },
      "7120161" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120161,
        "question" : "Clavicle",
        "type" : "14"
      },
      "7120162" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120162,
        "question" : "Sternum",
        "type" : "14"
      },
      "7120163" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120163,
        "question" : "Humerus",
        "type" : "14"
      },
      "7120164" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120164,
        "question" : "Radius/Ulna",
        "type" : "14"
      },
      "7120165" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120165,
        "question" : "Pelvic girdle",
        "type" : "14"
      },
      "7120166" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120166,
        "question" : "Femur",
        "type" : "14"
      },
      "7120167" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120167,
        "question" : "Patella",
        "type" : "14"
      },
      "7120168" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120168,
        "question" : "Tibia/Fibula",
        "type" : "14"
      },
      "7120169" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120169,
        "question" : "Cervical spine",
        "type" : "14"
      },
      "7120170" : {
        "hint" : "Match the following",
        "phase" : 2,
        "ques_id" : 7120170,
        "question" : "Scapula",
        "type" : "14"
      },
      "7120171" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120171,
        "question" : "Usually pregnant women ……………………… (vomit) early mornings during the initial stage of their pregnancy",
        "type" : "15"
      },
      "7120172" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120172,
        "question" : "She fell sick for many months because of tooth infection and  finally she ………….(recovered)",
        "type" : "15"
      },
      "7120173" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120173,
        "question" : "In a closed room with no ventilation it is likely for anyone to …………..(die)",
        "type" : "15"
      },
      "7120174" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120174,
        "question" : "To …………… (prevent)  diseases one needs to take a lot of vitamins",
        "type" : "15"
      },
      "7120175" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120175,
        "question" : "Some children …………….. (appear suddenly) with rash because of the flu",
        "type" : "15"
      },
      "7120176" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120176,
        "question" : "The boy died on the spot because he was …………( hit by a vehicle) by the car",
        "type" : "15"
      },
      "7120177" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120177,
        "question" : "The old lady ……….(died) last night",
        "type" : "15"
      },
      "7120178" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120178,
        "question" : "All working people are ………….(tired) at the end of the day",
        "type" : "15"
      },
      "7120179" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120179,
        "question" : "Due to lack of sleep the man looked …………(tired and ill).",
        "type" : "15"
      },
      "7120180" : {
        "hint" : "Fill in the blanks by using the most appropriate synonym for the word given in bracket",
        "phase" : 2,
        "ques_id" : 7120180,
        "question" : "The was an  ………( start suddenly)  of viral fever in the village",
        "type" : "15"
      },
      "7120181" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120181,
        "question" : "………………………. specialize in ear related issues, particularly with regard to hearing loss in children",
        "type" : "16"
      },
      "7120182" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120182,
        "question" : "……………………..  study the immune system in a variety of organisms, including humans",
        "type" : "16"
      },
      "7120183" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120183,
        "question" : "…………………… are often found in research labs and work with viruses and bacteria that tend to cause a variety of dangerous diseases",
        "type" : "16"
      },
      "7120184" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120184,
        "question" : "…………………………. manage and treat diseases through non-surgical means, such as anesthetics and other pain-reliving drugs",
        "type" : "16"
      },
      "7120185" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120185,
        "question" : "…………………… and treat diseases related to genetic disorders",
        "type" : "16"
      },
      "7120186" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120186,
        "question" : "………………………… study the growth infectious bacteria and viruses and their interactions with the human body to determine which could potentially cause harm and severe medical conditions",
        "type" : "16"
      },
      "7120187" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120187,
        "question" : "……………………. care for newborn infants to ensure their successful entry into a healthy and fulfilling life",
        "type" : "16"
      },
      "7120188" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120188,
        "question" : "……………………… work with the human brain to determine causes and treatments for such serious illnesses as Alzheimer’s, Parkinson’s, Dementia, and many others",
        "type" : "16"
      },
      "7120189" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120189,
        "question" : "……………… operate on the human brain and body to treat and cure diseases affecting the nervous system and brain stem",
        "type" : "16"
      },
      "7120190" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120190,
        "question" : "…………… work in a particular area of gynecology that focuses on neonatal care and childbirth",
        "type" : "16"
      },
      "7120191" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120191,
        "question" : "…………………… focus on the treatment and prevention of cancer in terminal and at-risk patients",
        "type" : "16"
      },
      "7120192" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120192,
        "question" : "……………………… treat ailments concerned with the skeletal system, such as broken bones and arthritis",
        "type" : "16"
      },
      "7120193" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120193,
        "question" : "……………….. work on and study ailments that afflict the feet and ankles of patients",
        "type" : "16"
      },
      "7120194" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120194,
        "question" : "………………… similar to Allergists, diagnose and treat allergies, as well as autoimmune disorders",
        "type" : "16"
      },
      "7120195" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120195,
        "question" : "……………… diagnose and detect physiological ailments through the use of x-rays and other such imaging technologies",
        "type" : "16"
      },
      "7120196" : {
        "hint" : "Fill up the instruction with suitable word choice :( diabetic, surgery, midnight, medications, postponed)",
        "phase" : 2,
        "ques_id" : 7120196,
        "question" : "Nothing to eat or drink after …………………… if your procedure is scheduled at 7am",
        "type" : "17"
      },
      "7120197" : {
        "hint" : "Fill up the instruction with suitable word choice :( diabetic, surgery, midnight, medications, postponed)",
        "phase" : 2,
        "ques_id" : 7120197,
        "question" : "If you are not experiencing usual pain on the day of surgery, please contact us because the surgery has to be …………………………………………….",
        "type" : "17"
      },
      "7120198" : {
        "hint" : "Fill up the instruction with suitable word choice :( diabetic, surgery, midnight, medications, postponed)",
        "phase" : 2,
        "ques_id" : 7120198,
        "question" : "Please contact us two weeks before your appointment if you are ………………………",
        "type" : "17"
      },
      "7120199" : {
        "hint" : "Fill up the instruction with suitable word choice :( diabetic, surgery, midnight, medications, postponed)",
        "phase" : 2,
        "ques_id" : 7120199,
        "question" : "Do not drive on the day of the ……………………….",
        "type" : "17"
      },
      "7120200" : {
        "hint" : "Fill up the instruction with suitable word choice :( diabetic, surgery, midnight, medications, postponed)",
        "phase" : 2,
        "ques_id" : 7120200,
        "question" : "You should take your usual ………………. with a small sip of water on the day of testing your urine",
        "type" : "17"
      },
      "7120201" : {
        "hint" : "Fill in with suitable conjunctions",
        "phase" : 2,
        "ques_id" : 7120201,
        "question" : "The   doctors treat all patients …………… prefer to treat patients who follow their instruction",
        "type" : "18"
      },
      "7120202" : {
        "hint" : "Fill in with suitable conjunctions",
        "phase" : 2,
        "ques_id" : 7120202,
        "question" : "Is your surgery on Wednesday …………… Thursday",
        "type" : "18"
      },
      "7120203" : {
        "hint" : "Fill in with suitable conjunctions",
        "phase" : 2,
        "ques_id" : 7120203,
        "question" : "It is important to note the date of expiry on medication products …………. then consume them",
        "type" : "18"
      },
      "7120204" : {
        "hint" : "Fill in with suitable conjunctions",
        "phase" : 2,
        "ques_id" : 7120204,
        "question" : "After the lady delivered a girl baby everyone were happy ……. she was exhausted",
        "type" : "18"
      },
      "7120205" : {
        "hint" : "Fill in with suitable conjunctions",
        "phase" : 2,
        "ques_id" : 7120205,
        "question" : "The nurse agreed to inform the patient’s relatives ………………… she receives instruction from the doctor",
        "type" : "18"
      },
      "7120206" : {
        "hint" : "Complete following sentences using an appropriate connecting word",
        "phase" : 2,
        "ques_id" : 7120206,
        "question" : "Alice seems to be quite cooperative with the nurse ……………………, she often gets very sick. (whereas / otherwise / nonetheless)",
        "type" : "19"
      },
      "7120207" : {
        "hint" : "Complete following sentences using an appropriate connecting word",
        "phase" : 2,
        "ques_id" : 7120207,
        "question" : "This hospital has some of the best surgeons. …………………. their service is excellent. (in addition to / moreover / beside)",
        "type" : "19"
      },
      "7120208" : {
        "hint" : "Complete following sentences using an appropriate connecting word",
        "phase" : 2,
        "ques_id" : 7120208,
        "question" : "She has never gone to the hospital …………………… .having friends and relatives working there.(in spite of / although / besides)",
        "type" : "19"
      },
      "7120209" : {
        "hint" : "Complete following sentences using an appropriate connecting word",
        "phase" : 2,
        "ques_id" : 7120209,
        "question" : "The nurse is very sulky ………………….., she hasn’t had any complaints from patients. (even so / although / even as)",
        "type" : "19"
      },
      "7120210" : {
        "hint" : "Complete following sentences using an appropriate connecting word",
        "phase" : 2,
        "ques_id" : 7120210,
        "question" : "He went out ………………… .. the  warnings of the nurse and cold weather. (despite / although / besides)",
        "type" : "19"
      },
      "7120211" : {
        "hint" : "Identify the most suitable medical term",
        "phase" : 2,
        "ques_id" : 7120211,
        "question" : "Knocked out",
        "type" : "20"
      },
      "7120212" : {
        "hint" : "Identify the most suitable medical term",
        "phase" : 2,
        "ques_id" : 7120212,
        "question" : "Broken bone",
        "type" : "20"
      },
      "7120213" : {
        "hint" : "Identify the most suitable medical term",
        "phase" : 2,
        "ques_id" : 7120213,
        "question" : "twice a day",
        "type" : "20"
      },
      "7120214" : {
        "hint" : "Identify the most suitable medical term",
        "phase" : 2,
        "ques_id" : 7120214,
        "question" : "Chronic continuing for a long time, ongoing",
        "type" : "20"
      },
      "7120215" : {
        "hint" : "Identify the most suitable medical term",
        "phase" : 2,
        "ques_id" : 7120215,
        "question" : "take up fluids, take in",
        "type" : "20"
      },
      "7120216" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120216,
        "question" : "Remember",
        "type" : "21"
      },
      "7120217" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120217,
        "question" : "Near by",
        "type" : "21"
      },
      "7120218" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120218,
        "question" : "An instinct or intuition; an immediate or basic feeling or reaction without a logical rationale",
        "type" : "21"
      },
      "7120219" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120219,
        "question" : "Don’t misunderstand me",
        "type" : "21"
      },
      "7120220" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120220,
        "question" : "Get used to something",
        "type" : "21"
      },
      "7120221" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120221,
        "question" : "To comprehend something that one considers challenging, confusing",
        "type" : "21"
      },
      "7120222" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120222,
        "question" : "Boil down",
        "type" : "21"
      },
      "7120223" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120223,
        "question" : "To feel dizzy",
        "type" : "21"
      },
      "7120224" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120224,
        "question" : "To say straight away",
        "type" : "21"
      },
      "7120225" : {
        "hint" : "Identify the best phrase to express the below given expressions",
        "phase" : 2,
        "ques_id" : 7120225,
        "question" : "Be useful",
        "type" : "21"
      },
      "7120226" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120226,
        "question" : "Patients or relatives having difficulty in coping ",
        "type" : "22"
      },
      "7120227" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120227,
        "question" : "An obese patient with jaundice ",
        "type" : "22"
      },
      "7120228" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120228,
        "question" : "A short medical slang for a sudden seizure attack ",
        "type" : "22"
      },
      "7120229" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120229,
        "question" : "New parents who constantly bring their child in the hospital for every little health problem ",
        "type" : "22"
      },
      "7120230" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120230,
        "question" : "A nurse who acts like a doctor",
        "type" : "22"
      },
      "7120231" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120231,
        "question" : "A term for constipation or having difficulty in passing stools",
        "type" : "22"
      },
      "7120232" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120232,
        "question" : "To clean up a patient from his own stools ",
        "type" : "22"
      },
      "7120233" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120233,
        "question" : "Patients who demonstrate their symptoms more dramatically in hopes of getting quicker medical attention",
        "type" : "22"
      },
      "7120234" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120234,
        "question" : "A patient with lots of health problems and diagnoses unfit for the medical-surgical floor but doesn’t qualify for ICU until he arrests in the middle of the night",
        "type" : "22"
      },
      "7120235" : {
        "hint" : "Fill in the blanks by choosing the best option",
        "phase" : 2,
        "ques_id" : 7120235,
        "question" : "The patient must be taken care until death ",
        "type" : "22"
      },
      "7120236" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120236,
        "question" : "Can I use your phone",
        "type" : "23"
      },
      "7120237" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120237,
        "question" : "Can I take a second opinion from another doctor",
        "type" : "23"
      },
      "7120238" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120238,
        "question" : "Can I talk to you for a while",
        "type" : "23"
      },
      "7120239" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120239,
        "question" : "Are you telling the truth to the doctor",
        "type" : "23"
      },
      "7120240" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120240,
        "question" : "Is that true",
        "type" : "23"
      },
      "7120241" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120241,
        "question" : "Is it safe",
        "type" : "23"
      },
      "7120242" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120242,
        "question" : "Is your mother to be blamed for your health problems",
        "type" : "23"
      },
      "7120243" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120243,
        "question" : "Do you mind if I ask you a personal question",
        "type" : "23"
      },
      "7120244" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120244,
        "question" : "Will you share the toilet with another patient",
        "type" : "23"
      },
      "7120245" : {
        "hint" : "Identify the most suitable answers the below given yes-no type of questions",
        "phase" : 2,
        "ques_id" : 7120245,
        "question" : "Do you watch TV often",
        "type" : "23"
      },
      "7120246" : {
        "hint" : "Identify the best paraphrase used by nurses to suit the client’s statement",
        "phase" : 2,
        "ques_id" : 7120246,
        "question" : "You’ve been having trouble sleeping especially in the morning",
        "type" : "26"
      },
      "7120247" : {
        "hint" : "Identify the best paraphrase used by nurses to suit the client’s statement",
        "phase" : 2,
        "ques_id" : 7120247,
        "question" : "You think you are lonely but that’s not reality",
        "type" : "26"
      },
      "7120248" : {
        "hint" : "Identify the best paraphrase used by nurses to suit the client’s statement",
        "phase" : 2,
        "ques_id" : 7120248,
        "question" : "I like to lose weight but as you know I am far from exercising",
        "type" : "26"
      },
      "7120249" : {
        "hint" : "Identify the best paraphrase used by nurses to suit the client’s statement",
        "phase" : 2,
        "ques_id" : 7120249,
        "question" : "The doctor prescribed tablets for a week. But I am fine now so I stopped taking the tablets",
        "type" : "26"
      },
      "7120250" : {
        "hint" : "Identify the best paraphrase used by nurses to suit the client’s statement",
        "phase" : 2,
        "ques_id" : 7120250,
        "question" : "I want to have a private room because I would like to have my family members spend a lot of time with me. We may end up talking a lot",
        "type" : "26"
      },
      "7120251" : {
        "hint" : "Correct the punctuation in the following sentence",
        "phase" : 2,
        "ques_id" : 7120251,
        "question" : "nurses are always the first point of contact.",
        "type" : "27"
      },
      "7120252" : {
        "hint" : "Correct the punctuation in the following sentence",
        "phase" : 2,
        "ques_id" : 7120252,
        "question" : "The doctor was a italian",
        "type" : "27"
      },
      "7120253" : {
        "hint" : "Correct the punctuation in the following sentence",
        "phase" : 2,
        "ques_id" : 7120253,
        "question" : "The nurse shouted at the Patient",
        "type" : "27"
      },
      "7120254" : {
        "hint" : "Correct the punctuation in the following sentence",
        "phase" : 2,
        "ques_id" : 7120254,
        "question" : "hello. Is anyone there the patient said",
        "type" : "27"
      },
      "7120255" : {
        "hint" : "Correct the punctuation in the following sentence",
        "phase" : 2,
        "ques_id" : 7120255,
        "question" : "I am nurse kamali",
        "type" : "27"
      },
      "7120256" : {
        "hint" : "Use the correct action word/verb",
        "phase" : 2,
        "ques_id" : 7120256,
        "question" : "The patient  ______________ (jump) over the wall of the hospital",
        "type" : "28"
      },
      "7120257" : {
        "hint" : "Use the correct action word/verb",
        "phase" : 2,
        "ques_id" : 7120257,
        "question" : "The doctor ___________(speak) to the patient’s mother",
        "type" : "28"
      },
      "7120258" : {
        "hint" : "Use the correct action word/verb",
        "phase" : 2,
        "ques_id" : 7120258,
        "question" : "The paralyzed old man has to be _________(feed) every meal",
        "type" : "28"
      },
      "7120259" : {
        "hint" : "Use the correct action word/verb",
        "phase" : 2,
        "ques_id" : 7120259,
        "question" : "The patient got dizzy and ________(fall)",
        "type" : "28"
      },
      "7120260" : {
        "hint" : "Use the correct action word/verb",
        "phase" : 2,
        "ques_id" : 7120260,
        "question" : "The doctor was _________ (annoy) to see a dirty ward",
        "type" : "28"
      },
      "7120261" : {
        "hint" : "Complete the sentences using the most appropriate grammar usage",
        "phase" : 2,
        "ques_id" : 7120261,
        "question" : "Four doctors ___________(want/wants) to have the elderly patients transferred to another unit",
        "type" : "29"
      },
      "7120262" : {
        "hint" : "Complete the sentences using the most appropriate grammar usage",
        "phase" : 2,
        "ques_id" : 7120262,
        "question" : "The nurse ___________ (made/make) the patient exercise regularly",
        "type" : "29"
      },
      "7120263" : {
        "hint" : "Complete the sentences using the most appropriate grammar usage",
        "phase" : 2,
        "ques_id" : 7120263,
        "question" : "The child nurse ____________ (advise/advised) the parent not to give mobiles to their child",
        "type" : "29"
      },
      "7120264" : {
        "hint" : "Complete the sentences using the most appropriate grammar usage",
        "phase" : 2,
        "ques_id" : 7120264,
        "question" : "The tablets are hard to ___________(break/broke)",
        "type" : "29"
      },
      "7120265" : {
        "hint" : "Complete the sentences using the most appropriate grammar usage",
        "phase" : 2,
        "ques_id" : 7120265,
        "question" : "The nurse ________(ran/run) to help a patient who was at the end of life",
        "type" : "29"
      },
      "7130001" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130001,
        "question" : "excision of a kidney",
        "type" : "03"
      },
      "7130002" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130002,
        "question" : "inflammation of the liver",
        "type" : "03"
      },
      "7130003" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130003,
        "question" : "the study of cells",
        "type" : "03"
      },
      "7130004" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130004,
        "question" : "cancer of blood cells",
        "type" : "03"
      },
      "7130005" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130005,
        "question" : "tumour of the eye ",
        "type" : "03"
      },
      "7130006" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130006,
        "question" : "disease of the nervous system",
        "type" : "03"
      },
      "7130007" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130007,
        "question" : "dying cells",
        "type" : "03"
      },
      "7130008" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130008,
        "question" : "harmful to the kidneys ",
        "type" : "03"
      },
      "7130009" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130009,
        "question" : "inflammation of the skin",
        "type" : "03"
      },
      "7130010" : {
        "hint" : "Identify the most appropriate medical terminology",
        "phase" : 3,
        "ques_id" : 7130010,
        "question" : "tumour of bone, muscle, or connective tissue",
        "type" : "03"
      },
      "7130011" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130011,
        "question" : "Removal/examination of example of tissue from a living body for diagnostic purpose",
        "type" : "05"
      },
      "7130012" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130012,
        "question" : "Unwanted waste material",
        "type" : "05"
      },
      "7130013" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130013,
        "question" : "To clean in between teeth with thread",
        "type" : "05"
      },
      "7130014" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130014,
        "question" : "A flat instrument for holding down the tongue",
        "type" : "05"
      },
      "7130015" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130015,
        "question" : "Towards the back of the body",
        "type" : "05"
      },
      "7130016" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130016,
        "question" : "Neurological test to test balance of patients by asking them to stand with eyes and feet close together",
        "type" : "05"
      },
      "7130017" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130017,
        "question" : "Presence of sugar in urine",
        "type" : "05"
      },
      "7130018" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130018,
        "question" : "Red spots on the skin",
        "type" : "05"
      },
      "7130019" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130019,
        "question" : "Lack of blood supply to an organ",
        "type" : "05"
      },
      "7130020" : {
        "hint" : "Give one word for the following medical conditions",
        "phase" : 3,
        "ques_id" : 7130020,
        "question" : "The last molar ",
        "type" : "05"
      },
      "7130021" : {
        "hint" : "What do these terms stand for in a Nurse’s handover report",
        "phase" : 3,
        "ques_id" : 7130021,
        "question" : "BP",
        "type" : "07"
      },
      "7130022" : {
        "hint" : "What do these terms stand for in a Nurse’s handover report",
        "phase" : 3,
        "ques_id" : 7130022,
        "question" : "SpO2",
        "type" : "07"
      },
      "7130023" : {
        "hint" : "What do these terms stand for in a Nurse’s handover report",
        "phase" : 3,
        "ques_id" : 7130023,
        "question" : "R/P",
        "type" : "07"
      },
      "7130024" : {
        "hint" : "What do these terms stand for in a Nurse’s handover report",
        "phase" : 3,
        "ques_id" : 7130024,
        "question" : "RBS",
        "type" : "07"
      },
      "7130025" : {
        "hint" : "What do these terms stand for in a Nurse’s handover report",
        "phase" : 3,
        "ques_id" : 7130025,
        "question" : "GCS",
        "type" : "07"
      },
      "7130026" : {
        "hint" : "Choose the best language function to suit the example given",
        "phase" : 3,
        "ques_id" : 7130026,
        "question" : "We could bring",
        "type" : "08"
      },
      "7130027" : {
        "hint" : "Choose the best language function to suit the example given",
        "phase" : 3,
        "ques_id" : 7130027,
        "question" : "I am not sure",
        "type" : "08"
      },
      "7130028" : {
        "hint" : "Choose the best language function to suit the example given",
        "phase" : 3,
        "ques_id" : 7130028,
        "question" : "I mean we could ",
        "type" : "08"
      },
      "7130029" : {
        "hint" : "Choose the best language function to suit the example given",
        "phase" : 3,
        "ques_id" : 7130029,
        "question" : "What are the other things ",
        "type" : "08"
      },
      "7130030" : {
        "hint" : "Choose the best language function to suit the example given",
        "phase" : 3,
        "ques_id" : 7130030,
        "question" : "That’s the best",
        "type" : "08"
      },
      "7130031" : {
        "hint" : "Find the Wh- question in the embedded question",
        "phase" : 3,
        "ques_id" : 7130031,
        "question" : "Will you show me where the maternity ward is",
        "type" : "09"
      },
      "7130032" : {
        "hint" : "Find the Wh- question in the embedded question",
        "phase" : 3,
        "ques_id" : 7130032,
        "question" : "Can you tell me when the doctor will come",
        "type" : "09"
      },
      "7130033" : {
        "hint" : "Find the Wh- question in the embedded question",
        "phase" : 3,
        "ques_id" : 7130033,
        "question" : "Do you know if they provide clinical counseling",
        "type" : "09"
      },
      "7130034" : {
        "hint" : "Find the Wh- question in the embedded question",
        "phase" : 3,
        "ques_id" : 7130034,
        "question" : "Could you explain the post-surgical complications",
        "type" : "09"
      },
      "7130035" : {
        "hint" : "Find the Wh- question in the embedded question",
        "phase" : 3,
        "ques_id" : 7130035,
        "question" : "Will you tell me where the ICU is",
        "type" : "09"
      },
      "7130036" : {
        "hint" : "Match the sentence with that have the same meaning",
        "phase" : 3,
        "ques_id" : 7130036,
        "question" : "She intends to resign",
        "type" : "10"
      },
      "7130037" : {
        "hint" : "Match the sentence with that have the same meaning",
        "phase" : 3,
        "ques_id" : 7130037,
        "question" : "I take all the responsibility",
        "type" : "10"
      },
      "7130038" : {
        "hint" : "Match the sentence with that have the same meaning",
        "phase" : 3,
        "ques_id" : 7130038,
        "question" : "I regret to inform you that your friend passed away",
        "type" : "10"
      },
      "7130039" : {
        "hint" : "Match the sentence with that have the same meaning",
        "phase" : 3,
        "ques_id" : 7130039,
        "question" : "I am willing to train my replacement",
        "type" : "10"
      },
      "7130040" : {
        "hint" : "Match the sentence with that have the same meaning",
        "phase" : 3,
        "ques_id" : 7130040,
        "question" : "I made misunderstood and did what was not required",
        "type" : "10"
      },
      "7130041" : {
        "hint" : "Rewrite the following statements and questions by embedding the direct question in parentheses",
        "phase" : 3,
        "ques_id" : 7130041,
        "question" : "I don’t know…..(Where are my tablets)",
        "type" : "11"
      },
      "7130042" : {
        "hint" : "Rewrite the following statements and questions by embedding the direct question in parentheses",
        "phase" : 3,
        "ques_id" : 7130042,
        "question" : "Do you have any idea ….(How they classify the intensity of pain)",
        "type" : "11"
      },
      "7130043" : {
        "hint" : "Rewrite the following statements and questions by embedding the direct question in parentheses",
        "phase" : 3,
        "ques_id" : 7130043,
        "question" : "I am not sure ……..(when  only I will be discharged)",
        "type" : "11"
      },
      "7130044" : {
        "hint" : "Rewrite the following statements and questions by embedding the direct question in parentheses",
        "phase" : 3,
        "ques_id" : 7130044,
        "question" : "I forgot…(where did you leave the prescription)",
        "type" : "11"
      },
      "7130045" : {
        "hint" : "Rewrite the following statements and questions by embedding the direct question in parentheses",
        "phase" : 3,
        "ques_id" : 7130045,
        "question" : "Can you tell me… (why we have to do this treatment)",
        "type" : "11"
      },
      "7130046" : {
        "hint" : "Fix the most suitable expressions",
        "phase" : 3,
        "ques_id" : 7130046,
        "question" : "Scheduled",
        "type" : "12"
      },
      "7130047" : {
        "hint" : "Fix the most suitable expressions",
        "phase" : 3,
        "ques_id" : 7130047,
        "question" : "At the right time",
        "type" : "12"
      },
      "7130048" : {
        "hint" : "Fix the most suitable expressions",
        "phase" : 3,
        "ques_id" : 7130048,
        "question" : "To have something ready by the deadline",
        "type" : "12"
      },
      "7130049" : {
        "hint" : "Fix the most suitable expressions",
        "phase" : 3,
        "ques_id" : 7130049,
        "question" : "To be prepared earlier than expected ",
        "type" : "12"
      },
      "7130050" : {
        "hint" : "Fix the most suitable expressions",
        "phase" : 3,
        "ques_id" : 7130050,
        "question" : "Requiring a lot of time ",
        "type" : "12"
      },
      "7130051" : {
        "hint" : "Fit the appropriate word",
        "phase" : 3,
        "ques_id" : 7130051,
        "question" : "I have to go ……………..like to spend more time with you at the hospital",
        "type" : "14"
      },
      "7130052" : {
        "hint" : "Fit the appropriate word",
        "phase" : 3,
        "ques_id" : 7130052,
        "question" : "This is difficult to do ………………… she has traces of thyroid",
        "type" : "14"
      },
      "7130053" : {
        "hint" : "Fit the appropriate word",
        "phase" : 3,
        "ques_id" : 7130053,
        "question" : "She can’t do it now…………….. she can try again tomorrow",
        "type" : "14"
      },
      "7130054" : {
        "hint" : "Fit the appropriate word",
        "phase" : 3,
        "ques_id" : 7130054,
        "question" : "I think you…………. can try a short once again",
        "type" : "14"
      },
      "7130055" : {
        "hint" : "Fit the appropriate word",
        "phase" : 3,
        "ques_id" : 7130055,
        "question" : "I consider that you are ignorant   but …………..I want you read more  and be abreast",
        "type" : "14"
      },
      "7130056" : {
        "hint" : "Dealing with situations",
        "phase" : 3,
        "ques_id" : 7130056,
        "question" : "If a phone call in not returned within a few minutes about an update of an emergency case, you shoud",
        "type" : "15"
      },
      "7130057" : {
        "hint" : "Dealing with situations",
        "phase" : 3,
        "ques_id" : 7130057,
        "question" : "What are the frequent reasons for patients to lose their cool",
        "type" : "15"
      },
      "7130058" : {
        "hint" : "Dealing with situations",
        "phase" : 3,
        "ques_id" : 7130058,
        "question" : "The doctor suggests amputation only when",
        "type" : "15"
      },
      "7130059" : {
        "hint" : "Dealing with situations",
        "phase" : 3,
        "ques_id" : 7130059,
        "question" : "Patients usually want to be sent home because",
        "type" : "15"
      },
      "7130060" : {
        "hint" : "Dealing with situations",
        "phase" : 3,
        "ques_id" : 7130060,
        "question" : "How do you handle patients with mood swings",
        "type" : "15"
      },
      "7130061" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130061,
        "question" : "last menstrual period",
        "type" : "19"
      },
      "7130062" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130062,
        "question" : "polymerase chain reaction ",
        "type" : "19"
      },
      "7130063" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130063,
        "question" : "after meals ",
        "type" : "19"
      },
      "7130064" : {
        "hint" : "Abbreviate the following",
        "phase" : 0,
        "ques_id" : 7130064,
        "question" : "both eyes ",
        "type" : "19"
      },
      "7130065" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130065,
        "question" : "every hour ",
        "type" : "19"
      },
      "7130066" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130066,
        "question" : "four times a day ",
        "type" : "19"
      },
      "7130067" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130067,
        "question" : "every other day ",
        "type" : "19"
      },
      "7130068" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130068,
        "question" : "every 2 hours ",
        "type" : "19"
      },
      "7130069" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130069,
        "question" : "related to ",
        "type" : "19"
      },
      "7130070" : {
        "hint" : "Abbreviate the following",
        "phase" : 3,
        "ques_id" : 7130070,
        "question" : "vital signs ",
        "type" : "19"
      },
      "7130071" : {
        "hint" : "Identify the right assessment",
        "phase" : 3,
        "ques_id" : 7130071,
        "question" : "Check how often the medication is given ",
        "type" : "20"
      },
      "7130072" : {
        "hint" : "Identify the right assessment",
        "phase" : 3,
        "ques_id" : 7130072,
        "question" : "Check if medication is correct ",
        "type" : "20"
      },
      "7130073" : {
        "hint" : "Identify the right assessment",
        "phase" : 3,
        "ques_id" : 7130073,
        "question" : "Check basic details of patient ",
        "type" : "20"
      },
      "7130074" : {
        "hint" : "Identify the right assessment",
        "phase" : 3,
        "ques_id" : 7130074,
        "question" : "Check if wound is healing",
        "type" : "20"
      },
      "7130075" : {
        "hint" : "Identify the right assessment",
        "phase" : 3,
        "ques_id" : 7130075,
        "question" : "Check case history",
        "type" : "20"
      },
      "7130076" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130076,
        "question" : "I prefer to lead ",
        "type" : "18"
      },
      "7130077" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130077,
        "question" : "I always pay attention to the work I do ",
        "type" : "18"
      },
      "7130078" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130078,
        "question" : "I am emotional when I make decisions  ",
        "type" : "18"
      },
      "7130079" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130079,
        "question" : "I am very adjustable ",
        "type" : "18"
      },
      "7130080" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130080,
        "question" : "I don’t like to be spoken rudely ",
        "type" : "18"
      },
      "7130081" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130081,
        "question" : "I introspect on my actions and seek preventive or better steps  ",
        "type" : "18"
      },
      "7130082" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130082,
        "question" : "look at things with a positive approach ",
        "type" : "18"
      },
      "7130083" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130083,
        "question" : "I can write without mistakes in English",
        "type" : "18"
      },
      "7130084" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130084,
        "question" : "I can speak in English without errors",
        "type" : "18"
      },
      "7130085" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130085,
        "question" : "I can listen and respond to situations in English  ",
        "type" : "18"
      },
      "7130086" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130086,
        "question" : "I can read to complete any task based on the portion read ",
        "type" : "18"
      },
      "7130087" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130087,
        "question" : "I like to be leader",
        "type" : "18"
      },
      "7130088" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130088,
        "question" : "I will be true to my commitment",
        "type" : "18"
      },
      "7130089" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130089,
        "question" : "I am aggressive",
        "type" : "18"
      },
      "7130090" : {
        "hint" : "Self Analysis – Choose the options that suits you best",
        "phase" : 4,
        "ques_id" : 7130090,
        "question" : "I try to be a perfectionist",
        "type" : "18"
      }
    }
  }

}