import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


const listUsuarios: Usuario[] = [
  {usuario: "jeco", nombre: 'Juan', apellido: "Jimenez", sexo: 'Masculino'},
  {usuario: "jdaven", nombre: 'Pedro', apellido: "Pueblo", sexo: 'Masculino'},
  {usuario: "mdrival", nombre: 'Pablo', apellido: "Paz", sexo: 'Masculino'},
  {usuario: "pasa2", nombre: 'David', apellido: "Rosas", sexo: 'Masculino'},
  {usuario: "2pasare", nombre: 'Jorge', apellido: "Laudo", sexo: 'Masculino'},
  {usuario: "jeco", nombre: 'Juan', apellido: "Jimenez", sexo: 'Masculino'},
  {usuario: "jdaven", nombre: 'Pedro', apellido: "Pueblo", sexo: 'Masculino'},
  {usuario: "mdrival", nombre: 'Pablo', apellido: "Paz", sexo: 'Masculino'},
  {usuario: "pasa2", nombre: 'David', apellido: "Rosas", sexo: 'Masculino'},
  {usuario: "2pasare", nombre: 'Jorge', apellido: "Laudo", sexo: 'Masculino'},
  {usuario: "jeco", nombre: 'Juan', apellido: "Jimenez", sexo: 'Masculino'},
  {usuario: "jdaven", nombre: 'Pedro', apellido: "Pueblo", sexo: 'Masculino'},
  {usuario: "mdrival", nombre: 'Pablo', apellido: "Paz", sexo: 'Masculino'},
  {usuario: "pasa2", nombre: 'David', apellido: "Rosas", sexo: 'Masculino'},
  {usuario: "2pasare", nombre: 'Jorge', apellido: "Laudo", sexo: 'Masculino'},
  {usuario: "jeco", nombre: 'Juan', apellido: "Jimenez", sexo: 'Masculino'},
  {usuario: "jdaven", nombre: 'Pedro', apellido: "Pueblo", sexo: 'Masculino'},
  {usuario: "mdrival", nombre: 'Pablo', apellido: "Paz", sexo: 'Masculino'},
  {usuario: "pasa2", nombre: 'David', apellido: "Rosas", sexo: 'Masculino'},
  {usuario: "xxxxxxx", nombre: 'Jorge', apellido: "Laudo", sexo: 'Masculino'}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(listUsuarios);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
