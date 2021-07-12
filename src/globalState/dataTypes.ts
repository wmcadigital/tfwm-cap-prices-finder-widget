export interface CapPricesData {
  Tram?: TramOrBusEntity[] | null;
  Bus?: TramOrBusEntity[] | null;
}
export interface TramOrBusEntity {
  Company: string;
  Items?: CapInfo[] | null;
}
export interface CapInfo {
  Period: string;
  'Cap name': string;
  Area: string;
  Price: string;
  'Child price': string;
}
