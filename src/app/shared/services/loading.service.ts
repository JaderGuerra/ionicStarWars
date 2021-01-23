import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  loading: any;

  constructor(public loadingCTL: LoadingController) {}

  async presentLoading() {
    this.loading = await this.loadingCTL.create({
      cssClass: "my-custom-class",
      message: "Cargando...",
    });
    return this.loading.present();
  }
}
