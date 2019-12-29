<template>
  <v-data-table
    :headers="headers"
    :items="this.$store.getters.user.approvedForms"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Student Forms</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card
            class="mx-auto"
          >
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container class="px-0" fluid>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.firstName" label="Student First Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.lastName" label="Student Last Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.studentID" label="Student Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.studentEmail" label="Student Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.Semester" label="Semester"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-if="editedItem.Year" v-model="editedItem.Year" label="Year"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly  v-if="editedItem.Subject" v-model="editedItem.Subject" label="Subject"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly  v-if="editedItem.ProjectTitle" v-model="editedItem.ProjectTitle" label="Project Title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.Units" label="Units"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-model="editedItem.SupervisingInstructor" label="Supervising Instructor"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea readonly v-if="editedItem.Reason" v-model="editedItem.Reason" label="Reason"></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea readonly v-model="editedItem.Description" label="Description"></v-textarea>
                  </v-col>                 
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-if="editedItem.GPA" v-model="editedItem.GPA" label="Below a 3.0 GPA?"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-if="editedItem.StartDate" v-model="editedItem.StartDate" label="Start Date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field readonly v-if="editedItem.EndDate" v-model="editedItem.EndDate" label="End Date"></v-text-field>
                  </v-col>
                  
                </v-row>
                <v-text-field v-model = "DataForm.permissionNumber" label = "Permission number for Student"> </v-text-field>
                <v-switch 
                  v-model="checkbox"
                  color="red"
                  :label="`Approve Form?: ${checkbox.toString()}`"
                ></v-switch >
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn @click="save" :disabled="!checkbox">submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="viewItem(item)"
      >
        search
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex";
  export default {
    data: () => ({
      checkbox:false,
      forms: 'this.$store.getters.user.studentForms',
      items: ['True','False'],
      dialog: false,
      headers: [
        {
          text: 'FormID',
          align: 'left',
          sortable: false,
          value: 'formID',
        },
          { text: 'Student ID', value: 'studentID' },
          { text: 'Supervising Instructor ', value: 'SupervisingInstructor'},
          { text: 'Student Last Name', value: 'firstName'},
          { text: 'Student First Name', value: 'lastName'},
          { text: 'Student Email', value: 'studentEmail'},
          { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        formType:'',
        studentUsername:'',
        firstName:'',
        lastName:'',
        studentID:'',
        studentEmail:'',
        SupervisingInstructor:'',
        Subject:'',
        Description:'', 
        Semester: '',
        Year: '',
        Units: '',
        Reason:'',
        GPA:'',
        ProjectTitle:'',
        years:'',
        StartDate: '',
        EndDate: '',
      },
      DataForm: {
        studentname: '',
        formType:'',
        permissionNumber: ''
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      ...mapActions(["SecApprove198","SecApprove298","SecApprove190", "SecApprove190", ]), 
      initialize () {

      },
      editItem (item) {
        this.editedIndex = this.forms.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.DataForm.studentname =  item.studentUsername
        this.DataForm.formType = item.formType
        this.dialog = true
      },
      viewItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        var check = this.DataForm.formType
        window.console.log(check)
        if(check == "190")
        {
            window.console.log(this.DataForm)
            this.SecApprove190(this.DataForm)
            .then(res => {
              if (res.data.success) {
                   this.$router.push("/Dashboard");
            }
        })
        .catch(err => {
          this.errormsg = err
        });
        }
        else if(check=="290")
        {
          this.SecApprove290(this.DataForm)
            .then(res => {
              if (res.data.success) {
                   this.$router.push("/Dashboard");
              }
          })
          .catch(err => {
            this.errormsg = err
          });
        }
        else if(check=="198")
        {
          this.SecApprove198(this.DataForm)
            .then(res => {
              if (res.data.success) {
                   this.$router.push("/Dashboard");
              }
          })
          .catch(err => {
            this.errormsg = err
          });
        }
        else if(check=="298")
        {
          this.SecApprove298(this.DataForm)
            .then(res => {
              if (res.data.success) {
                   this.$router.push("/Dashboard");
              }
          })
          .catch(err => {
            this.errormsg = err
          });
        }
      },
    },
  }
</script>