<template>
  <div class="bg-[#F0F0F0] flex justify-center items-center h-screen flex-col">
    <div
      class="flex flex-col justify-center bg-white rounded-t-[24px] rounded-bl-[24px] rounded-br-[100px] w-[343px] h-[486px] py-[48px] px-[24px] lg:w-[840px] lg:h-[680px] lg:justify-start lg:items-start lg:p-[56px]"
    >
      <div class="flex justify-center items-center gap-x-4 lg:gap-x-8">
        <div class="flex flex-col gap-y-1 h-[120px]">
          <label
            for="day"
            :class="errorStyles(dayError)"
            class="text-gray-700 font-poppinsBold text-[12px] font-semibold tracking-widest uppercase lg:text-[14px]"
            >DAY</label
          >
          <input
            type="number"
            name="day"
            placeholder="DD"
            v-model="day"
            :class="errorStyles(dayError)"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight lg:w-[160px] lg:h-[72px] lg:text-[32px]"
          />
          <div
            v-if="dayError"
            class="text-red-600 font-poppins text-[14px] italic font-normal leading-normal"
          >
            <p>Must be a valid day</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-1 h-[120px]">
          <label
            for="month"
            :class="errorStyles(monthError)"
            class="text-gray-700 font-poppins text-[12px] font-semibold tracking-widest uppercase lg:text-[14px]"
            >MONTH</label
          >
          <input
            type="number"
            name="month"
            placeholder="MM"
            v-model="month"
            :class="errorStyles(monthError)"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight lg:w-[160px] lg:h-[72px] lg:text-[32px]"
          />
          <div
            v-if="monthError"
            class="text-red-600 font-poppins text-[14px] italic font-normal leading-normal"
          >
            <p>Must be a valid month</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-1 h-[120px]">
          <label
            for="YEAR"
            :class="errorStyles(yearError)"
            class="text-gray-700 font-poppins text-[12px] font-semibold tracking-widest uppercase lg:text-[14px]"
            >YEAR</label
          >
          <input
            type="number"
            name="year"
            placeholder="YYYY"
            v-model="year"
            :class="errorStyles(yearError)"
            class="w-[88px] h-[54px] border-[1px] border-[#DCDCDC] rounded-lg p-4 focus:outline-none text-black font-poppins text-[20px] font-semibold leading-normal tracking-tight lg:w-[160px] lg:h-[72px] lg:text-[32px]"
          />
          <div
            v-if="yearError"
            class="text-red-600 font-poppins text-[14px] italic font-normal leading-normal"
          >
            <p>Must be in the past</p>
          </div>
        </div>
      </div>
      <div
        class="h-[1px] bg-[#DCDCDC] w-full my-[32px] mb-[64px] flex items-center justify-center lg:justify-end"
      >
        <div
          class="w-[64px] h-[64px] bg-[#854DFF] rounded-full flex justify-center lg:w-[96px] lg:h-[96px]"
        >
          <img
            src="./assets/icon-arrow.svg"
            alt=""
            class="w-[20px] h-auto lg:w-[44px]"
          />
        </div>
      </div>

      <div class="">
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight lg:text-[104px]"
        >
          <span class="text-purple-800">
            {{ age.years }}
          </span>
          years
        </h1>
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight lg:text-[104px]"
        >
          <span class="text-purple-800">
            {{ age.months }}
          </span>
          months
        </h1>
        <h1
          class="text-black poppinsBold text-[56px] italic font-extrabold leading-[110%] tracking-tight lg:text-[104px]"
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
    errorStyles(error) {
      return (error) => {
        return { "border-red-600 text-red-600": error };
      };
    },
  },
};
</script>
