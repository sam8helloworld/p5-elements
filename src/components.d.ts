/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface P5Toggle {
    'checked': boolean;
  }
  interface P5ToggleAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'onChange'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'P5Toggle': Components.P5Toggle;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'p5-toggle': Components.P5ToggleAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLP5ToggleElement extends Components.P5Toggle, HTMLStencilElement {}
  var HTMLP5ToggleElement: {
    prototype: HTMLP5ToggleElement;
    new (): HTMLP5ToggleElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'p5-toggle': HTMLP5ToggleElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'p5-toggle': HTMLP5ToggleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
