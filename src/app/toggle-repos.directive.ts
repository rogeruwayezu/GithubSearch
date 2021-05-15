import { Directive, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appToggleRepos]'
})
export class ToggleReposDirective {

  constructor() { }
   isCollapsed = true;
  @HostBinding("class.collapsed")
  get collapsed() {
    return this.isCollapsed;
  }
  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed
  }

}
