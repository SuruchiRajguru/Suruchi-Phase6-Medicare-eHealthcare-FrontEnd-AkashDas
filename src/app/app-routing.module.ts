import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryComponent } from './components/category/category.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DealsComponent } from './components/deals/deals.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductQuantityAddComponent } from './components/product-quantity-add/product-quantity-add.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { AyurvedaComponent } from './components/products/ayurveda/ayurveda.component';
import { BabycareComponent } from './components/products/babycare/babycare.component';
import { CardiaccareComponent } from './components/products/cardiaccare/cardiaccare.component';
import { CovidEssentialsComponent } from './components/products/covid-essentials/covid-essentials.component';
import { DiabetescareComponent } from './components/products/diabetescare/diabetescare.component';
import { HealthDevicesComponent } from './components/products/health-devices/health-devices.component';
import { HealthNutritionComponent } from './components/products/health-nutrition/health-nutrition.component';
import { PainreliefComponent } from './components/products/painrelief/painrelief.component';
import { PersonalcareComponent } from './components/products/personalcare/personalcare.component';

import { ProductsComponent } from './components/products/products.component';
import { SkincareComponent } from './components/products/skincare/skincare.component';
import { WellnessComponent } from './components/products/wellness/wellness.component';
import { WomencareComponent } from './components/products/womencare/womencare.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';


const routes: Routes = [
 // {path:'',redirectTo:'home',pathMatch:'Full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'viewProduct/:quantityId/:productId',component:ViewSingleProductComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'viewproducts',component:ViewproductsComponent},
    {path:'babycare',component:BabycareComponent},
    {path:'skincare',component:SkincareComponent},
    {path:'womencare',component:WomencareComponent},
    {path:'covid-essentials',component:CovidEssentialsComponent},
    {path:'health-devices',component:HealthDevicesComponent},
    {path:'ayurveda',component:AyurvedaComponent},
    {path:'personalcare',component:PersonalcareComponent},
    {path:'health-nutrition',component:HealthNutritionComponent},
    {path:'diabetescare',component:DiabetescareComponent},
    {path:'cardiaccare',component:CardiaccareComponent},
    {path:'painrelief',component:PainreliefComponent},
    {path:'wellness',component:WellnessComponent}
  ]},
  {path:'deals',component:DealsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},  
  {path:'category',component:CategoryComponent},
  {path:'viewproducts',component:ViewproductsComponent},
  {path:'company',component:CompanyComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminportal',component:AdminportalComponent,children:[
    {path:'company',component:CompanyComponent},
    {path:'category',component:CategoryComponent},
    {path:'category-add',component:CategoryAddComponent},
    {path:'viewproducts',component:ViewproductsComponent},
   {path:'company-add',component:CompanyAddComponent},
    {path:'products-add',component:ProductsAddComponent},
    {path:'product-quantity',component:ProductQuantityComponent},
    {path:'product-quantity-add/:productId',component:ProductQuantityAddComponent}
    
  ]},
  {path:'view-single-product',component:ViewSingleProductComponent},
 {path:'transaction',component:TransactionComponent},
 {path:'transaction-add',component:TransactionAddComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
