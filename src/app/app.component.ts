import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  toggleNav():void{
    let $button = document.querySelector('.nav-toggle');
    let buttonClasses :string = $button.className;
    let $taskbar = document.querySelector('.taskbar');
    if(buttonClasses.indexOf('_shown') == -1){
      $button.classList.add('nav-toggle_shown');
      $taskbar.classList.add('taskbar_shown');
    }else{
        $button.classList.remove('nav-toggle_shown');
        $taskbar.classList.remove('taskbar_shown');
    }
  }
}
