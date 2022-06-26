const text_box_input = document.getElementById("input");
let text_output = document.getElementById("output");

text_box_input.addEventListener('input', input, false);

function input(){

    const new_text = translation(text_box_input.value);


    text_output.value = new_text;

}

// Ѥ ѥ
function translation(word){
    //  macedonian
    word = word.toLowerCase();
    word = word.replaceAll("’", "ъ");
    word = word.replaceAll("њ", "нј");
    word = word.replaceAll("љ", "лј");
    word = word.replaceAll("ја", "я");
    word = word.replaceAll("ја", "я");
    word = word.replaceAll("ју", "ю");
//     word = word.replaceAll("шт", "щ");


    //  bulgarian
    word = word.replaceAll("кь", "ќ");
    word = word.replaceAll("гь", "ѓ");
    word = word.replaceAll("й", "ј");
    word = word.replaceAll("ь", "ј");
    word = word.replaceAll("дз", "ѕ");
    word = word.replaceAll("дж", "џ");
    word = word.replaceAll("щ", "шт");
    
    // je
    word = word.replaceAll("је", "ѥ");
    word = word.replaceAll("ј", "й");
    
    return word
}

