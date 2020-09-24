import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServices {
  constructor(public http: HttpClient){}
  Web_Login(data){
    return this.http.post('http://localhost/pruebas_isac/api_login.php', data);
  }
  SignIn(data){
    return this.http.post('http://localhost/pruebas_isac/registro_usuario.php', data);
  }
}


