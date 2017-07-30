/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const COME_BACK_TO_HOME = 'Volver a Katanga';

export const WE_ARE_IN_TROUBLES = 'Ha ocurrido un problema';

export const METERS_AROUND_ME_SELECTION_NOT_HAVE_BUS_STOPS = `${WE_ARE_IN_TROUBLES}, ` +
  'los metros que has seleccionado para encontrar paradas ' +
  'alrededor de tí no son suficientes y no hemos encontrado ninguna disponible en estos metros.';

export const GEOLOCALIZATION_HAS_ERRORS = `${WE_ARE_IN_TROUBLES}, ` +
  'Tu geolocalización no está soportada por esta ' +
  'navegación o no la has activado correctamente.';

const ERRORS = {
  ['METERS_AROUND_ME_SELECTION_NOT_HAVE_BUS_STOPS']: METERS_AROUND_ME_SELECTION_NOT_HAVE_BUS_STOPS,
  ['COME_BACK_TO_HOME']: COME_BACK_TO_HOME,
  ['GEOLOCATION_HAS_ERRORS']: GEOLOCALIZATION_HAS_ERRORS,
};

export default ERRORS
