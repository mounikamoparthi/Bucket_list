import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BucketlistService } from './bucketlist.service';
import { UserBucketComponent } from './user-bucket/user-bucket.component';
import { ListBucketComponent } from './list-bucket/list-bucket.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    UserBucketComponent,
    ListBucketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [BucketlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
