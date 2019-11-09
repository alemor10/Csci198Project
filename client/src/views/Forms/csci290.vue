<template>

  <v-container>
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading black--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 290 Graduate Independent Study</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for an Undergraduate Independent Study.
      Upon approval from your Supervising Instructor and the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
    <v-card>
    <v-form v-model="valid">
        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="15"
            label="First name"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="15"
            label="Last name"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="studentID"
          :rules="numberRules"
          label="Student ID"
          required
        >
        </v-text-field>
        </v-col>
        </v-row>
        <v-row>

        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="studentEmail"
          :rules="nameRules"
          :counter="15"
          label="Student Email"
          required
        >
        </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="subject"
          :counter="15"
          label="Course Subject"
          required
        >
        </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>

        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>                    
        </v-row>
      <v-divider></v-divider>
      <h4> 1. Check below which sense the proposed independent study project conforms to Item 1 of the regulations for independent study. </h4>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        <h4> 2. Describe briefly the nature of the independent study project to be undertaken and, if possible at this time, the title of the paper. </h4>
        <v-text-field
            v-model="description"
            :counter="500"
            label="enter text here"
            loader-height="10"
            required
        >
        </v-text-field>
        <h4> 3.Are you below a 3.0 GPA? </h4>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-form>
    </v-card>
</v-container>

</template>