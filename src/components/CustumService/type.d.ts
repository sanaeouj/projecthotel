interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
  }
  
  interface IStateServices {
    services: Service[];
  }