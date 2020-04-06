<template>
  <v-app>
    <div style="width: 440px; margin: 30px;">
      <v-form ref="form" name="valid">
        <v-text-field name="name" required outlined />

        <v-text-field
          name="password"
          append-icon="mdi-eye"
          type="text"
          outlined
          depressed
        />

        <v-btn depressed color="error">
          ログイン
        </v-btn>
        <v-btn color="success">
          Success
        </v-btn>
        <v-btn color="error">
          Error
        </v-btn>
        <v-btn color="warning">
          Warning
        </v-btn>
        <v-btn color="info">
          Info
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import { createComponent } from '@vue/composition-api'

export default createComponent()
</script>
