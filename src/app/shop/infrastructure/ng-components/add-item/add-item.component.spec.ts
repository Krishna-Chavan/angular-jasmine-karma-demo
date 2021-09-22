import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { AddItemComponent } from './add-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddItemComponent', () => {
   let component: AddItemComponent;
   let fixture: ComponentFixture<AddItemComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AddItemComponent],
         imports: [FormsModule, ReactiveFormsModule]
      })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AddItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('form should be invalid', () => {
      component.form.controls['name'].setValue('');
      component.form.controls['description'].setValue('');
      component.form.controls['price'].setValue('');
      expect(component.form.valid).toBeFalsy();
   });
   it('form should be valid', () => {
      component.form.controls['name'].setValue('foo');
      component.form.controls['description'].setValue('bar');
      component.form.controls['price'].setValue('33');
      expect(component.form.valid).toBeTruthy();
   });
   it('button save should call the saveItem method???', () => {
      // Jasmine feature that allows dynamically intercepting the calls to a function
      spyOn(component, 'saveItem');
      let saveItemButton = fixture.debugElement.query(By.css('button')).nativeElement;
      saveItemButton.click();
      expect(component.saveItem).toHaveBeenCalledTimes(0);
      //expect(saveItemButton.enabled).toBeFalsy();
      //expect(saveItemButton.disabled).toBeTruthy();
   });
   it('button save should be enabled', () => {
      let saveItemButton = fixture.debugElement.query(By.css('button')).nativeElement;
      spyOn(component, 'saveItem');
      
      component.form.controls['name'].setValue('foo');
      component.form.controls['description'].setValue('bar');
      component.form.controls['price'].setValue('33');
      fixture.detectChanges();

      saveItemButton.click();
      expect(component.saveItem).toHaveBeenCalledTimes(1);
   });
   
});
