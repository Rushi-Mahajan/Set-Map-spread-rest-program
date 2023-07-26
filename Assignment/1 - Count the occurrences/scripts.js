/* . Count the occurrences.

You are building a word count generator that will take a large string of text as input and output the words and 
the number of times they are present in the string. Your task is to write a function that can count the 
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
assume that the string only contains alphabetic characters and spaces*/

Help="A String String"

function conutWord(Help){
    let maps=new Map()
    Arrays=Help.split(" ")
    for(let word of  Arrays){
        if(maps.has(word)){
            maps.set(word, maps.get(word)+1)
        }
        else{
            maps.set(word,1)
        }
       
    }
    console.log(maps)
}
conutWord(Help)