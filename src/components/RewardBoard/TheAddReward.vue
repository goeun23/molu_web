<template>
  <ul class="nearby-contct">
    <li>
      <div class="accordion" id="accordion" style="margin-top: 0; width: 100%">
        <div class="card">
          <div class="card-header" id="headingfive">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                :aria-expanded="isExpand"
                @click="showExpand"
              >
                Give Rewards
              </button>
            </h5>
          </div>
          <div class="collapse" :class="{ show: isExpand }">
            <div class="card-body">
              <div class="editing-info">
                <h5 class="f-title">
                  <i class="ti-info-alt"></i> Reward Details
                </h5>
                <form method="post">
                  <div class="form-group half">
                    <span>From </span>
                    <select v-model="rewardObj.from">
                      <option
                        v-for="(member, index) in tabList"
                        :key="index"
                        :value="member.key"
                      >
                        {{ member.name }}
                      </option>
                    </select>
                    <i class="mtrl-select"></i>
                  </div>
                  <div class="form-group half">
                    <span>To</span>

                    <select
                      style="display: in !important"
                      v-model="rewardObj.to"
                    >
                      <option
                        v-for="(member, index) in tabList"
                        :key="index"
                        :value="member.key"
                      >
                        {{ member.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group">
                    <span>Count of Rewards</span>
                    <select v-model="rewardObj.ea">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="rewardObj.reason"
                      rows="4"
                      id="textarea"
                      required="required"
                    ></textarea>
                    <label class="control-label" for="textarea"
                      >Description</label
                    ><i class="mtrl-select"></i>
                  </div>
                  <div class="submit-btns">
                    <button @click="saveReward" type="button" class="mtr-btn">
                      <span>Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isExpand: false,
      rewardObj: {
        from: "1",
        to: "1",
        ea: "1",
        reason: "",
      },
    };
  },
  methods: {
    saveReward() {
      this.$emit("saveReward", this.rewardObj);
      this.rewardObj.reason = "";
      this.rewardObj.ea = "1";
      this.showExpand();
    },
    showExpand() {
      this.isExpand = !this.isExpand;
    },
  },
};
</script>