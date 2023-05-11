import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    EmplistComponent,
    EmpdetailComponent,
    EmpupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
