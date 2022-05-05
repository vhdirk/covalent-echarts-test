import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageComponent } from "./page.component";
import { PageRoutingModule } from "./page.routing";
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentLineEchartsModule,
  ],
  declarations: [PageComponent],
})
export class PageModule { }
