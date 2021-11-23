function add_user(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    if(player1_name == "")
    {
        window.alert("please enter player 1 name");
    }
    else if(player2_name == "")
    {
        window.alert("please enter player 2 name")
    }
    else
    {
        window.location = "game_page.html";
    }
}