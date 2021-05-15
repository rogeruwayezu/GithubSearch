import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reposDate'
})
export class ReposDatePipe implements PipeTransform {

  transform(value: any): number {
    let today: any = new Date();
    let valueWithTime: any = new Date(value);
    console.log(valueWithTime)
    let todayWithTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds());
    var dateDifference = Math.round(Math.abs(todayWithTime - valueWithTime));
    console.log(dateDifference);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;

    const d = Math.floor(dateDifferenceSeconds / secondsInDay);

    dateDifferenceSeconds -= d * 3600 * 24;

    const h = Math.floor(dateDifferenceSeconds / 3600);

    dateDifferenceSeconds -= h * 3600;

    const m = Math.floor(dateDifferenceSeconds / 60);

    dateDifferenceSeconds -= m * 60;

    const tmp: any = [];

    (d) && tmp.push(d + 'd');

    (d || h) && tmp.push(h + 'h');

    (d || h || m) && tmp.push(m + 'm');

    tmp.push(dateDifferenceSeconds + 's');

    return tmp.join('');

  }


}
