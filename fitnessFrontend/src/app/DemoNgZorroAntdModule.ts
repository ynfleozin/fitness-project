import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';


import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = Object.values(AllIcons);

@NgModule({
  imports: [
    NzIconModule.forChild(antDesignIcons),
  ],
  exports: [
    NzLayoutModule,
    NzAvatarModule,
    NzMenuModule,
    NzIconModule,
    NzFlexModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzTimePickerModule,
    NzCalendarModule,
    NzStatisticModule,
    NzGridModule
  ],
})
export class DemoNgZorroAntdModule {}
