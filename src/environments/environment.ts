// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rootApiEndpoint: 'https://localhost:44394',
  authApiEndpoint: 'https://localhost:44394/api/account',
  apiEndpoint: 'https://localhost:44394/api',
  VAPID_PUBLIC_KEY: 'BNmXyw15axbl9tOAKz0ybCcfui-w4WiILSO_PRvU2qF0gdB56C0jRieaFSncZnpaulsyl0c3VUsRCyOR4foil50'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
