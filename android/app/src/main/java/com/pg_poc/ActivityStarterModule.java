package com.pg_poc;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pg_poc.Dashboard;

class ActivityStarterModule extends ReactContextBaseJavaModule {

  ActivityStarterModule(ReactApplicationContext reactContext) {
      super(reactContext);
  }

  @Override
  public String getName() {
      return "ActivityStarter";
  }

  @ReactMethod
  void navigateToExample(@NonNull String path) {
      Context context = getCurrentActivity();
      if (context != null) {
          Intent intent = new Intent(context, Dashboard.class);
          context.startActivity(intent);
      }
  }

  @ReactMethod
  void dialNumber(@NonNull String number) {
      Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + number));
      getReactApplicationContext().startActivity(intent);
  }

  @ReactMethod
  void getActivityName(@NonNull Callback callback) {
      Activity activity = getCurrentActivity();
      if (activity != null) {
          callback.invoke(activity.getClass().getSimpleName());
      }
  }
}