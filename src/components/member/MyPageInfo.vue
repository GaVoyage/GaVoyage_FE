<template>
  <div class="profile">
    <div class="card">
      <div class="card-img">
        <img v-if="userInfo.userImageUrl == null" src="@/assets/img/profile/1.jpg" />
        <img
          v-else-if="userInfo.userImageUrl != null"
          :src="require(`@/assets/img/profile/${userInfo.userImageUrl}.jpg`)"
        />
      </div>
      <div class="desc">
        <h6 class="primary-text">{{ userInfo.nickname }}</h6>
        <h6 class="secondary-text">{{ userInfo.email }}</h6>
      </div>
      <div class="details">
        <div class="rating">
          <button
            type="button"
            class="btn-get-started"
            data-bs-toggle="modal"
            data-bs-target="#profileModif"
          >
            프로필 수정
          </button>
          <button
            type="button"
            class="btn-get-started"
            data-bs-toggle="modal"
            data-bs-target="#infoModif"
          >
            회원정보 수정
          </button>
        </div>
      </div>
    </div>
    <EditInfo></EditInfo>
    <ProfileInfo></ProfileInfo>
  </div>
</template>
<script>
import api from '@/assets/js/util/axios.js';
import EditInfo from './EditInfo.vue';
import ProfileInfo from './ProfileInfo.vue';

export default {
  name: 'MyPage',
  components: {
    EditInfo,
    ProfileInfo,
  },
  data() {
    return {
      userInfo: {},
    };
  },

  created() {
    let profileUrl = '/users/login';
    try {
      api.get(profileUrl).then(({ data }) => {
        console.log('profile data arrived', data);
        this.userInfo = data;
      });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style scoped>
.profile {
  display: flex;
  margin: 60px auto;
}
.card {
  height: 300px;
  width: 85%;
  /* width:  320px; */
  background-color: rgba(255, 255, 255, 0.36);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  /* position: absolute; */
  margin-top: 50px;
  margin: auto;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  border-radius: 8px;
  -webkit-box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.card-img {
  height: 120px;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  position: absolute;
  margin: 30px auto 20px auto;
  left: 0;
  right: 0;
}
.card-img img {
  height: 86%;
  border-radius: 50%;
  margin-left: 7%;
  margin-top: 7%;
}
.card h6 {
  margin: 0;
  color: var(--color-black);
  margin-bottom: 10px;
}
.desc {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 160px;
}
.primary-text {
  color: #d5d5d5;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.7px;
  margin: 5px 0;
}
.secondary-text {
  color: #c0c0c0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.details {
  display: flex;
  width: 100%;
  height: 70px;
  padding: 5px 0;
  grid-template-columns: auto auto;
  -webkit-backdrop-filter: blur(20px);
  position: absolute;
  bottom: 8px;
  border-radius: 0 0 8px 8px;
  align-items: center;
  justify-content: center;
}
.details > div {
  text-align: center;
}
.details > div:first-child {
  border-right: 2px solid rgba(255, 255, 255, 0.08);
}
.card a {
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 0.5px;
  position: absolute;
  right: 20px;
  top: 20px;
  border: 3px solid #ffffff;
  border-radius: 5px;
  text-decoration: none;
}
.card a > .fa {
  color: #ff0000;
}
@media screen and (min-width: 451px) {
  .card a {
    font-size: 18px;
    padding: 8px 12px 8px 12px;
  }
}

@media screen and (max-width: 450px) {
  .care a {
    font-size: 12px;
    padding: 5px 8px 5px 8px;
  }
}
</style>
