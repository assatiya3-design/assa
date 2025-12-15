// Animasi tombol hero
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {
    alert("Terima kasih! Tim kami akan segera menghubungi Anda 🚀");
});

// Efek navbar saat scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Validasi form kontak
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Harap isi semua field!");
    } else {
        alert("Pesan berhasil dikirim ✔️");
        form.reset();
    }
});
