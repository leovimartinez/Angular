import {Component} from '@angular/core';

@Component({
    selector: 'videos',
    templateUrl: './videos.component.html'
})

export class VideosComponent{
    public categoria;
    public color;

    constructor(){
        this.categoria = '';
        this.color = '';

    }
}