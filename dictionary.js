const dictionary_test1 = '';
const dictionary_test2 = 'a=1';
const dictionary_test3 = 'xr=2';
const dictionary_test4 = 'rx=2';
const dictionary_test5 = 'd=x';
const dictionary_test6 = 'x=1';
const dictionary_test7 = 'x=x';
const dictionary_test8 = 'x=1|a=2';
const dictionary_test9 = 'x=1|a=2|c=3';
const dictionary_test10 = 'a=2|x=1';
const dictionary_test11 = 'a=2|c=3|x=1';
const dictionary_test12 = 'a=2|x=1|y=3';
const dictionary_test13 = 'd=4|a=2|x=1|rr=3|y=3';
const dictionary_test14 = 'a=2|x=1|xx=3';
const dictionary_test15 = 'xa=2|x=1|xx=3';
const dictionary_test16 = 'xa=2|sx=1|xx=3|x=1';
const dictionary_test17 = 'x=1|sx=1|xx=3|xa=1';
const dictionary_test18 = 'dx=1|sx=1|x=x|xx=3|xa=1';

const get_left_char = (dictionary, key_pos) => {
  let l_char = '';

  return l_char;
};

const get_right_char = (dictionary, key_pos) => {
  let r_char = '';
  let r_char_pos = key_pos + 2;
  r_char = dictionary.slice(key_pos, r_char_pos);
  if (r_char !== '=' && r_char !== '') {
    return r_char;
  } else {
    return '';
  }
};

const get_key_from_dictionary = (dictionary, key) => {
  //check if there are chars from left/right
  // check if there are | from left or = from right
  // check if the pos is from 0 or dictionary.length
  // return the key from dictionary
  let key_pos = 0;
  let l_char = '';
  let r_char = '';

  key_pos = dictionary.indexOf(key);

  // check if the pos is from 0
  if (key_pos === 0) {
    // check only the right char
    r_char = get_right_char(dictionary, key_pos);
    if (r_char !== '') {
      // not find correct key
      // search key from another position
    } else {
      // find the key
    }
  }
  return key_pos;
};

const search_if_key_exsits = (dictionary, key) => {
  let is_key_exsits = false;
  let key_from_dic = '';

  let key_pos = dictionary.indexOf(key);
  if (key_pos === -1) {
    return is_key_exsits;
  } else {
    //chars from key found in dictionary
    // check if this is a correct key
    //check if there are chars from left/right
    // if left or right chars not found return the key from dic
    key_from_dic = get_key_from_dictionary(dictionary, key);

    if (key_from_dic === key) {
      is_key_exsits = true;
      return is_key_exsits;
    }
  }
};

const update_value = (dictionary, key, value) => {
  let key_pos = 0;

  return dictionary;
};

const add_or_update_key_value = (dictionary, key, value) => {
  let key_value = `${key}=${value}`;
  let is_key_exsits = false;

  if (dictionary !== '') {
    // search if key exists in dictionary
    is_key_exsits = search_if_key_exsits(dictionary, key); //search key can't get empty values
    if (is_key_exsits) {
      // update value
      dictionary = update_value(dictionary, key, value);
      return dictionary;
    } else {
      // add key value to end of dictionary
      dictionary += '|' + key_value;
      return dictionary;
    }
  } else {
    dictionary = key_value;
    return dictionary;
  }
};

search_key(dictionary_test18, 'x');
