<template>
  <div>
    <h3>four</h3>
  </div>
</template>

<script>
  export default {
    name: "Four",
    methods: {
      getDashboard(){
        this.axios.get('http://10.29.42.161:8080/chart/dashboard',
          {
            params: {
              chartIds: '10002,10003,10004,10017,10018,10021,10037,10039,10043,6,10001,10040'
            }
          }
        ).then(response => {
          console.log(response);
        });
      },
      getDashboardOne(){
        this.axios.get('http://10.29.42.161:8080/chart/dashboard?chartIds=10003,10004,10017,10018,10021,10037,10039,10043,6,10001,10040')
          .then(response => {
            console.log(response);
          });
      },
      getDashboardTwo(){
        this.axios({
          method: 'get',
          url:'http://10.29.42.161:8080/chart/dashboard',
          params: {
            chartIds: '10004,10017,10018,10021,10037,10039,10043,6,10001,10040'
          }
        }).then(response => {
          console.log(response);
        });
      },
      getDashboardTwoHalf(){
        this.axios({
          method: 'get',
          url:'http://10.29.42.161:8080/chart/dashboard',
          data: {
            chartIds: '10004,10017,10018,10021,10037,10039,10043,6,10001,10040'
          }
        }).then(response => {
          console.log(response);
        });
      },
      getDashboardThree(){
        this.axios({
          method: 'get',
          url:'http://10.29.42.161:8080/chart/dashboard',
          data: {
            chartIds: '10004,10017,10018,10021,10037,10039,10043,6,10001,10040'
          }
        }).then(response => {
          console.log(response);
        });
      },

      //post
      updateDashboard(){
        this.axios.post('http://10.29.42.161:8080/chart/dashboard',{
          chartIds: "10002,10003,10018,10006",
          dashboardName: "OS1",
          description: null,
          id: 10101,
          layout: "layout4_2_2",
          modifier: "lilysong@cisco.com"
        }).then(response => {
          console.log(response);
        });
      },
      updateDashboardZero(){
        this.axios.post('http://10.29.42.161:8080/chart/dashboard',{
          data: {
            chartIds: "10002,10003,10018,10006",
            dashboardName: "OS1",
            description: null,
            id: 10101,
            layout: "layout4_2_2",
            modifier: "lilysong@cisco.com"
          }
        }).then(response => {
          console.log(response);
        });
      },
      updateDashboardOne(){
        this.axios({
          method: 'post',
          url: 'http://10.29.42.161:8080/chart/dashboard',
          params: {
            chartIds: "10002,10003,10018,10006",
            dashboardName: "OS1",
            description: null,
            id: 10101,
            layout: "layout4_2_2",
            modifier: "lilysong@cisco.com"
          }
        }).then(response => {
          console.log(response);
        });
      },
      updateDashboardTwo(){
        this.axios({
          method: 'post',
          url: 'http://10.29.42.161:8080/chart/dashboard',
          data: {
            chartIds: "10002,10003,10018,10006",
            dashboardName: "OS2",
            description: null,
            id: 10101,
            layout: "layout4_2_2",
            modifier: "lilysong@cisco.com"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response);
        });
      }
    },
    mounted(){
      //this.getDashboard();
      //this.getDashboardOne();
      //this.getDashboardTwo();
      //this.getDashboardTwoHalf();
      //this.getDashboardThree();
      //this.updateDashboard();
      //this.updateDashboardZero();
      //this.updateDashboardOne();
      this.updateDashboardTwo();
    }
  }
</script>

<style scoped>

</style>