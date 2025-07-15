export interface Aircraft {
  type: string;
  icao_type: string;
  manufacturer: string;
  mode_s: string;
  registration: string;
  registered_owner: string;
  registered_owner_country_name: string;
  url_photo: string | null;
}
