

function input(){
    const text_box_input = document.getElementById("input");

    const new_text = translation(text_box_input.value);

    let text_output = document.getElementById("output");

    text_output.value = new_text;

}


function translation(word){
    //  macedonian
    word = word.toLowerCase();
    word = word.replaceAll("’", "ъ");
    word = word.replaceAll("њ", "нј");
    word = word.replaceAll("љ", "лј");
    word = word.replaceAll("ја", "я");
    word = word.replaceAll("ја", "я");
    word = word.replaceAll("ју", "ю");
    word = word.replaceAll("шт", "щ");


    //  bulgarian
    word = word.replaceAll("кь", "ќ");
    word = word.replaceAll("гь", "ѓ");
    word = word.replaceAll("й", "ј");
    word = word.replaceAll("ь", "ј");
    word = word.replaceAll("дз", "ѕ");
    word = word.replaceAll("дж", "џ");

    return word
}