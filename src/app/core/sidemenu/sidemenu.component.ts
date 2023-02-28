import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'app/shared/interface/menu.interface';
import { menus, menus2, menus3, menus4, menus5 } from './menu-element';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
    private _router!: Router;
    private _activatedRoute!: ActivatedRoute;

    public menus: Menu[] = [...menus];
    public menus2: Menu[] = [...menus2];
    public menus3: Menu[] = [...menus3];
    public menus4: Menu[] = [...menus4];
    public menus5: Menu[] = [...menus5];

    constructor(router: Router, activatedRoute: ActivatedRoute) {
        this._router = router;
        this._activatedRoute = activatedRoute;

    }

    ngOnInit() {
        let temp: any[] = this._router.url.split('/');
        let currentMenu = temp[temp.indexOf('auth') + 1];
        this.setActiveMenu(this.getListByMenu(currentMenu), currentMenu);
    }

    setActiveMenu(initMenus: Menu[], active: string) {
        this.menus = initMenus.map(menu => {
            if (active === 'dashboard' && menu.name === 'home') {
                menu.opened = true;
                return menu;
            }
            if (menu.name === active) menu.opened = true;
            return menu;
        })
    }

    changeCurrentMenu(value: string) {
        //this.setActiveMenu([...menus], value);
    }

    getListByMenu(value: string) {
        if (value === 'dashboard') return [...menus];
        if (menus.find(menu => menu.name === value)) return menus;
        if (menus2.find(menu => menu.name === value)) return menus2;
        if (menus3.find(menu => menu.name === value)) return menus3;
        if (menus4.find(menu => menu.name === value)) return menus4;
        if (menus5.find(menu => menu.name === value)) return menus5;

        return [];
    }
}
