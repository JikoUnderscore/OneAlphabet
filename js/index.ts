

function input(){
    let text_box_input = document.getElementById("input");

    console.log(text_box_input.innerText.toString());


    // const text_input = document.getElementById("input").innerHTML;

    // console.log(text_input);
    // let new_text = translation(text_input.toString());

    // const text_output = document.getElementById("output");

    // text_output.innerText = text_input.toString();

}





function output(){
    console.log("output ");
}


function translation(word){
    //  macedonian
    word = word.toLowerCase();
    word = word.replace("’", "ъ");
    word = word.replace("њ", "нј");
    word = word.replace("љ", "лј");
    word = word.replace("ја", "я");
    word = word.replace("ја", "я");
    word = word.replace("ју", "ю");
    word = word.replace("шт", "щ");


    //  bulgarian
    word = word.replace("кь", "ќ");
    word = word.replace("гь", "ѓ");
    word = word.replace("й", "ј");
    word = word.replace("ь", "ј");
    word = word.replace("дз", "ѕ");
    word = word.replace("дж", "џ");



    return word
}