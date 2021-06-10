let url = "https://jsonplaceholder.typicode.com/posts/";

/* AJAX */

const fetchUrl = async (url) => {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      
      return data;
    }
  } catch (error) {
      throw error;
  }
};

// const getResult = result => result.json();

// fetch(url).then(getResult);
//           .then(data => console.log(data))
//           .catch(error => throw error);


const pintarDatos = async () =>{

    const datos = await fetchUrl(url);
    const lista = document.getElementById('lista');
    datos.forEach(elemento =>{
        let id = elemento.id;
        let title = elemento.title;
        let body = elemento.body;

        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.textContent = title;
        h2.classList.add('blue-title');
        p.textContent = body;
        li.setAttribute('id',id);
        
        li.appendChild(h2);
        li.appendChild(p);

        lista.appendChild(li);



    })
}

window.addEventListener('load', pintarDatos);

