import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturasComponent } from './facturas.component';
import { FacturaService } from '../../Services/factura.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FacturasComponent', () => {
  let component: FacturasComponent;
  let fixture: ComponentFixture<FacturasComponent>;
  let facturaServiceMock: any;
  let matSnackBarMock: any;
  let routerMock: any;

  beforeEach(async () => {
    facturaServiceMock = {
      getFactura: jasmine.createSpy('getFactura').and.returnValue(of([])),
      addFactura: jasmine.createSpy('addFactura').and.returnValue(of({}))
    };

    matSnackBarMock = {
      open: jasmine.createSpy('open')
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      declarations: [ FacturasComponent ],
      imports: [
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: FacturaService, useValue: facturaServiceMock },
        { provide: MatSnackBar, useValue: matSnackBarMock },
        { provide: Router, useValue: routerMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with sorted facturas', () => {
    expect(facturaServiceMock.getFactura).toHaveBeenCalled();
    expect(component.facturas).toEqual([]);
  });

  it('should filter data source', () => {
    component.dataSource = {
      filter: '',
      paginator: {
        firstPage: jasmine.createSpy('firstPage')
      }
    } as any;
    const event = {
      target: {
        value: 'test'
      }
    } as any;
    component.applyFilter(event);
    expect(component.dataSource.filter).toBe('test');
    expect(component.dataSource.paginator!.firstPage).toHaveBeenCalled();
  });

  it('should show snackbar and navigate', () => {
    component.showSnackbar('Test message');
    expect(matSnackBarMock.open).toHaveBeenCalledWith('Test message', 'done', jasmine.any(Object));
    expect(routerMock.navigate).toHaveBeenCalledWith(['/facturas'], { queryParams: { refresh: jasmine.any(Number) } });
  });

  it('should create a factura', () => {
    component.formularioFactura.setValue({
      name: 'Test Name',
      profesion: 'Test Profesion',
      email: 'test@example.com',
      birthdate: '2000-01-01',
      city: 'Test City',
      number: '1234567890'
    });
    component.fnFacturasCreado();
    expect(facturaServiceMock.addFactura).toHaveBeenCalledWith(component.currentFactura);
    expect(matSnackBarMock.open).toHaveBeenCalledWith('Factura creado!', 'done', jasmine.any(Object));
    expect(component.facturas).toEqual([]);
  });

  it('should cancel factura creation', () => {
    component.fnCancelar();
    expect(component.crearFactura).toBe(false);
    expect(component.formularioFactura.valid).toBe(false);
  });

  it('should open form to create factura', () => {
    component.fnCrearFacturas();
    expect(component.crearFactura).toBe(true);
  });
});
