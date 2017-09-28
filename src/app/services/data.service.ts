import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http, Response} from "@angular/http"
import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor (private http:Http) {

  }
  public getJsonData() : Observable<any> {
    return this.http.get("assets/data.json")
      .map((res: Response) => res.json());
  }
}