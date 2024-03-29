const text_box_input = document.getElementById("input");
const text_output = document.getElementById("output");

text_box_input.addEventListener('input', input, false);

function input(){

    const new_text = translation(text_box_input.value);


    text_output.value = new_text;

}

/**
 * @param {string} word
 * @returns {string}
 */
function translation(word){
    //  macedonian
    word = word.toLowerCase();
    word = word.replaceAll("’", "ъ");
    word = word.replaceAll("њ", "нј");
    word = word.replaceAll("љ", "лј");
    word = word.replaceAll("ја", "я");
    word = word.replaceAll("ју", "ю");
//     word = word.replaceAll("шт", "щ");


    //  bulgarian
    word = word.replaceAll("й", "ј");
    word = word.replaceAll("ь", "ј");
    word = word.replaceAll("кј", "ќ");
    word = word.replaceAll("гј", "ѓ");
    word = word.replaceAll("дз", "ѕ");
    word = word.replaceAll("дж", "џ");
    word = word.replaceAll("щ", "шт");
    
    
    return word
}

