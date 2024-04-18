import { Component, ViewChild } from '@angular/core';
import { MaterialDto } from '../../Models/MaterialDto';
import { MaterialService } from '../../Services/material.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {

  // ANGULAR MATERIAL TABLE
  displayedColumns: string[] = ['name', 'cost', 'buyDate', 'supplierName', 'quantity', "options"];
  dataSource!: MatTableDataSource<MaterialDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  material: MaterialDto[] = [];
  constructor(private materialService: MaterialService) {
    this.materialService.getMaterial()
      .subscribe(material => {
        this.material = material.sort((a, b) => a.name.localeCompare(b.name));
        this.dataSource = new MatTableDataSource(this.material);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.material);
      });


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // showSnackbar(message: string): void {
  //   this.snackbar.open(message, 'done', {

  //   });
  //   const uniqueId = new Date().getTime(); // Genera un ID único basado en la marca de tiempo actual
  //   this.router.navigate(['/pacientes'], { queryParams: { refresh: uniqueId } });
  // }



}
