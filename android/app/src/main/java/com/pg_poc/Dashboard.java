package com.pg_poc;

import android.content.Intent;
import android.database.Cursor;
import android.database.CursorIndexOutOfBoundsException;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.reactnativecommunity.asyncstorage.ReactDatabaseSupplier;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.util.Log;
import android.view.View;
import android.widget.TextView;

import java.util.Arrays;
import java.util.StringJoiner;

public class Dashboard extends AppCompatActivity {

    TextView txt;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        txt = findViewById(R.id.txt);
        read();
        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(view -> {
            Intent a = new Intent(Dashboard.this, MainActivity2.class);
            startActivity(a);
        });
    }


    void read() {
        Cursor catalystLocalStorage = null;
        SQLiteDatabase readableDatabase = null;

        try {
            readableDatabase = ReactDatabaseSupplier.getInstance(this.getApplicationContext()).getReadableDatabase();
            catalystLocalStorage = readableDatabase
                    .query("catalystLocalStorage", new String[]{"value"}, "key = ?", new String[] { "pg.access.token" }, null, null, null);
            final String [] value = catalystLocalStorage.getColumnNames();
            Log.d("mayur", ""+value.length);
            Log.d("mayur", ""+value[0]);
            try {
                if (catalystLocalStorage.moveToFirst()) {
                    String val = catalystLocalStorage.getString(catalystLocalStorage.getColumnIndex("value"));
                    Log.d("mayur", "" + val);
                }
            } catch (CursorIndexOutOfBoundsException ex) {
                ex.printStackTrace();
            }

            //txt.setText(value);
        } finally {
            if (catalystLocalStorage != null) {
                catalystLocalStorage.close();
            }

            if (readableDatabase != null) {
                readableDatabase.close();
            }
        }
    }

}
