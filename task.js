// // Dictionarys for test:
// const dictionary_test1 = "";
// const dictionary_test2 = "a=1";
// const dictionary_test3 = "xr=2";
// const dictionary_test4 = "rx=2";
// const dictionary_test5 = "d=x";
// const dictionary_test6 = "x=1";
// const dictionary_test7 = "x=x";
// const dictionary_test8 = "x=1|a=2";
// const dictionary_test9 = "x=1|a=2|c=3";
// const dictionary_test10 = "a=2|x=1";
// const dictionary_test11 = "a=2|c=3|x=1";
// const dictionary_test12 = "a=2|x=1|y=3";
// const dictionary_test13 = "d=4|a=2|x=1|rr=3|y=3";
// const dictionary_test14 = "a=2|x=1|xx=3";
// const dictionary_test15 = "xa=2|x=1|xx=3";
// const dictionary_test16 = "xa=2|sx=1|xx=3|x=1";
// const dictionary_test17 = "x=1|sx=1|xx=3|xa=1";


// const get_value = (dictionary, key) => {
//     let value = "";
//     let empty_value = "empty value";
//     let equal_sign_pos = 0;
//     let separator_pos = 0;
//     let key_pos = 0
//     let left_char = "";
//     let right_char = "";

//     // check if dictionary is not empty
//     if (dictionary !== ""){
//        key_pos = dictionary.indexOf(key);

//        if (key_pos === -1){
//             // if key not found in dictionary
//             return empty_value;
//        } else {

//         let pos_left = key_pos-1;
//         let pos_right = key_pos+1;

//         right_char = dictionary.slice(pos_right, pos_right+1);
//         // key pos is dictionary start
//         if (pos_left === -1){
//             equal_sign_pos = dictionary.indexOf("=");
//             separator_pos = dictionary.indexOf("|");
//             if(separator_pos !== -1){
//                 value = dictionary.slice(equal_sign_pos+1,separator_pos);
//             }else if (right_char === "=" && left_char === "|" && ){
//                 value = dictionary.slice(equal_sign_pos+1,dictionary.length);
//             }else{
//                return empty_value;
//             }
//         } else {
//             left_char = dictionary.slice(pos_left, key_pos);
   
//         }
//         if (right_char !== "=" && right_char !== "|"){

//         }

//        }

//     }else{
//         // if dictionary is empty
//         return empty_value;
//     }
    
    
//     // if (pos === 0){
//     //      equal_sign_pos = dictionary.indexOf("=");
//     //      if (equal_sign_pos){

//     //      }
//     //      separator_pos = dictionary.indexOf("|");

//     // }else{

//     //     let char = dictionary.slice(pos-1,pos);
//     // console.log(char);
//     // if(char !== "|"){
//     //     separator_pos = dictionary.indexOf("|",pos);
//     //     pos =  dictionary.indexOf(key,separator_pos);
//     // }

//     //     equal_sign_pos = dictionary.indexOf("=",pos);
//     //     separator_pos = dictionary.indexOf("|",pos);
//     // }
    
 
//     // console.log(key);
 
//     // console.log(`key: ${pos}  = : ${equal_sign_pos} | : ${separator_pos}`) 
   
//   //   value = dictionary.slice(equal_sign_pos+1,separator_pos);

//     return value;
// }

// let key = "x";
// // Test1
// let return_value1 = get_value(dictionary_test1, key);
// console.log(`TEST-1 - Dictionary: ${dictionary_test1}, Key: ${key}, Return-value: ${return_value1}`);
// // Test2
// let return_value2 = get_value(dictionary_test2, key);
// console.log(`TEST-2 - Dictionary: ${dictionary_test2}, Key: ${key}, Return-value: ${return_value2}`);
// // Test3
// let return_value3 = get_value(dictionary_test3, key);
// console.log(`TEST-3 - Dictionary: ${dictionary_test3}, Key: ${key}, Return-value: ${return_value3}`);
// // Test4
// let return_value4 = get_value(dictionary_test4, key);
// console.log(`TEST-4 - Dictionary: ${dictionary_test4}, Key: ${key}, Return-value: ${return_value4}`);
// // Test5
// let return_value5 = get_value(dictionary_test5, key);
// console.log(`TEST-5 - Dictionary: ${dictionary_test5}, Key: ${key}, Return-value: ${return_value5}`);
// // Test6
// let return_value6 = get_value(dictionary_test6, key);
// console.log(`TEST-6 - Dictionary: ${dictionary_test6}, Key: ${key}, Return-value: ${return_value6}`);
// // Test7
// let return_value7 = get_value(dictionary_test7, key);
// console.log(`TEST-7 - Dictionary: ${dictionary_test7}, Key: ${key}, Return-value: ${return_value7}`);
// // Test8
// let return_value8 = get_value(dictionary_test8, key);
// console.log(`TEST-8 - Dictionary: ${dictionary_test8}, Key: ${key}, Return-value: ${return_value8}`);



// const set_value = (dictionary, key, value) => {

//     let add_new_key_value = `${key}=${value}`;
//     if (dictionary === ""){
//         dictionary = add_new_key_value;
//     }else{

//        dictionary += add_new_key_value;

//     }


//     return dictionary;
// };





