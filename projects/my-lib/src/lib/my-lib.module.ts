// my-lib.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyLibService } from './my-lib.service';

@NgModule({
  imports: [HttpClientModule], 
  providers: [MyLibService], 
})
export class MyLibModule {}
