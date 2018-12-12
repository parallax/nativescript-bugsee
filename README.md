# Bugsee for NativeScript

This plugin adds Bugsee support to your NativeScript application. Record the last 30 seconds of your app before it crashes. Allow people to submit bugs by shaking or screenshotting your app.

![Demo GIF](https://github.com/parallax/nativescript-bugsee/raw/master/bugsee.gif)

## Installation

To install the plugin do:

```bash
tns plugin add nativescript-bugsee
```

## Usage

### iOS

Put this is your main application JS file:

```javascript
// Replace this with your actual token
Bugsee.launchWithToken('0000000-0000-0000-0000-00000000000')
```

### Android

This is a little trickier as it needs to extend the main Application class.

Create this file at `app/application.android.js`:

(Replace yourApplicationName with your app name, and the token with your Android token)

```javascript
/* global android com */
const superProto = android.app.Application.prototype
const Bugsee = com.bugsee.library.Bugsee

// the first parameter of the `extend` call defines the package and the name for the native *.JAVA file generated.
android.app.Application.extend('org.yourApplicationName.Application', {
  onCreate: function () {
    superProto.onCreate.call(this)
    // At this point modules have already been initialized
    Bugsee.launch(this, '0000000-0000-0000-0000-00000000000')
  },
  attachBaseContext: function (base) {
    superProto.attachBaseContext.call(this, base)
  }
})
```

In `app/App_Resources/Android/src/AndroidManifest` change from this:
```
<application android:name="com.tns.NativeScriptApplication"
```

to this - to match the application name above:

```
<application android:name="org.yourApplicationName.Application"
```



<!-- ## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. | -->

## License

Apache License Version 2.0, January 2004
