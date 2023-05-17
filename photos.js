
    const row = document.querySelector(".row");

    const Getphotos = async (n) =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${n}`);
        return res.data;
    }

    const setPhotos = async (n) => {
        const photos = await Getphotos(n);

        photos.map((photo)=>{
            const col = document.createElement("div");
            col.className = 'col-6 col-md-4 mb-3';
            col.innerHTML = `
                    <div class="shadow rounded">
                    <img class="w-100" src="${photo.thumbnailUrl}" alt="">
                    </div>
                    
            `;

            row.appendChild(col);
        })
    }

    const showPhotos = () =>{
        const n = +document.querySelector('input').value;

        setPhotos(n);
    }



