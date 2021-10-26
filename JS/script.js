//btn pour "like" un produit
function likes_elemnt() {
    var likesbtns = document.getElementsByClassName("fa-heart");
    for (let i = 0; i < likesbtns.length; i++) {
        likesbtns[i].addEventListener("click", function (e) {
            e.target.style.zoom = 2;
            e.target.style.color = "red";
        });
    }
}

// btn pour supprimer un produit 
function delete_element() {
    var deletebtns = document.getElementsByClassName("fa-trash-alt");
    for (let i = 0; i < deletebtns.length; i++) {
        deletebtns[i].addEventListener("click", function (e) {
            e.target.parentElement.remove();
            Somme_prix()
        });
    }
}


 
