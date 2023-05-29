let alldivs = document.getElementById('alldivs')


const fetchData = async () => {
    await fetch("./data.json").then((response) => response.json()).then((data) => {
       data.map((value) => {
            alldivs.innerHTML += `
            <div class="div" style="background-color: ${value.background};">
                <div class="div1">
                    <img src="${value.icon}" alt="">
                    <p style="color: ${value.color};">${value.category}</p>
                </div>
                <div class="div2">
                    <p >${value.score}</p>
                    <p class="div2P2">/ 100</p>
                </div>
            </div>
            `
       })
    });
}

fetchData();