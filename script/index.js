const btn = document.querySelector("#btn");
window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
async function getAdvice() {
    const advice = document.querySelector("#advice");
    try {
        const adId = document.querySelector("#advice-id");
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        advice.innerText = `${data.slip.advice}`;
        adId.innerText = `Advice #${data.slip.id}`;
    } catch (error) {
        advice.innerText = "Falha na requisição"; 
    }
}