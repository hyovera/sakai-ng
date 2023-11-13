import { Component } from '@angular/core';
import { LoadingService } from '../../service/LoadingService';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  loading$ = this.loadingService.loading$;
  

constructor(private loadingService: LoadingService) {}

  ngOnInit() {}

}
