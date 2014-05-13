ember-cli-ember-fire
====================

The following files have been modified from a stock ember-cli application created via `ember new`:

## index.html
The firebase.js script tag was added in the following spot:

```
 <script>
   window.ENV = {{ENV}};
 </script>
 <script src="https://cdn.firebase.com/js/client/1.0.6/firebase.js"></script>
 <script src="assets/<yourappname>.js"></script>
```

## bower.json
`"emberfire": "latest"` was added to the bower.json file at the end of the dependencies.

```
"dependencies": {
  .
  .
  .
  "ember-cli-shims": "stefanpenner/ember-cli-shims#0.0.1",
  "ember-load-initializers": "stefanpenner/ember-load-initializers#0.0.1",
  "emberfire": "latest"
}
```

## Brocfile.js
We added the import line for emberfire.js or it doesn't get included in the application js file.

```
// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');
app.import('vendor/emberfire/dist/emberfire.js');
```

## app/adapters/application.js
Created the adapters folder and the application.js file under it containing:

```
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://<yourfirebaseinstance>.firebaseio.com')
});
```

## Bootstrapping

```sh
git clone https://github.com/stefanpenner/ember-cli-ember-fire.git
cd ember-cli-ember-fire
npm i
bower i
ember server
```

Now you can set up your models/routes/etc...

Have fun.
