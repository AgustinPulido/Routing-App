import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RandomUserService{

    usuarios: any;

    constructor(
        private http: HttpClient,
    ){}

    getUsers() {
        return this.http.get("https://randomuser.me/api/?results=20").subscribe((users: any) => {
            this.usuarios = users.results;
            console.log(users.results);
        })
    }
}