
var api = 'https://api.dictionaryapi.dev/api/v2/entries/en/english'
var container = document.getElementById('container')
var mainContainer = document.getElementById('main-container')
var searchBar = document.getElementById('search')
var searchButton = document.getElementById('find')
var result = document.getElementById('result')
searchButton.addEventListener('click',find)
searchBar.addEventListener('input', (e) =>previous(e))
console.log(searchBar)

var activeSearch = false

// function clearPreious(params) {
    
// }


function previous(e) {
    // e.preventDefault()
    

    let v = e.tatget
    console.log(searchBar.value)
    if(searchBar.value < 1){
        mainContainer.style.display = 'none'
        activeSearch = false
    }
    if(searchBar.value){
        activeSearch = true
    }
  

}



let soccer = [
    {"word":"soccer","phonetic":"/ˈsɒk.ə/","phonetics":[{"text":"/ˈsɒk.ə/","audio":""},{"text":"/ˈsɑk.ɚ/","audio":""}],

    "meanings":[
        {"partOfSpeech":"noun","definitions":[{"definition":"Association football","synonyms":["association football","football","soccer football"],"antonyms":[]}],"synonyms":["association football","football","soccer football"],"antonyms":[]},
        {"partOfSpeech":"verb","definitions":[{"definition":"To kick the football directly off the ground, without using one's hands.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]}
    ],

    "license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},
    "sourceUrls":["https://en.wiktionary.org/wiki/soccer"]
    }
]

let english = [
    {"word":"english","phonetic":"/ˈɪŋ.ɡlɪʃ/","phonetics":[{"text":"/ˈɪŋ.ɡlɪʃ/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/english-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=1227458","license":{"name":"BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],
    
    "meanings":[
        {"partOfSpeech":"noun",
        "definitions":
            [
            {"definition":"Spinning or rotary motion given to a ball around the vertical axis, as in billiards or bowling.","synonyms":[],"antonyms":[],"example":"You can't hit it directly, but maybe if you give it some english."},
            {"definition":"An unusual or unexpected interpretation of a text or idea, a spin, a nuance.","synonyms":[],"antonyms":[]}
            ],
            "synonyms":["side","sidespin","spin"],"antonyms":[]
        }
    ],
    
    "license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":["https://en.wiktionary.org/wiki/english"]}]


var queries = {
    soccer,
    english
}

function getAllSynonyms(arr) {
    let synonyms = ''
    for (const synonym of arr) {
        // console.log(synonym)
        if(arr.indexOf(synonym) <= arr.length){
            console.log(arr.indexOf(synonym))
            synonyms += synonym + ', '
        }
    }
    return synonyms
}



function find() {
    if(activeSearch){
        mainContainer.style.display = 'block'
    }

    container.style.display = 'block'
    let search = searchBar.value
    var query = search.toLowerCase()

    let soccerSynonymsArray = queries.soccer[0].meanings[0].definitions[0].synonyms
    let soccerSynonyms = getAllSynonyms(soccerSynonymsArray)
    let englishSynonymsArray = queries.english[0].meanings[0].synonyms
    let englishSynonyms = getAllSynonyms(englishSynonymsArray)
    
    var nounSoccer = queries.soccer[0].word + '<br>' + queries.soccer[0].meanings[0].partOfSpeech + ': ' + '<br>' + 'definition: ' + queries.soccer[0].meanings[0].definitions[0].definition + '<br>' + soccerSynonyms
    var verbSoccer = '<br>' + '<br>' + queries.soccer[0].meanings[1].partOfSpeech + ': ' + '<br>' + 'definition: ' + queries.soccer[0].meanings[1].definitions[0].definition + '<br>' + 'synonyms: ' + 'none'

    var nounEnglish = queries.english[0].word + '<br>' + queries.english[0].meanings[0].partOfSpeech + ': ' + '<br>' + 'definition: ' + queries.english[0].meanings[0].definitions[1].definition + '<br>' +'definition two: ' + queries.english[0].meanings[0].definitions[1].definition+ '<br>' + '<br>' + 'synonyms: ' + 'synonyms: ' + englishSynonyms

    // console.log(verbEnglish)

    if(query === ''){
        alert('you have to type something inside the searchbar!')
        return
    }

    switch (query) {
        case 'soccer': ''
        result.innerHTML = nounSoccer + verbSoccer;
            break;
        case 'english':
        result.innerHTML = nounEnglish ;
            break
        default: result.innerHTML ='<h1>' +'404'+ '</h1>'  +'Sorry you query is not found in our data base.' 
            break;
    }

}

