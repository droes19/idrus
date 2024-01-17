
import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

// loadManifest('assets/mf.manifest.json')
// 	.catch((err) => console.error('Error loading remote entries', err))
// 	.then(() => import('./bootstrap'))
// 	.catch((err) => console.error(err));

// Promise.all([
// 	loadRemoteEntry({
// 		type: 'module',
// 		remoteEntry: `http://${environment.mfe.angular}/remoteEntry.js`,
// 		// remoteEntry: `http://localhost:4202/remoteEntry.js`,
// 	})
// ])
// 	.catch(err => console.error(err))
// 	.then(_ => import('./bootstrap'))
// 	.catch(err => console.error(err));

Promise.all(loadRemoteEntryFromEnv())
	.catch(err => console.error(err))
	.then(_ => import('./bootstrap'))
	.catch(err => console.error(err));

function loadRemoteEntryFromEnv() {
	let listMfe = environment.mfe;
	let res: any[] = [];
	listMfe.forEach((x) => {
		if (x.remoteType === "module") {
			res.push(loadRemoteEntry({
				type: 'module',
				remoteEntry: x.url + "/" + x.remoteEntry
			}));
		}
	})
	return res
}