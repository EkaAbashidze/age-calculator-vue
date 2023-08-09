<template>
  <div class="bg-[#F0F0F0] h-screen">
    <div>
      <div>
        <label for="day">DAY</label>
        <input type="number" name="day" placeholder="DD" v-model="day" />
      </div>
      <div v-if="dayError">
        <p>Must be a valid day</p>
      </div>
      <div>
        <label for="month">MONTH</label>
        <input type="number" name="month" placeholder="MM" v-model="month" />
      </div>
      <div v-if="monthError">
        <p>Must be a valid month</p>
      </div>
      <div>
        <label for="YEAR">YEAR</label>
        <input type="number" name="year" placeholder="YYYY" v-model="year" />
      </div>
      <div v-if="yearError">
        <p>Must be in the past</p>
      </div>
    </div>
    <div>
      <h1>{{ ageDays }} days</h1>
      <h1>{{ ageMonths }} months</h1>
      <h1>{{ ageYears }} years</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: "",
      month: "",
      year: "",
      ageDays: "--",
      ageMonths: "--",
      ageYears: "--",
      today: new Date(),
    };
  },
  watch: {
    day: "calculateAge",
    month: "calculateAge",
    year: "calculateAge",
    dayError: "calculateAge",
    monthError: "calculateAge",
    yearError: "calculateAge",
  },
  computed: {
    dayError() {
      return this.day !== "" && (this.day <= 0 || this.day > 31);
    },
    monthError() {
      return this.month !== "" && (this.month <= 0 || this.month > 12);
    },
    yearError() {
      return (
        this.year !== "" &&
        (this.year <= 0 || this.year > this.today.getFullYear())
      );
    },
  },
  methods: {
    calculateAge() {
      const birthDate = new Date(this.year, this.month - 1, this.day);

      const isValidInput =
        this.day !== "" && this.month !== "" && this.year !== "";

      const noErrors = !this.dayError && !this.monthError && !this.yearError;

      if (isValidInput && noErrors) {
        this.ageDays = this.today.getDate() - birthDate.getDate();
        this.ageMonths = this.today.getMonth() - birthDate.getMonth();
        this.ageYears = this.today.getFullYear() - birthDate.getFullYear();
      } else {
        this.ageDays = "--";
        this.ageMonths = "--";
        this.ageYears = "--";
      }
    },
  },
};
</script>
