const Getresponse = () => {
    const Nama = document.getElementById("Nama").value;
    const Peran = document.getElementById("Peran").value;
    const resp = document.getElementById("resp");
    const container = document.getElementById("container");
    const body = document.getElementById("body");
    const errorresp = document.getElementById("errorresp");

    if (!Nama) {
        errorresp.style.color = "red";
        errorresp.innerHTML = "Nama harus diisi!";
        return;
    }

    if (!Peran) {
        errorresp.style.color = "red";
        errorresp.innerHTML = `Halo ${Nama}, Pilih peranmu untuk memulai game!`;
        return;
    }

    resp.style.color = "black";
    container.style.animation = "hideDiv 0.3s ease-in-out";
    setTimeout(() => {
        container.style.display = "none";
    },300)
    body.style.animation = "normalbody 1s ease-in-out";
    resp.innerHTML = `<p style="font-weight: 600;">Selamat datang di Dunia Proxytia, ${Nama}</p><br>`;

    setTimeout(() => {
        body.style.animation = "centerbody 1s ease-in-out";
        resp.style.animation = "showDiv 0.5s ease-in-out";
        resp.style.display = "block";
        if (Peran === "Ksatria") {
            resp.innerHTML += `<p>Halo Ksatria ${Nama}, kamu dapat menyerang dengan senjatamu!</p>`;
        } else if (Peran === "Tabib") {
            resp.innerHTML += `<p>Halo Tabib ${Nama}, kamu akan membantu temanmu yang terluka.</p>`;
        } else if (Peran === "Penyihir") {
            resp.innerHTML += `<p>Halo Penyihir ${Nama}, ciptakan keajaiban yang membantu kemenanganmu!</p>`;
        }
    }, 1000);
}
