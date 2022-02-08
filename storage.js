class Storage {
    static getSearchedUsersFromStorage(){
        // Tüm kullanıcıları alma
        let users;

        if(localStorage.getItem("searched") === null) {
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToStorage(username){
        // Kullanıcı Ekleme

        let users = this.getSearchedUsersFromStorage();

        // index of

        if(users.indexOf(username) === -1 ) {  // Burada username user içerisinde bulunursa bu sağlanmaz zaten.
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage(){
        // Kullanıcı Silme

        localStorage.removeItem("searched");
    }

}