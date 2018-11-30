import { Component } from "@angular/core";
import { userService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { Router } from "@angular/router";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(
        private userService: userService,
        private router:Router) {

        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
}