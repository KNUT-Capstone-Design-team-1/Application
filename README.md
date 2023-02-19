# Depencies

* android/gradle.properties
```
android.useAndroidX=true
android.enableJetifier=true

FLIPPER_VERSION=0.75.1
org.gradle.jvmargs=-Xmx2048m
```

* res/config.json
```
{
  "mainServerAddress": "input your server ip address"
}
```

# Execute
```
npm install --legacy peer deps
react-native run-android
```