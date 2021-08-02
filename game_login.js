function adduser(){
    player1_nm = document.getElementById("Pl@y3r 1").value;
    player2_nm = document.getElementById("Pl@y3r 2").value;
localStorage.setItem("player1_nm", player1_nm);
localStorage.setItem("player2_nm", player2_nm);
window.location = "game_page.html";                                                                                     

}

