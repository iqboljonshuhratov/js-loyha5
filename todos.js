const row = document.querySelector(".row");
const p = document.getElementById('p');


const Gettodos = async (n) =>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${n}`);
    return res.data;
}
let save = '';

const SetTodos = async (n) => {
    const info = await Gettodos(n);
    row.innerHTML ='';
    info.map((v)=>{
        const col = document.createElement('div');
        col.className= 'col-6 col-md-4 mb-3';
            col.innerHTML=`
            <div class="shadow rounded p-3">
                <p id="p" class="w-100">${v.title} <br> id=${v.id}</p>
            </div>
            `;
        row.appendChild(col);
    })
}

const showLimit = () =>{
    const n = +document.getElementById("Limit").value;
    console.log(n);
    SetTodos(n);
}

