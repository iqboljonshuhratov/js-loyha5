const row = document.getElementById("row");
let save = '';
let save2 = '';


const Gettodos = async (n) =>{
    try{
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${n}`);
        return res.data;
    }catch(err){
        console.log(err);
    }
}

const SetTodos = async (n) => {
try{

    const info = await Gettodos(n);
    info.map((v)=>{
            row.innerHTML = `
            <div id="Info" class="p-3 me-5 w-50 bg-white" style="border-radius: 20px;">
            <h1 class="mb-2">Translation</h1>
            <p class="fw-bold px-3">${v.phonetics[1].text}</p>
            <audio controls src="${v.phonetics[1].audio}"></audio>
            </div>
            <div id="istoris" class=" bg-white w-50 p-3 " style="border-radius: 20px;">
            <h1>Istoris</h1>
            <h3>${save}</h3>
            <audio controls src="${save2}"></audio>
            
        </div>
            `;
        })
        save=n;
        info.map((v)=>{
          save2 = v.phonetics[1].audio
        });
}catch(err){
    console.log(err);
}
}

const showLimit = () =>{
    const n = document.getElementById("Limit").value;
    console.log(n);
    SetTodos(n);
}

