export interface CapPricesData {
  Tram?: TramOrBusEntity[] | null;
  Bus?: TramOrBusEntity[] | null;
}
export interface TramOrBusEntity {
  Company: string;
  Description?: string | null;
  Items: CapInfo[];
}
export interface CapInfo {
  Period: string;
  CapName: string;
  Area: string;
  AreaLink: string;
  Price: string;
  ChildPrice: string;
}
