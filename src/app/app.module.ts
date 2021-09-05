import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { LeftpanelComponent } from './components/home/leftpanel/leftpanel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { DealsComponent } from './components/deals/deals.component';
import { BabycareComponent } from './components/products/babycare/babycare.component';
import { SkincareComponent } from './components/products/skincare/skincare.component';
import { WomencareComponent } from './components/products/womencare/womencare.component';
import { CovidEssentialsComponent } from './components/products/covid-essentials/covid-essentials.component';
import { HealthDevicesComponent } from './components/products/health-devices/health-devices.component';
import { AyurvedaComponent } from './components/products/ayurveda/ayurveda.component';
import { PersonalcareComponent } from './components/products/personalcare/personalcare.component';
import { HealthNutritionComponent } from './components/products/health-nutrition/health-nutrition.component';
import { DiabetescareComponent } from './components/products/diabetescare/diabetescare.component';
import { CardiaccareComponent } from './components/products/cardiaccare/cardiaccare.component';
import { PainreliefComponent } from './components/products/painrelief/painrelief.component';
import { WellnessComponent } from './components/products/wellness/wellness.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { ProductsService } from './services/products.service';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductQuantityAddComponent } from './components/product-quantity-add/product-quantity-add.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftpanelComponent,
    AboutusComponent,
    ContactusComponent,
    ProductsComponent,
    ViewproductsComponent,
    DealsComponent,
    BabycareComponent,
    SkincareComponent,
    WomencareComponent,
    CovidEssentialsComponent,
    HealthDevicesComponent,
    AyurvedaComponent,
    PersonalcareComponent,
    HealthNutritionComponent,
    DiabetescareComponent,
    CardiaccareComponent,
    PainreliefComponent,
    WellnessComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CategoryComponent,
    CompanyComponent,
    AdminComponent,
    CategoryAddComponent,
    CompanyAddComponent,
    ProductsAddComponent,
    ViewSingleProductComponent,
    ProductDetailsComponent,
    AdminportalComponent,
    ProductAddComponent,
    ProductQuantityComponent,
    ProductQuantityAddComponent,
    TransactionComponent,
    TransactionAddComponent
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    CompanyService,
    AdminService,
    ProductsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
