const aside1 = document.getElementById("aside1");
const tbody = document.querySelector("tbody");
let asideclas = ``;

const GetUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

const SetUsers = async () => {
  const tables = await GetUsers();
  tables.map((v, i) => {
    tbody.innerHTML += `
            <tr>
                <td class = "fw-bold";>${i + 1}</td>
                <td class = "fw-bold";>${v.name}</td>
                <td>${v.email}</td>
                <td>${v.address.city} ${v.address.suite} ${
      v.address.street
    } </td>
                <td>${v.phone}</td>
                <td>${v.website}</td>
                <td>${v.company.name}</td>
                <td>
                    <button  type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop" onclick="SetInfo(${
                      v.id
                    })" class="btn btn-dark me-3 d-inline"><i class="fas fa-edit"></i></button>
                    <button onclick="DeletInfo(${
                      v.id
                    })" class="btn btn-danger me-3 d-inline"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
      `;
  });
};

SetUsers();

const DeletInfo = async (id) => {
  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(res);
    SetUsers();
    alert("muoffaqiyatlik ochirildi");
  } catch (err) {
    console.log(err);
  }
};


const Berkin = () => {
  try {
    asideclas = `${aside1.classList}`;
    if (asideclas.includes("Asside1")) aside1.classList.remove("Asside1");
    else aside1.classList.add("Asside1");
  } catch (err) {
    console.log(err);
  }
};

// post yuborish

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const website = document.getElementById("website");

var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
  keyboard: false,
});
const PostUser = async () => {
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, {
      name: fullname.value,
      email: email.value + "@gmail.com",
      website: website.value,
    });

    SetUsers();
    myModal.hide();
    console.log("muoffaqiyatlik qoshildi");
    fullname.value = "";
    email.value = "";
    website.value = "";
  } catch (err) {
    console.log(err);
  }
};

// malumotlarni batafsil chiqaribberish

const boxInfo = document.getElementById("boxInfo")

const SetInfo = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    let text = `${res.data.name}, ${res.data.address.city} ${res.data.address.suite} ${res.data.address.street}, ${res.data.phone}, ${res.data.website}, ${res.data.company.name}`;
    boxInfo.innerHTML = `${text}`
  } catch (err) {
    console.log(err);
  }
};
