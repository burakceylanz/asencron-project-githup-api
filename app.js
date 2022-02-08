// Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("lastSearch");
const github = new GitHub();
const ui = new UI();

eventListeners();

function eventListeners() {

githubForm.addEventListener("submit", getData);
clearLastUsers.addEventListener("click", clearAllSearced);
lastUsers.addEventListener("DOMContentLoaded", getAllSearced);  //Burada son aramaları sayfa yenilendikçe storage'den alıp sürekli sayfaya yazdırıyoruz

}

function getData(e) {
    let username = nameInput.value.trim(); // trim boşlukları okumaması için

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin");
    }
    else {
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                
                ui.showError("Kullanıcı Bulunamadı");

            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                

                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }

    e.preventDefault(); // sayfamızın yenilenmesini önlemek için
    ui.clearInput(); // Her araya bastığımızda ınput temizlenmesi
}

function clearAllSearced(){
    // Tüm arananları temizle 
 
}

function getAllSearced(){
    // Arananları Storage'den alıp ui ekleme
    
    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    
    users.forEach(user => {
        result += `<li class="list-group-item">${users}</li>`;

    });

    lastUsers.innerHTML = result;
    if(users.indexOf(username) === -1) {
        //  <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> --> bunu ekleyince daha önce arattıklarımızı ui'ye eklemiş olacağız.
        
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = username;
        
        this.lastUsers.appendChild(li);
    }
    function clearAllSearched(){
        if(confirm("Emin misiniz?")) {
            Storage.clearAllSearchedUsersFromStorage();  // storagedan temizleme
            
            ui.clearAllSearcedFromUI();
        
        } }
}