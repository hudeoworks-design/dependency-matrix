import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCurrentTheme,
  selectCurrentPalette,
  setColorPalette,
  setTheme,
  ColorPalettes,
  ThemeModes
} from './store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme$: Observable<string>;
  private currentPalette$: Observable<string>;


  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.currentTheme$.subscribe((theme) => this.applyTheme(theme));
    this.currentPalette$ = this.store.select(selectCurrentPalette);
    this.currentPalette$.subscribe((palette) => this.applyPalette(palette));
  }
  applyPalette(palette: string): void {
    const body = this.document.body;
    this.renderer.setAttribute(body, 'theme', palette);
  }

  private applyTheme(theme: string): void {
    const body = this.document.body;
    Array.from(body.classList).forEach(className => {
      if (className) {
        this.renderer.removeClass(body, className);
      }
  });

    // Add the new theme class
    this.renderer.addClass(body, theme);
  }

  setTheme(theme: ThemeModes): void {
    this.store.dispatch(setTheme({ theme }));
  }

  setColorPalette(palette: ColorPalettes): void {
    this.store.dispatch(setColorPalette({ palette }));
  }
}
