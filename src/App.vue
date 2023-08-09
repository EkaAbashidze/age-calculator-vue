<template>
  <div class="bg-[#F0F0F0] flex justify-center items-center h-screen flex-col">
    <div
      class="flex flex-col justify-center bg-white rounded-t-[24px] rounded-bl-[24px] rounded-br-[100px] w-[343px] h-[486px] py-[48px] px-[24px]"
    >
      <div class="flex justify-center items-center gap-x-4">
        <div class="flex flex-col gap-y-1">
          <label
            for="day"
            :class="{ 'text-red-600': dayError }"
            class="text-gray-700 font-poppins text-xs font-semibold tracking-widest uppercase"
            >DAY</label
          >
          <input
            type="number"
            name="day"
            placeholder="DD"
            v-model="day"
            :class="{ 'border-red-600': dayError }"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight"
          />
          <div v-if="dayError" class="text-red-600">
            <p>Must be a valid day</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-1">
          <label
            for="month"
            :class="{ 'border-red-600': monthError }"
            class="text-gray-700 font-poppins text-xs font-semibold tracking-widest uppercase"
            >MONTH</label
          >
          <input
            type="number"
            name="month"
            placeholder="MM"
            v-model="month"
            :class="{ 'border-red-600': monthError }"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight"
          />
          <div v-if="monthError" class="text-red-600">
            <p>Must be a valid month</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-1">
          <label
            for="YEAR"
            :class="{ 'border-red-600': yearError }"
            class="text-gray-700 font-poppins text-xs font-semibold tracking-widest uppercase"
            >YEAR</label
          >
          <input
            type="number"
            name="year"
            placeholder="YYYY"
            v-model="year"
            :class="{ 'border-red-600': yearError }"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight"
          />
          <div v-if="yearError" class="text-red-600">
            <p>Must be in the past</p>
          </div>
        </div>
      </div>
      <div
        class="h-[1px] bg-[#DCDCDC] w-full relative my-[64px] flex items-center justify-center"
      >
        <div
          class="w-[64px] h-[64px] bg-[#854DFF] rounded-full flex justify-center absolute"
        >
          <img src="./assets/icon-arrow.svg" alt="" class="w-[20px] h-auto" />
        </div>
      </div>

      <div class="">
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight"
        >
          <span class="text-purple-800">
            {{ age.years }}
          </span>
          years
        </h1>
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight"
        >
          <span class="text-purple-800">
            {{ age.months }}
          </span>
          months
        </h1>
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight"
        >
          <span class="text-purple-800"> {{ age.days }}</span>
          days
        </h1>
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
