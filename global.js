
const aside1 = document.getElementById("aside1");

const Berkin = () => {
  try {
    asideclas = `${aside1.classList}`;
    if (asideclas.includes("Asside1")) aside1.classList.remove("Asside1");
    else aside1.classList.add("Asside1");
  } catch (err) {
    console.log(err);
  }
};

