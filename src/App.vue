<template>
  <div class="bg-[#F0F0F0] h-screen">
    <div>
      <div>
        <label for="day">DAY</label>
        <input
          type="number"
          name="day"
          placeholder="DD"
          v-model="day"
          @input="getDayError"
        />
      </div>
      <div v-if="dayError">
        <p>Must be a valid day</p>
      </div>
      <div>
        <label for="month">MONTH</label>
        <input
          type="number"
          name="month"
          placeholder="MM"
          v-model="month"
          @input="getMonthError"
        />
      </div>
      <div v-if="monthError">
        <p>Must be a valid month</p>
      </div>
      <div>
        <label for="YEAR">YEAR</label>
        <input
          type="number"
          name="year"
          placeholder="YYYY"
          v-model="year"
          @input="getYearError"
        />
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
      dayError: false,
      monthError: false,
      yearError: false,
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
  methods: {
    calculateAge() {
      const birthDate = new Date(this.year, this.month - 1, this.day);
      if (
        (this.day !== null && this.month !== null && this.year !== null) ||
        !this.dayError ||
        !this.monthError ||
        !this.yearError
      ) {
        this.ageDays = this.today.getDate() - birthDate.getDate();
        this.ageMonths = this.today.getMonth() - birthDate.getMonth();
        this.ageYears = this.today.getFullYear() - birthDate.getFullYear();
      }
      if (
        this.day === "" ||
        this.month === "" ||
        this.year === "" ||
        this.dayError ||
        this.monthError ||
        this.yearError
      ) {
        this.ageDays = "--";
        this.ageMonths = "--";
        this.ageYears = "--";
      }
    },
    getDayError() {
      if (this.day <= 0 || this.day > 31) {
        this.dayError = true;
      } else {
        this.dayError = false;
      }
    },
    getMonthError() {
      if (this.month <= 0 || this.month > 12) {
        this.monthError = true;
      } else {
        this.monthError = false;
      }
    },
    getYearError() {
      if (this.year <= 0 || this.year > this.today.getFullYear()) {
        this.yearError = true;
      } else {
        this.yearError = false;
      }
    },
  },
};
</script>
