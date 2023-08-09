<template>
  <div class="bg-[#F0F0F0] flex justify-center items-center h-screen flex-col">
    <div
      class="flex flex-col justify-center items-center bg-white rounded-t-[24px] rounded-bl-[24px] rounded-br-[100px] w-[343px] h-[486px]"
    >
      <div class="flex justify-center items-center gap-x-4">
        <div class="flex flex-col">
          <label for="day">DAY</label>
          <input
            type="number"
            name="day"
            placeholder="DD"
            v-model="day"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none"
          />
          <div v-if="dayError">
            <p>Must be a valid day</p>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="month">MONTH</label>
          <input
            type="number"
            name="month"
            placeholder="MM"
            v-model="month"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none"
          />
          <div v-if="monthError">
            <p>Must be a valid month</p>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="YEAR">YEAR</label>
          <input
            type="number"
            name="year"
            placeholder="YYYY"
            v-model="year"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none"
          />
          <div v-if="yearError">
            <p>Must be in the past</p>
          </div>
        </div>
      </div>
      <div>
        <h1>{{ age.days }} days</h1>
        <h1>{{ age.months }} months</h1>
        <h1>{{ age.years }} years</h1>
      </div>
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
      today: new Date(),
    };
  },
  computed: {
    age() {
      const birthDate = new Date(this.year, this.month - 1, this.day);

      const isValidInput =
        this.day !== "" && this.month !== "" && this.year !== "";

      const noErrors = !this.dayError && !this.monthError && !this.yearError;

      if (isValidInput && noErrors) {
        const days = this.today.getDate() - birthDate.getDate();
        const months = this.today.getMonth() - birthDate.getMonth();
        const years = this.today.getFullYear() - birthDate.getFullYear();

        return { days, months, years };
      } else {
        return { days: "--", months: "--", years: "--" };
      }
    },
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
};
</script>
